var rule = {
    title: '爱壹帆[海外代理版]',
    host: 'https://www.yfsp.tv',
    url: '/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/vod/search/wd/**.html',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    },
    class_parse: '.navbar-items li:gt(0):lt(8);a&&Text;a&&href;.*/(\\d+).html',
    一级: '.module-items .module-item;a&&title;.module-item-pic img&&data-src;.module-item-caption&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": ".module-item-pic img&&data-src",
        "desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text",
        "content": ".module-info-introduction&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-play-list:eq(#index) a",
    },
    // 【深度加固】解决播放问题的核心逻辑
    lazy: `js:
        var html = request(input);
        var video_url = '';
        var player_match = html.match(/var\\s+player_data\\s*=\\s*({.*?});/);
        if (player_match) {
            var js_obj = JSON.parse(player_match[1]);
            // 自动解码爱壹帆的加密链接
            video_url = js_obj.encrypt == '2' ? unescape(base64Decode(js_obj.url)) : (js_obj.encrypt == '1' ? unescape(js_obj.url) : js_obj.url);
            
            if (video_url.indexOf('m3u8') > -1) {
                // 【海外版关键】通过 drpy 内置 proxy 代理 M3U8，强制绕过 Referer 检查
                // 这会将播放地址转换成类似 http://127.0.0.1:xxx/proxy?url=...
                input = "proxy://" + video_url;
            } else {
                input = { jx: 0, url: video_url, parse: 0 };
            }
        } else {
            input = { jx: 1, url: input, parse: 1 };
        }
    `,
    // 代理函数：确保每一个切片都带上 Referer
    proxy_rule: `js:
        var headers = {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://www.yfsp.tv/',
            'Accept-Encoding': 'gzip'
        };
        if (input.indexOf('m3u8') > -1) {
            var m3u8_content = request(input, { headers: headers });
            // 处理嵌套 M3U8
            input = { content: m3u8_content, headers: headers };
        } else {
            input = { headers: headers };
        }
    `
}
