const base = 'https://netease-music-api.herokuapp.com';

// list
// 调用例子 : /top/list?idx=6

// playlist
// 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
// cat:cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
// 接口地址 : /top/playlist
// 调用例子 : /top/playlist?limit=10&order=new
const api = {
  reconmendSongs: `${base}/personalized/`,
  new: `${base}/top/album?offset=0&limit=10`,
  board: `${base}/toplist`,
  singleBoard: `${base}/top/list?idx=`,
  playlist: `${base}/top/playlist`,
};

export default api;
