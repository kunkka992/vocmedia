var rule = {
    title: '爱壹帆[极速加固版]',
    host: 'https://www.yfsp.tv',
    url: '/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/vod/search/wd/**.html',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.yfsp.tv/',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    },
    // 自动寻找分类
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
    
    // 【核心修复点】加强版播放解析
    lazy: `js:
        var html = request(input);
        var video_url = '';
        try {
            // 尝试直接提取播放器配置
            var player_data = html.match(/var\\s+player_data\\s*=\\s*({.*?});/);
            if (player_data) {
                var js_obj = JSON.parse(player_data[1]);
                var raw_url = js_obj.url;
                
                // 如果是加密状态 (encrypt=1 是转义, encrypt=2 是Base64)
                if (js_obj.encrypt == '1') {
                    video_url = unescape(raw_url);
                } else if (js_obj.encrypt == '2') {
                    video_url = unescape(base64Decode(raw_url));
                } else {
                    video_url = raw_url;
                }

                // 判断是否是真正的 m3u8
                if (video_url.indexOf('m3u8') > -1 || video_url.indexOf('mp4') > -1) {
                    // 强制增加 Header 解决某些站点的防盗链
                    input = {
                        jx: 0,
                        url: video_url,
                        parse: 0,
                        header: JSON.stringify({
                            'User-Agent': 'Mozilla/5.0',
                            'Referer': 'https://www.yfsp.tv/'
                        })
                    };
                } else {
                    // 如果不是直链，交给系统解析
                    input = { jx: 1, url: video_url, parse: 1 };
                }
            } else {
                // 备选方案：通过嗅探
                input = { jx: 1, url: input, parse: 1 };
            }
        } catch (e) {
            input = { jx: 1, url: input, parse: 1 };
        }
    `,
    搜索: '.module-card-item;a&&title;.module-item-pic img&&data-src;.module-item-caption&&Text;a&&href',
}
