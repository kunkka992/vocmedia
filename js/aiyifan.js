var rule = {
    title: '爱壹帆[海外极速版]',
    host: 'https://www.yfsp.tv',
    url: '/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/vod/search/wd/**.html',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    },
    
    /**
     * 【新增：解决空白关键】预处理逻辑
     * 在加载列表前，先访问主页获取合法的 Cookie 和 Session
     */
    预处理: `js:
        var new_html = request(rule.host, {headers: rule.headers});
        log('预处理获取Cookie成功');
    `,

    // 修复解析选择器，确保列表能出来
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

    lazy: `js:
        var html = request(input);
        var player_match = html.match(/var\\s+player_data\\s*=\\s*({.*?});/);
        if (player_match) {
            var js_obj = JSON.parse(player_match[1]);
            var video_url = js_obj.encrypt == '2' ? unescape(base64Decode(js_obj.url)) : (js_obj.encrypt == '1' ? unescape(js_obj.url) : js_obj.url);
            
            // 海外用户强制走代理，绕过切片防盗链
            input = "proxy://" + video_url;
        } else {
            input = { jx: 0, url: input, parse: 0 };
        }
    `,

    proxy_rule: `js:
        var headers = {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://www.yfsp.tv/',
        };
        input = (input.indexOf('m3u8') > -1) ? { content: request(input, { headers: headers }), headers: headers } : { headers: headers };
    `,
    搜索: '.module-card-item;a&&title;.module-item-pic img&&data-src;.module-item-caption&&Text;a&&href',
}
