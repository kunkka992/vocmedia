/**
 * 天天影院 drpy2 规则
 * https://www.baixiaotangtop.com
 * 苹果CMS V10 ewave模板
 *
 * URL结构分析:
 *   列表页: /vodshow/{typeId}-{area}---{class}-{lang}-{letter}--{year}-{page}---.html
 *   分页:   /vodshow/1--------{page}---.html
 *   详情页: /voddetail/{id}.html
 *   播放页: /vodplay/{id}-{source}-{ep}.html
 *   搜索页: /vodsearch/{keyword}----------{page}.html
 */

const siteUrl = 'https://www.baixiaotangtop.com';

// 主分类 typeId 映射
const mainCats = [
    { type_id: '1',  type_name: '电影' },
    { type_id: '2',  type_name: '电视剧' },
    { type_id: '3',  type_name: '综艺' },
    { type_id: '4',  type_name: '动漫' },
    { type_id: '36', type_name: '短剧' },
];

// ─── 工具函数 ───────────────────────────────────────────────────────────────

function fetch(url) {
    return req(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': siteUrl,
        },
        timeout: 10000,
    });
}

function decodeHtml(str) {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#039;/g, "'")
        .replace(/&quot;/g, '"');
}

// 从列表 HTML 提取视频卡片
function parseVodList(html) {
    const list = [];
    // 匹配每一个视频卡片块
    const reg = /class="ewave-vodlist__thumb[^"]*"[^>]*title="([^"]+)"[^>]*data-original="([^"]*)"[\s\S]*?href="(\/voddetail\/(\d+)\.html)"[\s\S]*?class="pic-text[^"]*">([^<]*)<\/span>/g;
    let m;
    while ((m = reg.exec(html)) !== null) {
        const vod_name   = decodeHtml(m[1]);
        const vod_pic    = m[2].startsWith('http') ? m[2] : '';
        const vod_id     = siteUrl + m[3];
        const vod_remarks = m[5].trim();
        if (vod_name && vod_id) {
            list.push({ vod_id, vod_name, vod_pic, vod_remarks });
        }
    }
    return list;
}

// 从筛选 HTML 提取一组筛选项
function parseFilterGroup(html, slideClass, urlExtract) {
    const items = [{ n: '全部', v: '' }];
    const reg = new RegExp(`class="${slideClass}[^"]*"[\\s\\S]*?<ul[^>]*>([\\s\\S]*?)<\\/ul>`, 'i');
    const block = html.match(reg);
    if (!block) return items;
    const linkReg = /href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
    let m;
    const seen = new Set();
    while ((m = linkReg.exec(block[1])) !== null) {
        const label = m[2].trim();
        if (label === '全部') continue;
        const val = urlExtract(m[1]);
        if (val && !seen.has(val)) {
            seen.add(val);
            items.push({ n: label, v: val });
        }
    }
    return items;
}

// 动态解析某分类的所有筛选
async function fetchFilters(typeId) {
    const filters = [];
    try {
        const res  = await fetch(`${siteUrl}/vodshow/${typeId}-----------.html`);
        const html = res.content;

        // 1. 按分类（子类型）
        const cateItems = [{ n: '全部', v: typeId }];
        const cateReg = /class="channel-slide[^"]*"[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i;
        const cateBlock = html.match(cateReg);
        if (cateBlock) {
            const lr = /href="[^"]*\/vodshow\/(\d+)-{11}\.html"[^>]*>\s*([^<]+)\s*<\/a>/g;
            let m;
            const seen = new Set([typeId]);
            while ((m = lr.exec(cateBlock[1])) !== null) {
                const label = m[2].trim();
                if (!seen.has(m[1])) {
                    seen.add(m[1]);
                    cateItems.push({ n: label, v: m[1] });
                }
            }
        }
        if (cateItems.length > 1) {
            filters.push({ key: 'cate', name: '分类', value: cateItems });
        }

        // 2. 按剧情 class
        const classItems = parseFilterGroup(html, 'class-slide', (url) => {
            const m = url.match(/vodshow\/\d+---([\w\u4e00-\u9fa5]+)-------/);
            return m ? decodeURIComponent(m[1]) : '';
        });
        if (classItems.length > 1) {
            filters.push({ key: 'class', name: '剧情', value: classItems });
        }

        // 3. 按地区
        const areaItems = parseFilterGroup(html, 'area-slide', (url) => {
            const m = url.match(/vodshow\/\d+-([\w\u4e00-\u9fa5]+)----------/);
            return m ? decodeURIComponent(m[1]) : '';
        });
        if (areaItems.length > 1) {
            filters.push({ key: 'area', name: '地区', value: areaItems });
        }

        // 4. 按年份（动态，自动包含新年份）
        const yearItems = parseFilterGroup(html, 'year-slide', (url) => {
            const m = url.match(/vodshow\/\d+-----------(\d{4})\.html/);
            return m ? m[1] : '';
        });
        if (yearItems.length > 1) {
            filters.push({ key: 'year', name: '年份', value: yearItems });
        }

        // 5. 按语言
        const langItems = parseFilterGroup(html, 'lang-slide', (url) => {
            const m = url.match(/vodshow\/\d+----([\w\u4e00-\u9fa5]+)-------.html/);
            return m ? decodeURIComponent(m[1]) : '';
        });
        if (langItems.length > 1) {
            filters.push({ key: 'lang', name: '语言', value: langItems });
        }

        // 6. 按字母
        const letterItems = parseFilterGroup(html, 'letter-slide', (url) => {
            const m = url.match(/vodshow\/\d+-----([A-Z])------.html/);
            return m ? m[1] : '';
        });
        if (letterItems.length > 1) {
            filters.push({ key: 'letter', name: '字母', value: letterItems });
        }

    } catch (e) {}
    return filters;
}

