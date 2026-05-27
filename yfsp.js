// ============================================================
// yfsp.tv  TVBox JS Spider
// 只输出 1080P / 720P 的 HLS m3u8，过滤所有 MP4 短链/预告
// ============================================================

var spider = (function () {

  var BASE     = 'https://www.yfsp.tv';
  var API      = 'https://m10.yfsp.tv';
  var UA       = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                 'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                 'Chrome/124.0.0.0 Safari/537.36';

  var CATE = [
    { id:'1', name:'电视剧', path:'/list/drama'       },
    { id:'2', name:'电影',   path:'/list/movie'       },
    { id:'3', name:'综艺',   path:'/list/variety'     },
    { id:'4', name:'动漫',   path:'/list/anime'       },
    { id:'5', name:'短剧',   path:'/list/short'       },
    { id:'6', name:'纪录片', path:'/list/documentary' },
    { id:'7', name:'体育',   path:'/list/sport'       },
  ];

  // ── HTTP GET ────────────────────────────────────────────────
  function get(url, ref) {
    return request(url, {
      headers: {
        'User-Agent': UA,
        'Referer': ref || (BASE + '/'),
        'Accept':  'text/html,application/json,*/*',
      }
    });
  }

  // ── 解析列表页 ─────────────────────────────────────────────
  function parseList(html) {
    var items = [], seen = {}, m;
    var reg = /<a[^>]+href="\/play\/([A-Za-z0-9]+)"[^>]*(?:title="([^"]*)")?[^>]*>([\s\S]*?)<\/a>/g;
    while ((m = reg.exec(html)) !== null) {
      var vid = m[1], name = m[2] || '', inner = m[3] || '';
      if (seen[vid] || !name) continue;
      seen[vid] = 1;
      var imgM = inner.match(/src="(https?:\/\/[^"]+\.(?:gif|jpg|png|webp)[^"]*)"/);
      items.push({ vid:vid, name:name, pic: imgM ? imgM[1].split('?')[0] : '' });
    }
    return items;
  }

  // ── 解析分集  /play/{mainVid}?id={epVid} ──────────────────
  function parseEps(html) {
    var eps = [], seen = {}, m;
    var reg = /href="\/play\/[A-Za-z0-9]+\?id=([A-Za-z0-9]+)"(?:[^>]*title="([^"]*)")?/g;
    while ((m = reg.exec(html)) !== null) {
      var vid = m[1], name = m[2] || ('第' + (eps.length+1) + '集');
      if (!seen[vid]) { seen[vid]=1; eps.push({name:name, vid:vid}); }
    }
    return eps;
  }

  // ── OG 元数据 ──────────────────────────────────────────────
  function parseMeta(html) {
    function og(k) {
      var m = html.match(new RegExp('(?:property|name)="'+k+'"[^>]+content="([^"]*)"'));
      return m ? m[1] : '';
    }
    var title = (og('og:title')||og('title')).replace(/-[^-]+免费在线观看.*/, '').trim();
    return { title:title, pic:og('og:image').split('?')[0], desc:og('og:description') };
  }

  // ── 页数 ───────────────────────────────────────────────────
  function totalPage(html) {
    var max = 1, m, r = /[?&]page=(\d+)/g;
    while ((m = r.exec(html)) !== null) { var n=+m[1]; if(n>max&&n<9999) max=n; }
    r = />(\d{1,4})</g;
    while ((m = r.exec(html)) !== null) { var n=+m[1]; if(n>max&&n<9999) max=n; }
    return max;
  }

  // ── 调用 /v3/video/play，返回 info 对象 ───────────────────
  // vid    : 集 ID（clarity[].key 或 episode vid）
  // pub/vv : 从页面 injectJson 提取的会话参数
  function callPlayApi(vid, pub, vv, ref) {
    var url = API + '/v3/video/play'
      + '?cinema=1'
      + '&id='             + vid
      + '&a=1'
      + '&lang=none'
      + '&usersign=1'
      + '&region=GL'
      + '&device=1'
      + '&isMasterSupport=0'
      + '&vv='             + vv
      + '&pub='            + encodeURIComponent(pub);
    try {
      var raw  = get(url, ref);
      var resp = JSON.parse(raw);
      return ((resp.data || {}).info || [])[0] || null;
    } catch(e) { return null; }
  }

  // ── 从 info.flvPathList 提取 m3u8，严格过滤 MP4 ──────────
  // 规则：isHls===true  AND  bitrate>=minBr  AND  .m3u8  AND  NOT .mp4
  function extractM3u8(info, minBr) {
    minBr = minBr || 480000;
    var list = (info && info.flvPathList) ? info.flvPathList : [];
    var hls  = list.filter(function(item) {
      return item.isHls === true
          && item.bitrate  >= minBr
          && item.result
          && item.result.indexOf('.m3u8') > -1
          && item.result.indexOf('.mp4')  < 0;
    });
    // 降序排，取最高码率
    hls.sort(function(a,b){ return b.bitrate - a.bitrate; });
    return hls.length ? hls[0].result : '';
  }

  // ── 获取 pub / vv ──────────────────────────────────────────
  function getPubVv(html) {
    var pub = '';
    var m = html.match(/var injectJson\s*=\s*(\{[\s\S]+?\});\s*[\r\n]/);
    if (m) {
      try {
        var cfg = ((JSON.parse(m[1]).config || [])[0]) || {};
        pub = (cfg.pConfig || {}).publicKey || '';
      } catch(e){}
    }
    // vv 只要是 32 位 hex 即可；MD5(pub+ts) 满足服务端格式校验
    var vv = md5(pub + String(Date.now()));
    return { pub:pub, vv:vv };
  }

  // ════════════════════════════════════════════════════════════
  return {

    init: function() { return '{}'; },

    home: function() {
      return JSON.stringify({
        class: CATE.map(function(c){ return {type_id:c.id, type_name:c.name}; }),
        list:[], filters:{}
      });
    },

    homeVod: function() { return this.category('1',1,true,{}); },

    category: function(tid, pg, filter, extend) {
      pg = pg || 1;
      var cat  = CATE.filter(function(c){ return c.id===String(tid); })[0] || CATE[0];
      var html = get(BASE + cat.path + '?page=' + pg);
      var list = parseList(html).map(function(i){
        return { vod_id:i.vid, vod_name:i.name, vod_pic:i.pic };
      });
      var tp = totalPage(html);
      return JSON.stringify({ page:pg, pagecount:tp, limit:30, total:tp*30, list:list });
    },

    detail: function(ids) {
      var vid  = ids.split(',')[0];
      var html = get(BASE + '/play/' + vid);
      var meta = parseMeta(html);
      var eps  = parseEps(html);
      if (!eps.length) eps = [{name:'第1集', vid:vid}];
      var playUrl = eps.map(function(ep){ return ep.name+'$'+ep.vid; }).join('#');
      return JSON.stringify({ list:[{
        vod_id:       vid,
        vod_name:     meta.title,
        vod_pic:      meta.pic,
        vod_content:  meta.desc,
        vod_play_from:'yfsp',
        vod_play_url: playUrl,
      }]});
    },

    // ── playerContent：核心播放解析 ───────────────────────────
    // id = 分集 vid（detail 里 $ 后面的值）
    playerContent: function(flag, id, vipFlags) {
      var pageUrl = BASE + '/play/' + id;
      var html    = get(pageUrl);
      var pv      = getPubVv(html);
      var pub     = pv.pub, vv = pv.vv;

      // Step1: 获取该集基础信息（含 clarity 列表）
      var info = callPlayApi(id, pub, vv, pageUrl);
      if (!info) return JSON.stringify({ parse:1, url:pageUrl });

      var clarity = info.clarity || [];

      // Step2: 分别拿 1080P / 720P 的 key
      var key1080 = '', key720 = '';
      clarity.forEach(function(c) {
        if (c.bitrate === 1080000) key1080 = c.key;
        if (c.bitrate === 720000)  key720  = c.key;
      });

      // Step3: 用 key 再次调用 play API，提取对应线路的 m3u8
      var url1080 = '', url720 = '';

      if (key1080) {
        var vv2 = md5(pub + String(Date.now() + 1));
        var info1080 = callPlayApi(key1080, pub, vv2, pageUrl);
        // 只取 isHls:true, bitrate>=1000000, URL含.m3u8，排除MP4
        url1080 = extractM3u8(info1080, 1000000);
      }

      if (key720) {
        var vv3 = md5(pub + String(Date.now() + 2));
        var info720 = callPlayApi(key720, pub, vv3, pageUrl);
        // 只取 isHls:true, bitrate>=700000
        url720 = extractM3u8(info720, 700000);
      }

      // Step4: 构建线路列表（只保留真实 HLS，排除任何 MP4）
      var playList = [];
      if (url1080) playList.push({ name:'1080P', url:url1080 });
      if (url720)  playList.push({ name:'720P',  url:url720  });

      // 无 VIP 时降级到 576P（仍是完整 HLS，只是码率低）
      if (!playList.length) {
        var url576 = extractM3u8(info, 480000);
        if (url576) playList.push({ name:'576P', url:url576 });
      }

      if (!playList.length) return JSON.stringify({ parse:1, url:pageUrl });

      var best = playList[0].url;

      return JSON.stringify({
        parse:  0,
        url:    best,
        extra:  { playList: playList },
        header: { 'User-Agent':UA, 'Referer':pageUrl },
      });
    },

    search: function(key, quick, pg) {
      pg = pg || 1;
      var html = get(BASE + '/search/' + encodeURIComponent(key) + '?page=' + pg);
      var list = parseList(html).map(function(i){
        return { vod_id:i.vid, vod_name:i.name, vod_pic:i.pic };
      });
      return JSON.stringify({ page:pg, pagecount:1, limit:list.length, total:list.length, list:list });
    },
  };

})();
