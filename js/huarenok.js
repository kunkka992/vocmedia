var rule = {
    title: 'huarenok',
    host: 'https://huarenok.com',
    homeUrl: '/',
    url: '/vodshow/fyfilter.html',
    searchUrl: '/vodsearch/wd/**/page/fypage.html',
    detailUrl: '/voddetail/fyid.html',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    filter_url: '{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}/page/fypage{{fl.year}}',
    filter: {
        '1': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '1'}, {n: '奇幻科幻', v: '6'}, {n: '战争犯罪', v: '10'}, {n: '悬疑恐怖惊悚', v: '8'}, {n: '爱情喜剧剧情', v: '9'}, {n: '动作冒险灾难', v: '7'}, {n: '动画电影', v: '11'}, {n: '网络电影', v: '12'}, {n: '4K影库', v: '53'}, {n: '其他', v: '13'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '/area/大陆'}, {n: '香港', v: '/area/香港'}, {n: '台湾', v: '/area/台湾'}, {n: '美国', v: '/area/美国'}, {n: '法国', v: '/area/法国'}, {n: '英国', v: '/area/英国'}, {n: '日本', v: '/area/日本'}, {n: '韩国', v: '/area/韩国'}, {n: '德国', v: '/area/德国'}, {n: '泰国', v: '/area/泰国'}, {n: '印度', v: '/area/印度'}, {n: '意大利', v: '/area/意大利'}, {n: '西班牙', v: '/area/西班牙'}, {n: '加拿大', v: '/area/加拿大'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '喜剧', v: '/class/喜剧'}, {n: '爱情', v: '/class/爱情'}, {n: '动作', v: '/class/动作'}, {n: '科幻', v: '/class/科幻'}, {n: '恐怖', v: '/class/恐怖'}, {n: '悬疑', v: '/class/悬疑'}, {n: '惊悚', v: '/class/惊悚'}, {n: '犯罪', v: '/class/犯罪'}, {n: '剧情', v: '/class/剧情'}, {n: '战争', v: '/class/战争'}, {n: '冒险', v: '/class/冒险'}, {n: '动画', v: '/class/动画'}, {n: '灾难', v: '/class/灾难'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}, {n: '2019', v: '/year/2019'}, {n: '2018', v: '/year/2018'}, {n: '2017', v: '/year/2017'}, {n: '2016', v: '/year/2016'}, {n: '2015', v: '/year/2015'}, {n: '2014', v: '/year/2014'}, {n: '2013', v: '/year/2013'}, {n: '2012', v: '/year/2012'}, {n: '2011', v: '/year/2011'}, {n: '2010', v: '/year/2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}, {n: '英语', v: '/lang/英语'}, {n: '粤语', v: '/lang/粤语'}, {n: '闽南语', v: '/lang/闽南语'}, {n: '韩语', v: '/lang/韩语'}, {n: '日语', v: '/lang/日语'}, {n: '法语', v: '/lang/法语'}, {n: '德语', v: '/lang/德语'}, {n: '其它', v: '/lang/其它'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ],
        '2': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '2'}, {n: '大陆剧', v: '14'}, {n: '港台剧', v: '15'}, {n: '日韩剧', v: '16'}, {n: '欧美剧', v: '17'}, {n: '其他剧', v: '18'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '内地', v: '/area/内地'}, {n: '韩国', v: '/area/韩国'}, {n: '香港', v: '/area/香港'}, {n: '台湾', v: '/area/台湾'}, {n: '日本', v: '/area/日本'}, {n: '美国', v: '/area/美国'}, {n: '泰国', v: '/area/泰国'}, {n: '英国', v: '/area/英国'}, {n: '新加坡', v: '/area/新加坡'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '偶像', v: '/class/偶像'}, {n: '爱情', v: '/class/爱情'}, {n: '言情', v: '/class/言情'}, {n: '古装', v: '/class/古装'}, {n: '历史', v: '/class/历史'}, {n: '玄幻', v: '/class/玄幻'}, {n: '谍战', v: '/class/谍战'}, {n: '历险', v: '/class/历险'}, {n: '都市', v: '/class/都市'}, {n: '科幻', v: '/class/科幻'}, {n: '军旅', v: '/class/军旅'}, {n: '喜剧', v: '/class/喜剧'}, {n: '武侠', v: '/class/武侠'}, {n: '家庭', v: '/class/家庭'}, {n: '战争', v: '/class/战争'}, {n: '悬疑', v: '/class/悬疑'}, {n: '穿越', v: '/class/穿越'}, {n: '剧情', v: '/class/剧情'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}, {n: '2019', v: '/year/2019'}, {n: '2018', v: '/year/2018'}, {n: '2017', v: '/year/2017'}, {n: '2016', v: '/year/2016'}, {n: '2015', v: '/year/2015'}, {n: '2014', v: '/year/2014'}, {n: '2013', v: '/year/2013'}, {n: '2012', v: '/year/2012'}, {n: '2011', v: '/year/2011'}, {n: '2010', v: '/year/2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}, {n: '英语', v: '/lang/英语'}, {n: '粤语', v: '/lang/粤语'}, {n: '闽南语', v: '/lang/闽南语'}, {n: '韩语', v: '/lang/韩语'}, {n: '日语', v: '/lang/日语'}, {n: '其它', v: '/lang/其它'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ],
        '3': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '3'}, {n: '大陆综艺', v: '19'}, {n: '港台综艺', v: '20'}, {n: '日韩综艺', v: '21'}, {n: '欧美综艺', v: '22'}, {n: '其他综艺', v: '23'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '/area/大陆'}, {n: '香港', v: '/area/香港'}, {n: '台湾', v: '/area/台湾'}, {n: '日本', v: '/area/日本'}, {n: '韩国', v: '/area/韩国'}, {n: '欧美', v: '/area/欧美'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '真人秀', v: '/class/真人秀'}, {n: '脱口秀', v: '/class/脱口秀'}, {n: '访谈', v: '/class/访谈'}, {n: '音乐', v: '/class/音乐'}, {n: '晚会', v: '/class/晚会'}, {n: '竞技', v: '/class/竞技'}, {n: '情感', v: '/class/情感'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}, {n: '2019', v: '/year/2019'}, {n: '2018', v: '/year/2018'}, {n: '2017', v: '/year/2017'}, {n: '2016', v: '/year/2016'}, {n: '2015', v: '/year/2015'}, {n: '2014', v: '/year/2014'}, {n: '2013', v: '/year/2013'}, {n: '2012', v: '/year/2012'}, {n: '2011', v: '/year/2011'}, {n: '2010', v: '/year/2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}, {n: '英语', v: '/lang/英语'}, {n: '粤语', v: '/lang/粤语'}, {n: '韩语', v: '/lang/韩语'}, {n: '日语', v: '/lang/日语'}, {n: '其它', v: '/lang/其它'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ],
        '4': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '4'}, {n: '国产动漫', v: '24'}, {n: '日本动漫', v: '25'}, {n: '欧美动漫', v: '26'}, {n: '其他动漫', v: '27'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '/area/大陆'}, {n: '日本', v: '/area/日本'}, {n: '欧美', v: '/area/欧美'}, {n: '韩国', v: '/area/韩国'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '热血', v: '/class/热血'}, {n: '格斗', v: '/class/格斗'}, {n: '机战', v: '/class/机战'}, {n: '少女', v: '/class/少女'}, {n: '竞技', v: '/class/竞技'}, {n: '科幻', v: '/class/科幻'}, {n: '魔幻', v: '/class/魔幻'}, {n: '搞笑', v: '/class/搞笑'}, {n: '推理', v: '/class/推理'}, {n: '冒险', v: '/class/冒险'}, {n: '校园', v: '/class/校园'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}, {n: '2019', v: '/year/2019'}, {n: '2018', v: '/year/2018'}, {n: '2017', v: '/year/2017'}, {n: '2016', v: '/year/2016'}, {n: '2015', v: '/year/2015'}, {n: '2014', v: '/year/2014'}, {n: '2013', v: '/year/2013'}, {n: '2012', v: '/year/2012'}, {n: '2011', v: '/year/2011'}, {n: '2010', v: '/year/2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}, {n: '英语', v: '/lang/英语'}, {n: '韩语', v: '/lang/韩语'}, {n: '日语', v: '/lang/日语'}, {n: '其它', v: '/lang/其它'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ],
        '5': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '5'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '/area/大陆'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '现代都市', v: '/class/现代都市'}, {n: '反转爽剧', v: '/class/反转爽剧'}, {n: '年代穿越', v: '/class/年代穿越'}, {n: '古装仙侠', v: '/class/古装仙侠'}, {n: '女频恋爱', v: '/class/女频恋爱'}, {n: '脑洞悬疑', v: '/class/脑洞悬疑'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ],
        '42': [
            {key: 'cateId', name: '分类', value: [{n: '全部', v: '42'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '/area/大陆'}, {n: '香港', v: '/area/香港'}, {n: '台湾', v: '/area/台湾'}, {n: '美国', v: '/area/美国'}, {n: '英国', v: '/area/英国'}, {n: '日本', v: '/area/日本'}, {n: '韩国', v: '/area/韩国'}, {n: '其他', v: '/area/其他'}]},
            {key: 'class', name: '类型', value: [{n: '全部', v: ''}, {n: '文化', v: '/class/文化'}, {n: '探索', v: '/class/探索'}, {n: '军事', v: '/class/军事'}, {n: '揭秘', v: '/class/揭秘'}, {n: '科技', v: '/class/科技'}, {n: '历史', v: '/class/历史'}, {n: '人物', v: '/class/人物'}, {n: '自然', v: '/class/自然'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '/year/2026'}, {n: '2025', v: '/year/2025'}, {n: '2024', v: '/year/2024'}, {n: '2023', v: '/year/2023'}, {n: '2022', v: '/year/2022'}, {n: '2021', v: '/year/2021'}, {n: '2020', v: '/year/2020'}, {n: '2019', v: '/year/2019'}, {n: '2018', v: '/year/2018'}, {n: '2017', v: '/year/2017'}, {n: '2016', v: '/year/2016'}, {n: '2015', v: '/year/2015'}, {n: '2014', v: '/year/2014'}, {n: '2013', v: '/year/2013'}, {n: '2012', v: '/year/2012'}, {n: '2011', v: '/year/2011'}, {n: '2010', v: '/year/2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '/lang/国语'}, {n: '英语', v: '/lang/英语'}, {n: '其它', v: '/lang/其它'}]},
            {key: 'by', name: '排序', value: [{n: '时间', v: '/by/time'}, {n: '人气', v: '/by/hits'}, {n: '评分', v: '/by/score'}]}
        ]
    },
    filter_def: {
        1: {cateId: '1', by: '/by/time'},
        2: {cateId: '2', by: '/by/time'},
        3: {cateId: '3', by: '/by/time'},
        4: {cateId: '4', by: '/by/time'},
        5: {cateId: '5', by: '/by/time'},
        42: {cateId: '42', by: '/by/time'}
    },
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
        function waitMs(ms) {
            var end = Date.now() + ms;
            while (Date.now() < end) {}
        }
        var playUrl = input;
        try {
            var ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0';
            var playPage = input;
            var html = request(playPage, {headers: {'User-Agent': ua, 'Referer': 'https://huarenok.com/'}});
            var m = html.match(/var mac_player_info=({[\\s\\S]*?})<\\/script>/);
            if (m) {
                var info = JSON.parse(m[1]);
                var raw = info.url || input;
                if (/^(http|\\/)/.test(raw) && /m3u8|mp4/.test(raw)) {
                    playUrl = raw.indexOf('http') === 0 ? raw : 'https://huarenok.com' + raw;
                } else {
                    var title = encodeURIComponent((info.vod_data && info.vod_data.vod_name) || 'huarenok');
                    var ecUrl = 'https://newplayer.huaren.live/player/ec.php?code=ok&url=' + encodeURIComponent(raw) + '&tittle=' + title + '&main_domain=' + encodeURIComponent(playPage);
                    var ecHtml = request(ecUrl, {headers: {'User-Agent': ua, 'Referer': playPage}});
                    var cm = ecHtml.match(/<script>let ConFig = ([\\s\\S]*?),box =/);
                    if (cm) {
                        var cfg = JSON.parse(cm[1].replace(/^\\uFEFF/, ''));
                        var token = cfg.token || '';
                        var adMs = parseInt(cfg.ad_duration_ms || 0);
                        if (token) {
                            var wait = adMs > 2000 ? adMs - 1000 : 0;
                            if (wait > 0) waitMs(wait);
                            var postOpt = {
                                headers: {
                                    'User-Agent': ua,
                                    'Referer': ecUrl,
                                    'Origin': 'https://newplayer.huaren.live',
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                body: 'token=' + encodeURIComponent(token),
                                method: 'POST'
                            };
                            var ret = JSON.parse(request('https://newplayer.huaren.live/index.php/api/resolve/url', postOpt));
                            if (ret && ret.code === 0 && ret.data && ret.data.retry_after_ms) {
                                waitMs(parseInt(ret.data.retry_after_ms) + 500);
                                ret = JSON.parse(request('https://newplayer.huaren.live/index.php/api/resolve/url', postOpt));
                            }
                            if (ret && ret.code === 1 && ret.data && ret.data.url) {
                                playUrl = ret.data.url;
                            } else {
                                playUrl = ecUrl;
                            }
                        } else {
                            playUrl = ecUrl;
                        }
                    }
                }
            }
        } catch (e) {}
        input = {parse: 0, jx: 0, url: playUrl, header: {'User-Agent': 'Mozilla/5.0', 'Referer': 'https://huarenok.com/'}};
    `
}

