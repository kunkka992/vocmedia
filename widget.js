// video-iyf Widget - 爱壹帆
// ========== 依赖 ==========

var _r = require('../lib/response');
var success = _r.success;
var err = _r.err;
var pageResult = _r.pageResult;

var _c = require('../lib/crypto');
var iyfSignUrl = _c.iyfSignUrl;
var _v = require('../lib/video');
var iyfParseExtm3u = _v.iyfParseExtm3u;

// ========== 签名状态 ==========

var publicKey = "";
var publicKeyIndex = 0;
var privateKeys = [
  "version001", "vers1on001", "vers1on00i", "bersion001",
  "vcrsion001", "versi0n001", "versio_001", "version0o1"
];

function uriSignature(url) {
  var result = iyfSignUrl(url, publicKey, publicKeyIndex, privateKeys);
  publicKey = result.publicKey;
  publicKeyIndex = result.publicKeyIndex;
  return result.url;
}

// ========== HTTP 请求封装 ==========

async function request(url, opts) {
  var response = await fetch(url, opts || {});
  return response;
}

// ========== API 实现 ==========

async function home() {
  try {
    var url = "https://m10.iyf.tv/v3/home/getAllVideo?cinema=1&set=1&size=13&cacheable=1";
    var response = await request(url);
    var json = await response.json();

    if (json.ret !== 200 || !json.data || json.data.code !== 0) {
      throw new Error(json.msg || (json.data && json.data.msg) || "获取接口失败");
    }

    var cates = [
      ["filmList",        "movie",       "0,1,3"],
      ["tvList",          "drama",       "0,1,4"],
      ["varietyList",     "variety",     "0,1,5"],
      ["animeList",       "anime",       "0,1,6"],
      ["sportList",       "sport",       "0,1,95"],
      ["documentaryList", "documentary", "0,1,7"]
    ];

    var result = [];
    var data = json.data.info[0];
    if (!data) throw new Error("接口结构错误");

    for (var i = 0; i < cates.length; i++) {
      var key = cates[i][0];
      var typeId = cates[i][2];
      var typeData = data[key];

      if (Array.isArray(typeData) && typeData.length) {
        var vodList = [];
        for (var j = 0; j < typeData.length; j++) {
          var item = typeData[j];
          vodList.push({
            type_id: String(item.videoClassID || ""),
            vod_id: String(item.key || ""),
            vod_name: String(item.title || ""),
            vod_pic: String(item.image || ""),
            vod_remarks: String(item.cidMapper || "")
          });
        }
        if (vodList.length) {
          result.push({
            type_id: typeId,
            type_name: typeData[0].atypeName,
            vod_list: vodList
          });
        }
      }
    }

    return success(result);
  } catch (e) {
    console.error("[home]", e.message || e);
    return err("[home] " + (e.message || e));
  }
}

async function detail(params) {
  try {
    var vodId = params.vod_id;
    var baseUrl = "https://m10.iyf.tv/v3/video/detail" +
      "?cinema=1&device=1&player=CkPlayer&tech=HLS" +
      "&country=HU&lang=cns&v=1&region=GL.&id=" + encodeURIComponent(vodId);

    var detailUrl = uriSignature(baseUrl);
    var detailResponse = await request(detailUrl);
    var detailJson = await detailResponse.json();

    if (detailJson.ret !== 200 || !detailJson.data || detailJson.data.code !== 0) {
      throw new Error(detailJson.msg || (detailJson.data && detailJson.data.msg) || "获取详情失败");
    }

    var info = detailJson.data.info[0];
    var result = {
      vod_actor: (info.stars || []).join(","),
      vod_area: String(info.regional || ""),
      vod_class: String(info.cidMapper || ""),
      vod_content: String(info.contxt || ""),
      vod_id: String(info.key || ""),
      vod_lang: String(info.language || ""),
      vod_name: String(info.title || ""),
      vod_pic: String(info.imgPath || ""),
      vod_time: String(info.addTime || ""),
      vod_year: String(info.post_Year || ""),
      vod_remarks: ""
    };

    // 获取播放列表
    var playList = await getPlayList({ vod_id: vodId, taxis: info.taxis, cid: info.cid });
    if (!playList.length) {
      playList = await getSource(vodId + "@#@" + vodId);
    }

    // 将播放列表转为 episodes 格式（Swift VideoEpisode 需要 name + nid）
    var episodes = [];
    if (Array.isArray(playList)) {
      for (var k = 0; k < playList.length; k++) {
        episodes.push({
          name: playList[k].name,
          nid: playList[k].url  // "vodId@#@key" 格式，需通过 play() 解析
        });
      }
    }
    result.episodes = episodes;

    return success(result);
  } catch (e) {
    console.error("[detail]", e.message || e);
    return err("[detail] " + (e.message || e));
  }
}

async function getPlayList(params) {
  var vodId = params.vod_id;
  var taxis = params.taxis;
  var cid = params.cid;

  var baseUrl = "https://m10.iyf.tv/v3/video/languagesplaylist" +
    "?cinema=1&vid=" + encodeURIComponent(vodId) +
    "&lsk=1&taxis=" + encodeURIComponent(taxis) +
    "&cid=" + encodeURIComponent(cid);

  var signedUrl = uriSignature(baseUrl);
  var response = await request(signedUrl);
  var json = await response.json();

  if (json.ret !== 200 || !json.data || json.data.code !== 0) {
    throw new Error(json.msg || (json.data && json.data.msg) || "获取播放列表失败");
  }

  var playList = json.data.info[0].playList;
  var list = [];
  for (var i = 0; i < playList.length; i++) {
    list.push({
      name: playList[i].name,
      url: vodId + "@#@" + playList[i].key
    });
  }
  return list;
}

