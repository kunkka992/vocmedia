var rule = {
  title: "爱壹帆[高级版]",
  host: "https://www.yfsp.tv",
  url: "/vod/show/id/fyclass/page/fypage.html",
  searchUrl: "/vod/search/wd/**.html",
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    "User-Agent": MOBILE_UA, // 使用 drpy2 内置移动端 UA 规避防火墙
    Referer: "https://www.yfsp.tv/",
  },

  // 分类解析：针对爱壹帆的菜单结构
  class_parse: ".navbar-items li:gt(0):lt(8);a&&Text;a&&href;.*/(\\d+).html",

  // 一级列表解析
  一级: ".module-items .module-item;a&&title;.module-item-pic img&&data-src;.module-item-caption&&Text;a&&href",

  // 二级详情解析：深度结构化爬取
  二级: {
    title: "h1&&Text;.module-info-tag&&Text",
    img: ".module-item-pic img&&data-src",
    desc: ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
    content: ".module-info-introduction&&Text",
    tabs: ".module-tab-item",
    lists: ".module-play-list:eq(#index) a",
    tab_exclude: "下载|网盘|备用",
  },

  // 搜索解析
  搜索: ".module-card-item;a&&title;.module-item-pic img&&data-src;.module-item-caption&&Text;a&&href",

  /**
   * 高级免嗅逻辑 (Lazy Play)
   * 利用 drpy2 的 JS 引擎直接提取并处理播放变量
   */
  lazy: `js:
        var html = request(input);
        var video_url = '';
        // 1. 尝试直接从网页的播放器配置变量中提取地址
        var config = html.match(/var\\s+player_config\\s*=\\s*({.*?});/);
        var player = html.match(/var\\s+player_data\\s*=\\s*({.*?});/);
        
        var data = player ? player[1] : (config ? config[1] : '');
        
        if (data) {
            var js_obj = JSON.parse(data);
            var raw_url = js_obj.url;
            
            // 2. 处理爱壹帆可能的加密逻辑（如 Base64 或 URL 转义）
            if (js_obj.encrypt == '1') {
                video_url = unescape(raw_url);
            } else if (js_obj.encrypt == '2') {
                video_url = unescape(base64Decode(raw_url)); // 调用 drpy2 内置的 base64Decode
            } else {
                video_url = raw_url;
            }

            // 3. 判断是否需要进一步嗅探
            if (/m3u8|mp4|flv/.test(video_url)) {
                // 如果已经是直链，直接强制播放，不经过播放器嗅探，极速起播
                input = { jx: 0, url: video_url, parse: 0 };
            } else {
                // 如果是解析地址，则交给播放器解析
                input = { jx: 1, url: video_url, parse: 1 };
            }
        } else {
            // 兜底方案：如果没找到变量，尝试直接嗅探当前页面
            input = { jx: 1, url: input, parse: 1 };
        }
    `,
};