// ─── drpy2 接口实现 ──────────────────────────────────────────────────────────

async function homeContent(filter) {
    // 返回分类列表 + 各分类筛选
    const filtersMap = {};
    if (filter) {
        for (const cat of mainCats) {
            filtersMap[cat.type_id] = await fetchFilters(cat.type_id);
        }
    }
    return JSON.stringify({
        class: mainCats,
        filters: filtersMap,
    });
}

async function homeVideoContent() {
    // 首页各分类最新
    try {
        const res  = await fetch(`${siteUrl}/vodshow/1-----------.html`);
        const list = parseVodList(res.content);
        return JSON.stringify({ list });
    } catch (e) {
        return JSON.stringify({ list: [] });
    }
}

async function categoryContent(tid, pg, filter, extend) {
    /**
     * URL格式: /vodshow/{typeId}-{area}---{class}-{lang}-{letter}--{year}-{page}---.html
     *
     * 位置（0-based，用 - 分隔）:
     *  0  typeId / cate
     *  1  area
     *  2  (空)
     *  3  (空)
     *  4  class
     *  5  lang
     *  6  letter
     *  7  (空)
     *  8  (空)
     *  9  year
     * 10  page
     * 11  (空)
     * 12  (空)
     * 13  (空)
     */
    const cate   = (extend && extend.cate)   ? extend.cate   : tid;
    const area   = (extend && extend.area)   ? encodeURIComponent(extend.area)   : '';
    const cls    = (extend && extend.class)  ? encodeURIComponent(extend.class)  : '';
    const lang   = (extend && extend.lang)   ? encodeURIComponent(extend.lang)   : '';
    const letter = (extend && extend.letter) ? extend.letter : '';
    const year   = (extend && extend.year)   ? extend.year   : '';
    const page   = pg || 1;

    // /vodshow/{cate}-{area}---{class}-{lang}-{letter}--{year}-{page}---.html
    const url = `${siteUrl}/vodshow/${cate}-${area}---${cls}-${lang}-${letter}--${year}-${page}---.html`;

    try {
        const res  = await fetch(url);
        const html = res.content;
        const list = parseVodList(html);

        // 解析总页数: <span class="num">1/1189</span>
        let pagecount = 1;
        const pcMatch = html.match(/<span class="num">\d+\/(\d+)<\/span>/);
        if (pcMatch) pagecount = parseInt(pcMatch[1]);

        return JSON.stringify({
            list,
            page: parseInt(page),
            pagecount,
            limit: 36,
            total: pagecount * 36,
        });
    } catch (e) {
        return JSON.stringify({ list: [], page: 1, pagecount: 1, limit: 36, total: 0 });
    }
}