async function getSource(sourceId) {
  var parts = sourceId.split("@#@");
  var vodId = parts[0];
  var id = parts[1];
  var a = (vodId === id) ? 1 : 0;

  var baseUrl = "https://m10.iyf.tv/v3/video/play" +
    "?cinema=1&id=" + encodeURIComponent(id) +
    "&a=" + a +
    "&usersign=1&region=GL.&device=1&isMasterSupport=1";

  var playUrl = uriSignature(baseUrl);
  var response = await request(playUrl);
  var json = await response.json();

  if (json.ret !== 200 || !json.data || json.data.code !== 0) {
    throw new Error(json.msg || (json.data && json.data.msg) || "获取播放源失败");
  }

  var flvList = json.data.info && json.data.info[0] && json.data.info[0].flvPathList;
  if (!flvList) throw new Error("获取播放地址失败");

  // 找到 HLS 源
  var sourceItem = null;
  for (var i = 0; i < flvList.length; i++) {
    if (flvList[i].isHls) {
      sourceItem = flvList[i];
      break;
    }
  }
  if (!sourceItem) throw new Error("未找到 HLS 源");

  var isMpd = sourceItem.dashResult && sourceItem.dashResult.toLowerCase().indexOf(".mpd") > -1;
  var basePlayUrl = isMpd ? sourceItem.result : sourceItem.dashResult;
  if (!basePlayUrl) throw new Error("获取播放地址失败");

  var finalUrl = uriSignature(basePlayUrl);

  // MPD 格式直接返回
  if (isMpd) return finalUrl;

  // HLS 格式需要解析 m3u8 获取各分辨率
  var sourceResponse = await request(finalUrl);
  var sourceText = await sourceResponse.text();
  var sources = iyfParseExtm3u(sourceText);
  return sources;
}

async function play(params) {
  try {
    var url = params.url || params.nid;
    if (url && url.indexOf("http") === 0) {
      return success(url);
    }

    var sources = await getSource(url);
    if (!sources) throw new Error("获取播放地址失败");

    var playUrl = "";
    if (Array.isArray(sources)) {
      if (sources.length) {
        // 返回最高清的源
        playUrl = sources[sources.length - 1].url;
      }
    } else {
      playUrl = sources;
    }

    if (!playUrl) throw new Error("获取播放地址失败");
    return success(playUrl);
  } catch (e) {
    console.error("[play]", e.message || e);
    return err("[play] " + (e.message || e));
  }
}

async function list(cid, page) {
  try {
    if (!page) page = 1;

    var baseUrl = "https://m10.iyf.tv/api/list/Search" +
      "?cinema=1&set=1&size=36&cacheable=1" +
      "&page=" + page +
      "&orderby=0&desc=1&isserial=-1&isIndex=-1&isfree=-1" +
      "&cid=" + encodeURIComponent(cid);

    var signedUrl = uriSignature(baseUrl);
    var response = await request(signedUrl);
    var json = await response.json();

    if (json.ret !== 200 || !json.data || json.data.code !== 0) {
      throw new Error(json.msg || (json.data && json.data.msg) || "获取列表失败");
    }

    var data = json.data.info[0];
    if (!data) throw new Error("接口结构错误");

    var pages = Math.ceil(data.recordcount / 36);
    var vodList = [];
    var items = (data.result || []);
    for (var i = 0; i < items.length; i++) {
      vodList.push({
        vod_id: String(items[i].key || ""),
        vod_name: String(items[i].title || ""),
        vod_pic: String(items[i].image || ""),
        vod_remarks: String(items[i].cidMapper || "")
      });
    }

    return pageResult(page, pages, vodList, data.recordcount);
  } catch (e) {
    console.error("[list]", e.message || e);
    return err("[list] " + (e.message || e));
  }
}

async function search(keyword, page) {
  try {
    if (!page) page = 1;

    var baseUrl = "https://rankv21.iyf.tv/v3/list/briefsearch" +
      "?tags=" + encodeURIComponent(keyword) +
      "&page=" + page +
      "&orderby=4&size=36&desc=1&isserial=-1";

    var signedUrl = uriSignature(baseUrl);
    var response = await request(signedUrl);
    var json = await response.json();

    if (json.ret !== 200 || !json.data || json.data.code !== 0) {
      throw new Error(json.msg || (json.data && json.data.msg) || "搜索失败");
    }

    var data = json.data.info[0];
    if (!data) throw new Error("接口结构错误");

    var pages = Math.ceil(data.recordcount / 36);
    var vodList = [];
    var items = (data.result || []);
    for (var i = 0; i < items.length; i++) {
      vodList.push({
        vod_id: String(items[i].contxt || ""),
        vod_name: String(items[i].title || ""),
        vod_pic: String(items[i].imgPath || ""),
        vod_remarks: String(items[i].atypeName || "")
      });
    }

    return pageResult(page, pages, vodList, data.recordcount);
  } catch (e) {
    console.error("[search]", e.message || e);
    return err("[search] " + (e.message || e));
  }
}

// ========== 导出 ==========

module.exports = {
  home: home,
  list: list,
  detail: detail,
  search: search,
  play: play
};
