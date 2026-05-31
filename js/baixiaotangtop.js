var rule = {
    title: '百晓堂',
    host: 'https://www.baixiaotangtop.com',
    homeUrl: '/',
    detailUrl: '/voddetail/fyid.html',
    url: '/vodshow/fyfilter.html',
    searchUrl: '/vodsearch/-------------.html?wd=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    play_parse: true,
    filter_url: '{{fl.cate}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter_def: {
        1: { cate: '1', by: 'time' },
        2: { cate: '2', by: 'time' },
        3: { cate: '3', by: 'time' },
        4: { cate: '4', by: 'time' },
        36: { cate: '36', by: 'time' }
    },
    filter: {},
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'Referer': 'https://www.baixiaotangtop.com/'
    },
    class_name: '电影&电视剧&综艺&动漫&短剧',
    class_url: '1&2&3&4&36',
    预处理: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function parts(href) {
            var m = (href || '').match(/\\/vodshow\\/([^.]*)\\.html/);
            var arr = m ? m[1].split('-') : [];
            while (arr.length < 12) arr.push('');
            return arr;
        }
        function valByKey(href, key) {
            var p = parts(href);
            if (key === 'cate') return p[0] || '';
            if (key === 'area') return p[1] || '';
            if (key === 'by') return p[2] || '';
            if (key === 'class') return p[3] || '';
            if (key === 'lang') return p[4] || '';
            if (key === 'letter') return p[5] || '';
            if (key === 'year') return p[11] || '';
            return '';
        }
        function addFilter(filters, key, name, block) {
            var value = [], seen = {}, m, r = /<a[^>]+href="([^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/g;
            while ((m = r.exec(block)) !== null) {
                var n = stripTags(m[2]);
                var v = valByKey(m[1], key);
                var sk = n + '$' + v;
                if (!n || seen[sk]) continue;
                seen[sk] = 1;
                value.push({ n: n, v: v });
            }
            if (value.length) filters.push({ key: key, name: name, value: value });
        }
        var ids = ['1', '2', '3', '4', '36'];
        var names = { cate: '按分类', class: '按剧情', area: '按地区', year: '按年份', lang: '按语言', letter: '按字母', by: '排序' };
        var keys = ['cate', 'class', 'area', 'year', 'lang', 'letter'];
        var filter = {};
        for (var i = 0; i < ids.length; i++) {
            var tid = ids[i];
            var html = request(HOST + '/vodtype/' + tid + '.html');
            var blocks = html.match(/<div class="ewave-screen__list[\\s\\S]*?<\\/div><\\/div>/g) || [];
            var fs = [];
            for (var j = 0; j < blocks.length && j < keys.length; j++) {
                addFilter(fs, keys[j], names[keys[j]], blocks[j]);
            }
            var sortBlock = (html.match(/<ul class="nav nav-head">([\\s\\S]*?)<\\/ul>/) || [])[1] || '';
            addFilter(fs, 'by', names.by, sortBlock);
            filter[tid] = fs;
        }
        rule.filter = filter;
    `,
    推荐: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        var re = /<li class="[^"]*col-[\\s\\S]*?<\\/li>/g;
        var ms = html.match(re) || [];
        for (var i = 0; i < ms.length && out.length < 30; i++) {
            var it = ms[i];
            var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
            var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/<h4[\\s\\S]*?<a[\\s\\S]*?>([\\s\\S]*?)<\\/a>/) || [])[1]);
            var pic = (it.match(/data-original="([^"]+)"/) || [])[1] || '';
            var remark = stripTags((it.match(/<span class="pic-text[^"]*">([\\s\\S]*?)<\\/span>/) || [])[1]);
            if (!id || !title || seen[id]) continue;
            seen[id] = 1;
            out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
        }
        VODS = out;
    `,
    一级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        var re = /<li class="[^"]*col-[\\s\\S]*?<\\/li>/g;
        var ms = html.match(re) || [];
        for (var i = 0; i < ms.length; i++) {
            var it = ms[i];
            var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
            var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/<h4[\\s\\S]*?<a[\\s\\S]*?>([\\s\\S]*?)<\\/a>/) || [])[1]);
            var pic = (it.match(/data-original="([^"]+)"/) || [])[1] || '';
            var remark = stripTags((it.match(/<span class="pic-text[^"]*">([\\s\\S]*?)<\\/span>/) || [])[1]);
            if (!id || !title || seen[id]) continue;
            seen[id] = 1;
            out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
        }
        VODS = out;
    `,
    二级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\\s+/g, ' ').trim();
        }
        function texts(block) {
            var a = [], m, r = /<a[^>]*>([\\s\\S]*?)<\\/a>/g;
            while ((m = r.exec(block || '')) !== null) {
                var t = stripTags(m[1]);
                if (t) a.push(t);
            }
            return a.join(',');
        }
        var html = request(input);
        var id = (input.match(/voddetail\\/(\\d+)\\.html/) || [])[1] || input;
        var name = stripTags((html.match(/<h1 class="title">[\\s\\S]*?<span[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]) || stripTags((html.match(/<title>([\\s\\S]*?)<\\/title>/) || [])[1]).split('_')[0];
        var pic = (html.match(/<div class="ewave-vodlist__thumb picture[\\s\\S]*?data-original="([^"]+)"/) || [])[1] || (html.match(/data-original="([^"]+)"/) || [])[1] || '';
        var remarks = stripTags((html.match(/<span class="pic-text[^"]*">([\\s\\S]*?)<\\/span>/) || [])[1]);
        var desc = html.match(/<p class="data">([\\s\\S]*?)<\\/p>/g) || [];
        var info = texts(desc[0] || '').split(',');
        var actor = texts(desc[1] || '');
        var director = texts(desc[2] || '');
        var content = stripTags((html.match(/<p class="desc[\\s\\S]*?简介：[\\s\\S]*?<\\/span>([\\s\\S]*?)<a/) || [])[1]) || stripTags((html.match(/<meta name="description" content="([^"]+)"/) || [])[1]);
        var tabNames = [], tm, tr = /<ul class="nav nav-tabs[\\s\\S]*?<\\/ul>/g;
        var tabHtml = (html.match(tr) || [''])[0];
        var tar = /<a[^>]*>([\\s\\S]*?)<\\/a>/g;
        while ((tm = tar.exec(tabHtml)) !== null) tabNames.push(stripTags(tm[1]) || ('线路' + (tabNames.length + 1)));
        var listBlocks = [], lb, lr = /<div id="playlist\\d+"[\\s\\S]*?<\\/ul>[\\s\\S]*?<\\/div>/g;
        while ((lb = lr.exec(html)) !== null) listBlocks.push(lb[0]);
        var playFrom = [], playUrls = [];
        for (var i = 0; i < listBlocks.length; i++) {
            var eps = [], em, er = /<a[^>]+href="([^"]*\\/vodplay\\/[^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/g;
            while ((em = er.exec(listBlocks[i])) !== null) {
                var epName = stripTags(em[2]) || ('第' + (eps.length + 1) + '集');
                var epUrl = em[1];
                if (epUrl.indexOf('http') !== 0) epUrl = HOST + epUrl;
                eps.push(epName + '$' + epUrl);
            }
            if (eps.length) {
                playFrom.push(tabNames[i] || ('线路' + (i + 1)));
                playUrls.push(eps.join('#'));
            }
        }
        VOD = {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            type_name: info[0] || '',
            vod_area: info[1] || '',
            vod_year: info[2] || '',
            vod_remarks: remarks,
            vod_actor: actor,
            vod_director: director,
            vod_content: content,
            vod_play_from: playFrom.join('$$$'),
            vod_play_url: playUrls.join('$$$')
        };
    `,
    搜索: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        var re = /<li class="active clearfix">[\\s\\S]*?<\\/li>/g;
        var ms = html.match(re) || [];
        if (!ms.length) ms = html.match(/<li class="[^"]*col-[\\s\\S]*?<\\/li>/g) || [];
        for (var i = 0; i < ms.length; i++) {
            var it = ms[i];
            var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
            var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/<h[34][^>]*class="title"[\\s\\S]*?<a[\\s\\S]*?>([\\s\\S]*?)<\\/a>/) || [])[1]);
            var pic = (it.match(/data-original="([^"]+)"/) || [])[1] || '';
            var remark = stripTags((it.match(/<span class="pic-text[^"]*">([\\s\\S]*?)<\\/span>/) || [])[1]);
            if (!id || !title || seen[id]) continue;
            seen[id] = 1;
            out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
        }
        VODS = out;
    `,
    lazy: `js:
        var playUrl = input;
        try {
            var html = request(input, { headers: rule.headers });
            var m = html.match(/var player_\\w+=({[\\s\\S]*?})<\\/script>/);
            if (m) {
                var info = JSON.parse(m[1]);
                var raw = info.url || input;
                if (info.encrypt == '1') raw = unescape(raw);
                if (info.encrypt == '2') raw = unescape(base64Decode(raw));
                playUrl = raw.indexOf('http') === 0 ? raw : HOST + raw;
            }
        } catch (e) {}
        input = { parse: 0, jx: 0, url: playUrl, header: rule.headers };
    `
}
