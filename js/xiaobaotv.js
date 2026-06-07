var rule = {
    title: '小宝影院',
    host: 'https://www.xiaobaotv.com',
    homeUrl: '/',
    detailUrl: '/vod/detail/fyid.html',
    url: '/vod/type/fyclass-fypage.html',
    searchUrl: '/search.html?wd=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    play_parse: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'Referer': 'https://www.xiaobaotv.com/'
    },
    class_name: '电影&电视剧&综艺&动漫&短剧',
    class_url: '1&2&4&3&11',
    filter: {},
    预处理: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function dec(s) {
            try { return decodeURIComponent(s || ''); } catch (e) { return s || ''; }
        }
        function abs(u) {
            if (!u) return '';
            if (/^https?:\\/\\//i.test(u)) return u;
            return rule.host + (u.charAt(0) === '/' ? u : '/' + u);
        }
        function valFromHref(href, key) {
            href = href || '';
            if (key === 'id') {
                var m1 = href.match(/\\/vod\\/show\\/id\\/(\\d+)\\.html/);
                var m2 = href.match(/\\/id\\/(\\d+)(?:\\/|\\.html)/);
                return (m1 && m1[1]) || (m2 && m2[1]) || '';
            }
            var m = href.match(new RegExp('/' + key + '/([^/]+)(?:/|\\\\.html)'));
            return m ? dec(m[1]) : '';
        }
        function parseFilters(html, tid) {
            var rows = [];
            var re = /<ul[^>]+class="[^"]*myui-screen__list[^"]*"[^>]*>([\\s\\S]*?)<\\/ul>/g, m;
            while ((m = re.exec(html)) !== null) {
                var ul = m[1], title = stripTags((ul.match(/<li>\\s*<a[^>]*>([\\s\\S]*?)<\\/a>\\s*<\\/li>/) || [,''])[1]);
                var key = ({'类型':'id','剧情':'class','地区':'area','年份':'year','语言':'lang','排序':'by'})[title];
                if (!key) continue;
                var vals = [], aRe = /<a[^>]+href="([^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/g, a;
                while ((a = aRe.exec(ul)) !== null) {
                    var n = stripTags(a[2]);
                    if (!n || n === title) continue;
                    var v = n === '全部' ? '' : valFromHref(a[1], key);
                    if (key === 'by' && !v) {
                        var bm = a[1].match(/\\/by\\/([^/]+)\\//);
                        v = bm ? bm[1] : 'time';
                    }
                    if (key === 'year' && !v) {
                        var ym = a[1].match(/\\/year\\/(\\d+)\\.html/);
                        v = ym ? ym[1] : '';
                    }
                    if (n === '全部') v = '';
                    if (key === 'id' && n === '全部') v = tid;
                    vals.push({ n: n, v: String(v) });
                }
                if (vals.length) rows.push({ key: key, name: title, value: vals });
            }
            return rows;
        }
        var filters = {};
        var tids = ['1', '2', '4', '3', '11'];
        for (var i = 0; i < tids.length; i++) {
            try {
                var html = request(rule.host + '/vod/type/' + tids[i] + '.html', { headers: rule.headers });
                filters[tids[i]] = parseFilters(html, tids[i]);
            } catch (e) {
                filters[tids[i]] = [];
            }
        }
        rule.filter = filters;
    `,
    推荐: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function abs(u) {
            if (!u) return '';
            if (/^https?:\\/\\//i.test(u)) return u;
            return rule.host + (u.charAt(0) === '/' ? u : '/' + u);
        }
        function list(html) {
            var out = [], seen = {}, re = /<a[^>]+class="[^"]*myui-vodlist__thumb[^"]*"[^>]+href="\\/vod\\/detail\\/(\\d+)\\.html"[^>]*[\\s\\S]*?<\\/a>/g, m;
            while ((m = re.exec(html)) !== null) {
                var tag = m[0], id = m[1];
                if (seen[id]) continue;
                seen[id] = 1;
                var name = stripTags((tag.match(/title="([^"]+)"/) || [,''])[1]);
                var pic = (tag.match(/data-original="([^"]+)"/) || tag.match(/src="([^"]+)"/) || [,''])[1];
                var remark = stripTags((tag.match(/<span[^>]+class="[^"]*pic-text[^"]*"[^>]*>([\\s\\S]*?)<\\/span>/) || [,''])[1]);
                if (id && name) out.push({ vod_id: id, vod_name: name, vod_pic: abs(pic), vod_remarks: remark });
            }
            return out;
        }
        var html = request(rule.host + '/', { headers: rule.headers });
        VODS = list(html);
    `,
    一级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function abs(u) {
            if (!u) return '';
            if (/^https?:\\/\\//i.test(u)) return u;
            return rule.host + (u.charAt(0) === '/' ? u : '/' + u);
        }
        function enc(v) { return encodeURIComponent(v || ''); }
        function list(html) {
            var out = [], seen = {}, re = /<a[^>]+class="[^"]*myui-vodlist__thumb[^"]*"[^>]+href="\\/vod\\/detail\\/(\\d+)\\.html"[^>]*[\\s\\S]*?<\\/a>/g, m;
            while ((m = re.exec(html)) !== null) {
                var tag = m[0], id = m[1];
                if (seen[id]) continue;
                seen[id] = 1;
                var name = stripTags((tag.match(/title="([^"]+)"/) || [,''])[1]);
                var pic = (tag.match(/data-original="([^"]+)"/) || tag.match(/src="([^"]+)"/) || [,''])[1];
                var remark = stripTags((tag.match(/<span[^>]+class="[^"]*pic-text[^"]*"[^>]*>([\\s\\S]*?)<\\/span>/) || [,''])[1]);
                if (id && name) out.push({ vod_id: id, vod_name: name, vod_pic: abs(pic), vod_remarks: remark });
            }
            return out;
        }
        var cate = String(MY_CATE || ''), pg = Number(MY_PAGE || 1), fl = MY_FL || {};
        var tid = fl.id || cate, has = fl.id || fl.class || fl.area || fl.year || fl.lang || fl.by;
        var url;
        if (!has) {
            url = rule.host + '/vod/type/' + cate + '-' + pg + '.html';
        } else {
            var parts = ['/vod/show'];
            if (fl.area) parts.push('area/' + enc(fl.area));
            parts.push('by/' + (fl.by || 'time'));
            if (fl.class) parts.push('class/' + enc(fl.class));
            parts.push('id/' + tid);
            if (fl.lang) parts.push('lang/' + enc(fl.lang));
            parts.push('page/' + pg);
            if (fl.year) parts.push('year/' + enc(fl.year));
            url = rule.host + parts.join('/') + '.html';
        }
        var html = request(url, { headers: rule.headers });
        VODS = list(html);
    `,
    二级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/\\s+/g, ' ').trim();
        }
        function abs(u) {
            if (!u) return '';
            if (/^https?:\\/\\//i.test(u)) return u;
            return rule.host + (u.charAt(0) === '/' ? u : '/' + u);
        }
        var id = String(input).replace(/^.*?(\\d+).*$/, '$1');
        var html = request(rule.host + '/vod/detail/' + id + '.html', { headers: rule.headers });
        var name = stripTags((html.match(/<h1[^>]+class="title"[^>]*>([\\s\\S]*?)<\\/h1>/) || [,''])[1]) || stripTags((html.match(/<title>([^<]+)/) || [,''])[1]).replace(/ - .*/, '');
        var pic = (html.match(/<meta property="og:image" content="([^"]+)"/) || html.match(/data-original="([^"]+)"/) || [,''])[1];
        var type = stripTags((html.match(/分类：<\\/span>([\\s\\S]*?)<span class="split-line"/) || [,''])[1]);
        var area = stripTags((html.match(/地区：<\\/span>([\\s\\S]*?)<span class="split-line"/) || [,''])[1]);
        var year = stripTags((html.match(/年份：<\\/span>([\\s\\S]*?)<\\/p>/) || [,''])[1]);
        var remarks = stripTags((html.match(/更新：<\\/span><span[^>]*>([\\s\\S]*?)<\\/span>/) || [,''])[1]);
        var actor = stripTags((html.match(/主演：<\\/span>([\\s\\S]*?)<\\/p>/) || [,''])[1]);
        var director = stripTags((html.match(/导演：<\\/span>([\\s\\S]*?)<\\/p>/) || [,''])[1]);
        var content = stripTags((html.match(/<span class="data"[^>]*>([\\s\\S]*?)<\\/span>/) || html.match(/<span class="sketch content">([\\s\\S]*?)<\\/span>/) || [,''])[1]);
        var from = [], urls = [];
        var tabRe = /<div id="playlist(\\d+)"[\\s\\S]*?<ul[^>]*>([\\s\\S]*?)<\\/ul>[\\s\\S]*?<\\/div>/g, tm;
        while ((tm = tabRe.exec(html)) !== null) {
            var idx = tm[1], block = tm[2], nav = (html.match(new RegExp('<a href="#playlist' + idx + '"[^>]*>([\\\\s\\\\S]*?)<\\\\/a>')) || [,'线路' + idx])[1];
            from.push(stripTags(nav));
            var ep = [], aRe = /<a[^>]+href="([^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/g, a;
            while ((a = aRe.exec(block)) !== null) {
                ep.push(stripTags(a[2]) + '$' + abs(a[1]));
            }
            urls.push(ep.join('#'));
        }
        VOD = {
            vod_id: id,
            vod_name: name,
            vod_pic: abs(pic),
            type_name: type,
            vod_year: year,
            vod_area: area,
            vod_remarks: remarks,
            vod_actor: actor,
            vod_director: director,
            vod_content: content,
            vod_play_from: from.join('$$$'),
            vod_play_url: urls.join('$$$')
        };
    `,
    搜索: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function abs(u) {
            if (!u) return '';
            if (/^https?:\\/\\//i.test(u)) return u;
            return rule.host + (u.charAt(0) === '/' ? u : '/' + u);
        }
        function list(html) {
            var out = [], seen = {}, re = /<a[^>]+class="[^"]*myui-vodlist__thumb[^"]*"[^>]+href="\\/vod\\/detail\\/(\\d+)\\.html"[^>]*[\\s\\S]*?<\\/a>/g, m;
            while ((m = re.exec(html)) !== null) {
                var tag = m[0], id = m[1];
                if (seen[id]) continue;
                seen[id] = 1;
                var name = stripTags((tag.match(/title="([^"]+)"/) || [,''])[1]);
                var pic = (tag.match(/data-original="([^"]+)"/) || tag.match(/src="([^"]+)"/) || [,''])[1];
                var remark = stripTags((tag.match(/<span[^>]+class="[^"]*pic-text[^"]*"[^>]*>([\\s\\S]*?)<\\/span>/) || [,''])[1]);
                if (id && name) out.push({ vod_id: id, vod_name: name, vod_pic: abs(pic), vod_remarks: remark });
            }
            return out;
        }
        var html = request(rule.host + '/search.html?wd=' + encodeURIComponent(KEY), { headers: rule.headers });
        VODS = list(html);
    `,
    lazy: `js:
        function unesc(s) {
            return (s || '').replace(/\\\\\\//g, '/').replace(/&amp;/g, '&');
        }
        if (/\\.m3u8|\\.mp4/i.test(input)) {
            input = { parse: 0, jx: 0, url: input, header: rule.headers };
        } else {
            var html = request(input, { headers: rule.headers });
            var m = html.match(/var player_aaaa=({[\\s\\S]*?})<\\/script>/);
            var url = '';
            if (m) {
                try { url = JSON.parse(m[1]).url || ''; } catch (e) {
                    var u = m[1].match(/"url":"([^"]+)"/);
                    url = u ? u[1] : '';
                }
            }
            input = { parse: 0, jx: 0, url: unesc(url), header: rule.headers };
        }
    `
}
