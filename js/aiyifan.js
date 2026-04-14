var rule = {
    title: '爱壹帆[引擎加固版]',
    host: 'https://www.yfsp.tv',
    url: '/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/vod/search/wd/**.html',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    },
    // 引擎级预处理：强制底座获取首页合法的 Set-Cookie 指令
    预处理: `js:
        request(rule.host, {headers: rule.headers});
    `,
    // 修正后的选择器：针对最新版爱壹帆 HTML 结构
    class_parse: '.navbar-items li:gt(0):lt(7);a&&Text;a&&href;.*/(\\d+).html',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-caption&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": ".module-item-pic img&&data-src",
        "desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text",
        "content": ".module-info-introduction&&Text",
        "tabs": ".module-tab-item",
        "lists": ".module-play-list:eq(#index) a",
    },
    /**
     * 【底座逻辑核心】
     * 如果这里还是不行，说明 drpy2 内置的 request 库无法绕过该站的海外验证。
     */
    lazy: `js:
        var html = request(input);
        var player_match = html.match(/var\\s+player_data\\s*=\\s*({.*?});/);
        if (player_match) {
            var js_obj = JSON.parse(player_match[1]);
            var video_url = js_obj.url;
            if (js_obj.encrypt == '2') {
                video_url = unescape(base64Decode(video_url));
            } else if (js_obj.encrypt == '1') {
                video_url = unescape(video_url);
            }
            // 直接将 Header 挂载在 URL 后面，这是 drpy2 引擎最高效的传递方式
            input = video_url + "#User-Agent=" + rule.headers['User-Agent'] + "&Referer=" + rule.host + "/";
        }
    `,
    搜索: '.module-card-item;a&&title;img&&data-src;.module-item-caption&&Text;a&&href',
}
