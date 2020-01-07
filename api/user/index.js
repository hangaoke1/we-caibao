import { post, get, upload } from '../index';

const api = {
  post,
  get,
  upload
}
export default {
  // 个人信息
  getUserInfo: param => api.get('/user/my_info.htm', param),
  // 我的余额
  queryBalance: param => api.get('/user/query_balance.htm', param),
  // 我的订单
  queryMyScheme: param => api.get('/lottery/my_scheme.htm', param),
  // 我的卡券
  queryMyCoupons: param => api.get('/user/my_coupons.htm', param),
  // 资金明细
  queryCapitalDetail: param => api.get('/user/capital_detail.htm', param),
  // 充值推荐
  queryPayment: param => api.get('/user/payment.htm', param),
  // 获取通道列表
  queryPayChannel: param => api.get('/user/payment_by_money.htm', param),
  // 版本更新
  queryVersion: param => api.get('/user/app_newVersion.htm', param),
  // 头像更新
  updateAvatar: file => api.upload('/user/uploadAvatar.htm', file),
  // 绑定支付宝 /user/bindAliPay.htm
  bindAliPay: param => api.get('/user/bindAliPay.htm', param),
  // 绑定银行卡
  bindBankCard: param => api.get('/user/bind_bank_card.htm', param),
  // 修改密码
  updatePassword: param => api.get('/user/update_password.htm', param),
  // 支付宝提现
  withdrawAlipay: param => api.get('/user/app_withdraw_aliPay.htm', param),
  // 银行卡提现
  withdraw: param => api.get('/user/app_withdraw.htm', param),
  // 实名认证
  bindIdentifyName: param => api.get('/user/bind_identify_name.htm', param),
  // 转充值
  transferRecharge: param => api.get('/user/transfer_recharge.htm', param),
  // 密码找回
  getForgetCheckMobile: param => api.get('/user/get_forget_password.htm', param),
};
