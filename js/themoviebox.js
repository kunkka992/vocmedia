var rule = {
    title: 'TheMovieBox',
    host: 'https://themoviebox.xyz',
    homeUrl: '/',
    url: 'themoviebox://list/fyclass/fypage',
    detailUrl: 'themoviebox://detail/fyid',
    searchUrl: 'themoviebox://search?wd=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    play_parse: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Request-Lang': 'en',
        'X-Source': 'h5',
        'Referer': 'https://themoviebox.xyz/'
    },
    class_name: 'Movie&TV Show',
    class_url: 'film&tv-series',
    filter: {
        film: [
            {key: 'genre', name: 'Genre', value: [{n: 'All', v: 'All'}, {n: 'Action', v: 'Action'}, {n: 'Adventure', v: 'Adventure'}, {n: 'Comedy', v: 'Comedy'}, {n: 'Crime', v: 'Crime'}, {n: 'Drama', v: 'Drama'}, {n: 'Horror', v: 'Horror'}, {n: 'Romance', v: 'Romance'}, {n: 'Sci-Fi', v: 'Sci-Fi'}, {n: 'Thriller', v: 'Thriller'}]},
            {key: 'country', name: 'Country', value: [{n: 'All', v: 'All'}, {n: 'United States', v: 'United States'}, {n: 'United Kingdom', v: 'United Kingdom'}, {n: 'Korea', v: 'Korea'}, {n: 'China', v: 'China'}, {n: 'Japan', v: 'Japan'}]},
            {key: 'year', name: 'Year', value: [{n: 'All', v: 'All'}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}]},
            {key: 'sort', name: 'Sort', value: [{n: 'Latest', v: 'latest'}, {n: 'Rating', v: 'rating'}, {n: 'Popular', v: 'popular'}]}
        ],
        'tv-series': [
            {key: 'genre', name: 'Genre', value: [{n: 'All', v: 'All'}, {n: 'Action', v: 'Action'}, {n: 'Comedy', v: 'Comedy'}, {n: 'Crime', v: 'Crime'}, {n: 'Drama', v: 'Drama'}, {n: 'Horror', v: 'Horror'}, {n: 'Romance', v: 'Romance'}, {n: 'Thriller', v: 'Thriller'}]},
            {key: 'country', name: 'Country', value: [{n: 'All', v: 'All'}, {n: 'United States', v: 'United States'}, {n: 'United Kingdom', v: 'United Kingdom'}, {n: 'Korea', v: 'Korea'}, {n: 'China', v: 'China'}, {n: 'Japan', v: 'Japan'}]},
            {key: 'year', name: 'Year', value: [{n: 'All', v: 'All'}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}]},
            {key: 'sort', name: 'Sort', value: [{n: 'Latest', v: 'latest'}, {n: 'Rating', v: 'rating'}, {n: 'Popular', v: 'popular'}]}
        ]
    },
    预处理: `js:
        rule.api = 'https://h5-api.aoneroom.com/wefeed-h5api-bff';
        rule.headers.Referer = rule.headers.Referer || rule.host + '/';
    `,
    推荐: `js:
        function mbList(data) { return data && data.items ? data.items : []; }
        function mbVod(it) { return {vod_id: it.detailPath || it.subjectId || '', vod_name: it.title || '', vod_pic: it.cover && it.cover.url || '', vod_remarks: it.releaseDate || it.imdbRatingValue || ''}; }
        try { var j = JSON.parse(request(rule.api + '/home?host=themoviebox.xyz', {headers: rule.headers})); var rows = []; (j.data && j.data.operatingList || []).forEach(function(x) { rows = rows.concat(x.subjects || []); }); VODS = rows.map(mbVod); } catch (e) { VODS = []; }
    `,
    一级: `js:
        function mbVod(it) { return {vod_id: it.detailPath || it.subjectId || '', vod_name: it.title || '', vod_pic: it.cover && it.cover.url || '', vod_remarks: it.releaseDate || it.imdbRatingValue || ''}; }
        var page = parseInt(MY_PAGE || 1), cate = String(MY_CATE || 'film'), channel = cate === 'tv-series' ? '1' : '2', fl = typeof MY_FL === 'object' ? MY_FL : {}, body = {page: page, perPage: 28, channelId: channel};
        Object.keys(fl).forEach(function(k) { if (fl[k] !== undefined && fl[k] !== null && String(fl[k]) !== '' && String(fl[k]) !== 'All') body[k] = fl[k]; });
        try { var j = JSON.parse(request(rule.api + '/subject/filter', {method: 'POST', body: JSON.stringify(body), headers: rule.headers})); VODS = (j.data && j.data.items || []).map(mbVod); } catch (e) { VODS = []; }
    `,
    二级: `js:
        var id = String(MY_ID || input || '').replace(/^themoviebox:\\/\\/detail\\//i, ''), detail = {};
        try { detail = JSON.parse(request(rule.api + '/detail?detailPath=' + encodeURIComponent(id), {headers: rule.headers})); } catch (e) { detail = {}; }
        var s = detail.data && detail.data.subject || {}, r = detail.data && detail.data.resource || {}, episodes = [], seasons = r.seasons || [];
        if (seasons.length) seasons.forEach(function(season) { var maxEp = parseInt(season.maxEp || 0); for (var i = 1; i <= maxEp; i++) episodes.push({name: 'S' + (season.se || season.season || season.seasonNum || 1) + ' E' + i, id: id + '||' + (season.se || season.season || season.seasonNum || 1) + '||' + i}); });
        if (!episodes.length) episodes = [{name: s.title || id, id: id + '||0||0'}];
        VOD = {vod_id: id, vod_name: s.title || id, vod_pic: s.cover && s.cover.url || '', vod_content: s.description || '', vod_year: String(s.releaseDate || '').slice(0, 4), vod_area: s.countryName || '', vod_remarks: s.imdbRatingValue || '', vod_play_from: 'MovieBox', vod_play_url: episodes.map(function(e) { return e.name + '$' + e.id; }).join('#')};
    `,
    搜索: `js:
        var kw = String(KEY || ''), body = {page: 1, perPage: 28, keyword: kw};
        try { var j = JSON.parse(request(rule.api + '/subject/search', {method: 'POST', body: JSON.stringify(body), headers: rule.headers})); VODS = (j.data && (j.data.items || j.data.subjects) || []).map(function(it) { return {vod_id: it.detailPath || it.subjectId || '', vod_name: it.title || '', vod_pic: it.cover && it.cover.url || '', vod_remarks: it.releaseDate || ''}; }); } catch (e) { VODS = []; }
    `,
    lazy: `js:
        var p = String(input || '').split('||'), path = p[0] || '', se = p[1] || '0', ep = p[2] || '0', out = [], subjectId = path;
        try { var dj = JSON.parse(request(rule.api + '/detail?detailPath=' + encodeURIComponent(path), {headers: rule.headers})); subjectId = dj.data && dj.data.subject && dj.data.subject.subjectId || path; } catch (e) {}
        try { var j = JSON.parse(request(rule.api + '/subject/play?subjectId=' + encodeURIComponent(subjectId) + '&se=' + encodeURIComponent(se) + '&ep=' + encodeURIComponent(ep) + '&detailPath=' + encodeURIComponent(path) + '&streamSignType=0', {headers: rule.headers})), d = j.data || {}; function add(a) { (a || []).forEach(function(x) { var rs = x.resolution || (x.resolutions && x.resolutions[0]); if ((String(rs) === '720' || String(rs) === '1080') && x.url) out.push({name: String(rs) + 'p', url: x.url, header: rule.headers}); }); } add(d.streams); add(d.hls); add(d.dash); } catch (e) {}
        if (!out.length) { try { var j2 = JSON.parse(request(rule.api + '/subject/play?subjectId=' + encodeURIComponent(subjectId) + '&se=' + encodeURIComponent(se) + '&ep=' + encodeURIComponent(ep) + '&detailPath=' + encodeURIComponent(path) + '&streamSignType=1', {headers: rule.headers})), d2 = j2.data || {}; (d2.streams || []).forEach(function(x) { if ((String(x.resolution) === '720' || String(x.resolution) === '1080') && x.url) out.push({name: String(x.resolution) + 'p', url: x.url, header: rule.headers}); }); } catch (e) {} }
        if (out.length) { var playMap = {}; out.forEach(function(x) { playMap[x.name] = x.url; }); input = JSON.stringify({parse: 0, jx: 0, url: out[0].url, header: rule.headers}); }
    `
};
