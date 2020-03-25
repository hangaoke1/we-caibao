import { post, get } from '../index';

const api = {
  post,
  get
}
export default {
  lotteryListHot: param => api.get('/lottery/lottery_list_hot.htm', param),
  // 获取订单详情
  getSchemeDetail: param => api.get('/lottery/scheme_detail.htm', param),
  getSpf: param => api.get('/lottery/spf.htm', param),
  // 获取推荐大神
  getDashen: param => api.get('/lottery/hot_recommendor.htm', param),
  // 搜索用户推荐
  getHotRecommendor: param => api.get('/lottery/hot_recommendor_search.htm', param),
  // 根据用户名搜索用户
  getSearchUser: param => api.get('/lottery/search_username.htm', param),
  // 用户主页
  getRecommendorHome: param => api.get('/lottery/recommendor_home.htm', param),
  // 近期投注
  getRecommendorScheme: param => api.get('/lottery/recommendor_scheme.htm', param),
  // 历史红单
  getRecommendorSchemeRed: param => api.get('/lottery/recommendor_scheme_red.htm', param),
  // 跟单大厅 copy_list_new
  getCopyListNew: param => api.get('/lottery/copy_list_new.htm', param),
  // 获取跟单用户列表 /lottery/copy_buy_list.htm
  getCopyBuyList: param => api.get('/lottery/copy_buy_list.htm', param),
  // 进行跟单 /lottery/do_copy.htm
  doCopy: param => api.get('/lottery/do_copy.htm', param),
  // 预下单
  buyLotteryPre: param => {
    param.requestType = 1
    return api.post('/lottery/buy_lottery.htm', param)
  },
  // 确认下单
  buyLottery: param => api.get('/lottery/app_buy_lottery.htm', param),
  // 开奖信息
  getIssueNotifyAll: param => api.get('/lottery/issue_notify_all.htm', param),
  // 开奖详情
  getIssueNotify: param => api.get('/lottery/issue_notify.htm', param),
  // 开奖详情2 issue_notify_ctzq
  getIssueNotifyCtzq: param => api.get('/lottery/issue_notify_ctzq.htm', param),
  // 立即发单 do_copy_publish
  doCopyPublish: param => api.get('/lottery/do_copy_publish.htm', param),
  // 山东11选5
  queryCurIssue: param => api.get('/lottery/query_cur_issue.htm', param),
  // 胜平负 /lottery/toto14.htm
  queryToTo14: param => api.get('/lottery/toto14.htm', param),
  // 任选9
  queryToTo9: param => api.get('/lottery/toto9.htm', param),
  // 往期竞彩篮球
  getIssueNotifyJclq: param => api.get('/lottery/issue_notify_jclq.htm', param),
  // 往期竞彩足球
  getIssueNotifyJczq: param => api.get('/lottery/issue_notify_jczq.htm', param),
  // 获取奖期 issue_notify_issue.htm
  getIssueNotifyIssue: param => api.get('/lottery/issue_notify_issue.htm', param),
  // 关注大神
  carePerson: param => api.get('/lottery/care_person.htm', param),
  // 取消关注大神
  cancelCarePerson: param => api.get('/lottery/cancel_care_person.htm', param),
  // 我的关注
  getMyCarePerson: param => api.get('/lottery/my_care_person.htm', param),
  // 获取篮球比赛
  getBasketball: param => api.get('/lottery/basketball.htm', param),
};