async function detailContent(ids) {
    const id  = ids[0];
    const url = id.startsWith('http') ? id : `${siteUrl}${id}`;

    try {
        const res  = await fetch(url);
        const html = res.content;

        // 标题
        const nameM = html.match(/<h1 class="title">\s*<span>([^<]+)<\/span>/);
        const vod_name = nameM ? decodeHtml(nameM[1]) : '';

        // 封面
        const picM = html.match(/class="ewave-vodlist__thumb picture[^"]*"[\s\S]*?data-original="([^"]+)"/);
        const vod_pic = picM ? picM[1] : '';

        // 类型/地区/年份 行
        const dataBlock = html.match(/类型：<\/span>([\s\S]*?)<\/p>/);
        let vod_type = '', vod_area = '', vod_year = '';
        if (dataBlock) {
            const text = dataBlock[1];
            const typeM = text.match(/target="_blank">([^<]+)<\/a>/);
            if (typeM) vod_type = typeM[1];
        }
        const areaM = html.match(/地区：<\/span>[\s\S]*?target="_blank">([^<]+)<\/a>/);
        if (areaM) vod_area = areaM[1];
        const yearM = html.match(/年份：<\/span>[\s\S]*?target="_blank">(\d{4})<\/a>/);
        if (yearM) vod_year = yearM[1];

        // 主演
        const actorBlock = html.match(/主演：<\/span>([\s\S]*?)<\/p>/);
        let vod_actor = '';
        if (actorBlock) {
            vod_actor = actorBlock[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }

        // 导演
        const dirBlock = html.match(/导演：<\/span>([\s\S]*?)<\/p>/);
        let vod_director = '';
        if (dirBlock) {
            vod_director = dirBlock[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }

        // 简介
        const descM = html.match(/剧情简介：<\/b>&nbsp;([\s\S]*?)<br>/);
        const vod_content = descM ? descM[1].replace(/<[^>]+>/g, '').trim() : '';

        // 评分
        const scoreM = html.match(/class="score text-red raty-score-num">([^<]+)<\/span>/);
        const vod_score = scoreM ? scoreM[1].trim() : '';

        // ── 解析播放列表 ──
        // 播放源 Tab 名称
        const sourceNames = {};
        const sourceReg = /href="[^"]*#playlist(\d+)"[^>]*>([^<]+)<\/a>/g;
        let sm;
        while ((sm = sourceReg.exec(html)) !== null) {
            sourceNames[sm[1]] = sm[2].trim();
        }

        const vod_play_from_arr = [];
        const vod_play_url_arr  = [];

        // 每个 playlist 块内的集数链接
        const playlistReg = /<div id="playlist(\d+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
        let pm;
        while ((pm = playlistReg.exec(html)) !== null) {
            const sourceIdx  = pm[1];
            const sourceName = sourceNames[sourceIdx] || `资源${sourceIdx}`;
            const block      = pm[2];

            const epReg = /<a href="(\/vodplay\/[^"]+)">([^<]+)<\/a>/g;
            const eps   = [];
            let em;
            while ((em = epReg.exec(block)) !== null) {
                eps.push(`${em[2].trim()}$${siteUrl}${em[1]}`);
            }

            if (eps.length > 0) {
                vod_play_from_arr.push(sourceName);
                vod_play_url_arr.push(eps.join('#'));
            }
        }

        const vod = {
            vod_id:          id,
            vod_name,
            vod_pic,
            vod_type,
            vod_area,
            vod_year,
            vod_actor,
            vod_director,
            vod_content,
            vod_score,
            vod_play_from:   vod_play_from_arr.join('$$$'),
            vod_play_url:    vod_play_url_arr.join('$$$'),
        };

        return JSON.stringify({ list: [vod] });
    } catch (e) {
        return JSON.stringify({ list: [] });
    }
}

async function playerContent(flag, id, vipFlags) {
    /**
     * id 形如: https://www.baixiaotangtop.com/vodplay/115750-1-1.html
     * 播放地址直接在 <video src="...m3u8..."> 里，无需解析器
     */
    const url = id.startsWith('http') ? id : `${siteUrl}${id}`;

    try {
        const res  = await fetch(url);
        const html = res.content;

        // 直接从 video 标签 src 取 m3u8
        const m3u8M = html.match(/<video[^>]+\ssrc="(https?:\/\/[^"]+\.m3u8[^"]*)"/);
        if (m3u8M) {
            return JSON.stringify({
                parse:  0,
                url:    m3u8M[1],
                header: { 'Referer': siteUrl },
            });
        }

        // 备用：JS 变量里的 url 字段
        const jsUrlM = html.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
        if (jsUrlM) {
            return JSON.stringify({
                parse:  0,
                url:    jsUrlM[1],
                header: { 'Referer': siteUrl },
            });
        }

        // 兜底：交给外部解析
        return JSON.stringify({ parse: 1, url: id });
    } catch (e) {
        return JSON.stringify({ parse: 1, url: id });
    }
}

async function searchContent(key, quick, pg) {
    // /vodsearch/{keyword}----------{page}.html
    const page = pg || 1;
    const url  = `${siteUrl}/vodsearch/${encodeURIComponent(key)}----------${page}.html`;

    try {
        const res  = await fetch(url);
        const html = res.content;
        const list = parseVodList(html);

        // 搜索结果总页数
        let pagecount = 1;
        const pcM = html.match(/<span class="num">\d+\/(\d+)<\/span>/);
        if (pcM) pagecount = parseInt(pcM[1]);

        return JSON.stringify({ list, pagecount });
    } catch (e) {
        return JSON.stringify({ list: [] });
    }
}
