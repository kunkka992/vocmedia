var rule = {
    title: 'huarenok',
    host: 'https://huarenok.com',
    homeUrl: '/',
    url: '/vodshow/fyclass/page/fypage.html',
    searchUrl: '/vodsearch/wd/**/page/fypage.html',
    detailUrl: '/voddetail/fyid.html',
    searchable: 1,
    quickSearch: 1,
    filterable: 0,
    play_parse: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0',
        'Referer': 'https://huarenok.com/'
    },
    class_name: '电影&电视剧&综艺&动漫&短剧&纪录片',
    class_url: '1&2&3&4&5&42',
    推荐: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        var re = /<div class="public-list-box[\\s\\S]*?<\\/div><\\/div>/g;
        var ms = html.match(re) || [];
        for (var i = 0; i < ms.length && out.length < 30; i++) {
            var it = ms[i];
            var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
            var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/class="time-title[^"]*"[^>]*>([\\s\\S]*?)<\\/a>/) || [])[1]);
            var pic = (it.match(/data-src="([^"]+)"/) || [])[1] || '';
            var remark = stripTags((it.match(/public-list-prb[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]) || stripTags((it.match(/public-prt[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]);
            if (!id || !title || seen[id]) continue;
            seen[id] = 1;
            out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
        }
        VODS = out;
    `,
    一级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        var re = /<div class="public-list-box[\\s\\S]*?<\\/div><\\/div>/g;
        var ms = html.match(re) || [];
        for (var i = 0; i < ms.length; i++) {
            var it = ms[i];
            var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
            var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/class="time-title[^"]*"[^>]*>([\\s\\S]*?)<\\/a>/) || [])[1]);
            var pic = (it.match(/data-src="([^"]+)"/) || [])[1] || '';
            var remark = stripTags((it.match(/public-list-prb[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]) || stripTags((it.match(/public-prt[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]);
            if (!id || !title || seen[id]) continue;
            seen[id] = 1;
            out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
        }
        VODS = out;
    `,
    二级: `js:
        function stripTags(s) {
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\\s+/g, ' ').trim();
        }
        var html = request(input);
        var id = (input.match(/voddetail\\/(\\d+)\\.html/) || [])[1] || input;
        var ld = {};
        var lds = html.match(/<script type="application\\/ld\\+json">([\\s\\S]*?)<\\/script>/g) || [];
        for (var i = 0; i < lds.length; i++) {
            var txt = lds[i].replace(/^[\\s\\S]*?<script type="application\\/ld\\+json">/, '').replace(/<\\/script>[\\s\\S]*$/, '').trim();
            try {
                var obj = JSON.parse(txt);
                if (obj && obj['@type'] === 'Movie') { ld = obj; break; }
            } catch (e) {}
        }
        var name = ld.name || stripTags((html.match(/<h3 class="slide-info-title[^"]*">([\\s\\S]*?)<\\/h3>/) || [])[1]) || stripTags((html.match(/<title>([\\s\\S]*?)<\\/title>/) || [])[1]).split('-')[0];
        var pic = ld.image || (html.match(/<div class="detail-pic">[\\s\\S]*?data-src="([^"]+)"/) || [])[1] || '';
        var content = ld.description || stripTags((html.match(/<li class="top26">[\\s\\S]*?简介：<\\/em>([\\s\\S]*?)<\\/li>/) || [])[1]);
        var actor = '';
        if (ld.actor && ld.actor.length) actor = ld.actor.map(function (a) { return a.name || ''; }).filter(Boolean).join(',');
        var director = ld.director && ld.director.name ? ld.director.name : '';
        var year = ld.datePublished || stripTags((html.match(/年份：<\\/em>([\\s\\S]*?)<\\/li>/) || [])[1]);
        var area = ld.countryOfOrigin && ld.countryOfOrigin.name ? ld.countryOfOrigin.name : stripTags((html.match(/地区：<\\/em>([\\s\\S]*?)<\\/li>/) || [])[1]);
        var typeName = ld.genre && ld.genre.length ? ld.genre.join(',') : '';
        var remarks = stripTags((html.match(/备注\\s*:<\\/strong>([\\s\\S]*?)<\\/div>/) || [])[1]) || '全集';
        var block = (html.match(/<div class="anthology[\\s\\S]*?<script>/) || [])[0] || html;
        var tabNames = [];
        var tm, tr = /<a class="swiper-slide[^"]*">([\\s\\S]*?)<\\/a>/g;
        while ((tm = tr.exec(block)) !== null) {
            tabNames.push(stripTags(tm[1]) || ('线路' + (tabNames.length + 1)));
        }
        var listBlocks = [], lb, lr = /<ul class="anthology-list-play[\\s\\S]*?<\\/ul>/g;
        while ((lb = lr.exec(block)) !== null) listBlocks.push(lb[0]);
        if (!listBlocks.length) listBlocks = html.match(/<ul class="anthology-list-play[\\s\\S]*?<\\/ul>/g) || [];
        var playFrom = [], playUrls = [];
        for (var j = 0; j < listBlocks.length; j++) {
            var line = tabNames[j] || ('线路' + (j + 1));
            var eps = [], em, er = /<a[^>]+href="([^"]*\\/vodplay\\/[^"]+)"[^>]*>([\\s\\S]*?)<\\/a>/g;
            while ((em = er.exec(listBlocks[j])) !== null) {
                var epName = stripTags(em[2]) || ('第' + (eps.length + 1) + '集');
                var epUrl = em[1];
                if (epUrl.indexOf('http') !== 0) epUrl = 'https://huarenok.com' + epUrl;
                eps.push(epName + '$' + epUrl);
            }
            if (eps.length) {
                playFrom.push(line);
                playUrls.push(eps.join('#'));
            }
        }
        if (!playUrls.length) {
            playFrom = ['嗅探播放'];
            playUrls = ['播放$https://huarenok.com/vodplay/' + id + '-1-1.html'];
        }
        VOD = {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            type_name: typeName,
            vod_year: year,
            vod_area: area,
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
            return (s || '').replace(/<script[\\s\\S]*?<\\/script>/gi, '').replace(/<style[\\s\\S]*?<\\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        }
        var html = request(input);
        var out = [], seen = {};
        if (/请输入验证码|系统提示|verify/i.test(html)) {
            VODS = [];
        } else {
            var re = /<div class="public-list-box[\\s\\S]*?<\\/div><\\/div>/g;
            var ms = html.match(re) || [];
            for (var i = 0; i < ms.length; i++) {
                var it = ms[i];
                var id = (it.match(/href="\\/voddetail\\/(\\d+)\\.html"/) || [])[1];
                var title = (it.match(/title="([^"]+)"/) || [])[1] || stripTags((it.match(/class="time-title[^"]*"[^>]*>([\\s\\S]*?)<\\/a>/) || [])[1]);
                var pic = (it.match(/data-src="([^"]+)"/) || [])[1] || '';
                var remark = stripTags((it.match(/public-list-prb[^>]*>([\\s\\S]*?)<\\/span>/) || [])[1]);
                if (!id || !title || seen[id]) continue;
                seen[id] = 1;
                out.push({ vod_id: id, vod_name: title, vod_pic: pic, vod_remarks: remark });
            }
            VODS = out;
        }
    `,
    lazy: `js:
        var playUrl = input;
        try {
            var html = request(input, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 'Referer': 'https://huarenok.com/'}});
            var m = html.match(/var mac_player_info=({[\\s\\S]*?})<\\/script>/);
            if (m) {
                var info = JSON.parse(m[1]);
                var raw = info.url || input;
                var from = info.from || 'ARTA';
                if (/^(http|\\/)/.test(raw) && /m3u8|mp4/.test(raw)) {
                    playUrl = raw.indexOf('http') === 0 ? raw : 'https://huarenok.com' + raw;
                } else {
                    playUrl = 'https://newplayer.huaren.live/player/index.php?code=' + encodeURIComponent(from) + '&url=' + encodeURIComponent(raw) + '&tittle=' + encodeURIComponent((info.vod_data && info.vod_data.vod_name) || 'huarenok');
                }
            }
        } catch (e) {}
        input = {parse: 1, jx: 0, url: playUrl, header: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 'Referer': 'https://huarenok.com/'}};
    `
}

