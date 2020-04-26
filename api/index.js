import _ from 'lodash'
import storage from '@/storage/index'
import config from '@/config'

let goLogin = _.debounce(function(opt) {
  uni.redirectTo({
    url: '/pages/login/login'
  })
}, 3000, {
  leading: true,
  trailing: false
})
let platform

if (uni.getSystemInfoSync().platform == "android") {
  platform = '4'
} else {
  platform = '3'
}

// 请求拦截
const requestInterceptors = opts => {
  const apiPrefix = config.server

  // 初始化数据
  const initData = {}
  initData.appId = 0 // 店铺id
  initData.requestType = platform // ios: 3 安卓: 4
  initData.version = '3.0'
  initData.appVersion = 1
  initData.clientUserSession = storage.get('SESSION') || '';

  opts.data = Object.assign({}, initData, opts.data || {});

  opts.sslVerify = false

  opts.method = opts.method || 'GET'
  const header = {}
  header['accept'] = 'application/json'
  header['content-type'] = 'application/x-www-form-urlencoded'
  opts.header = Object.assign({}, header, opts.header)
  // 请求url拼接
  if (!/http/.test(opts.url)) {
    opts.url = apiPrefix + opts.url
  }
  return opts
}

export default function axios(opts) {
  opts = requestInterceptors(opts)

  return uni.request(opts)
    .then(data => {
      // data为一个数组，数组第一项为错误信息，第二项为返回数据
      const [error, res] = data;
      if (error) {
        uni.showToast({
          title: '网络异常,请重试',
          duration: 2000,
          icon: 'none'
        });
        throw new Error(error.message)
      } else {
        const data = _.get(res, 'data', {})
        const flag = data.flag;

        // 请求成功
        if (flag === 1) {
          return data
        }

        // 登录过期
        if (flag === -1) {
          const session = storage.get('SESSION')
          storage.set('SESSION', '');
          if (session) {
            uni.showToast({
              title: data.errorMessage || '登录过期',
              duration: 2000,
              icon: 'none'
            });
          }

          goLogin();

          throw new Error(data.errorMessage)
        }

        // 请求失败
        if (flag === 0) {
          if (data.errorMessage.indexOf('请充值') > -1) {
            uni.showModal({
              title: '温馨提示',
              content: data.errorMessage,
              success: function(res) {
                if (res.confirm) {
                  uni.navigateTo({
                    url: '/pages/user/payment'
                  });
                } else if (res.cancel) {}
              }
            });
          } else {
            uni.showToast({
              title: data.errorMessage,
              duration: 2000,
              icon: 'none'
            });
          }
          throw new Error(data.errorMessage)
        }

        // 余额不足
        if (flag === 2) {
          uni.showModal({
            title: '温馨提示',
            content: data.errorMessage,
            success: function(res) {
              if (res.confirm) {
                uni.navigateTo({
                  url: '/pages/user/payment'
                });
              } else if (res.cancel) {}
            }
          });
          throw new Error(data.errorMessage)
        }

        // 默认处理
        return data
      }
    })
}

export const get = function(url, data = {}, config = {}) {
  return axios(Object.assign({
    url,
    method: 'GET',
    data: data
  }, config))
}

export const post = function(url, data = {}, config = {}) {
  return axios(Object.assign({
    url,
    method: 'POST',
    data: data
  }, config))
}

// 上传接口
export const upload = (url, file, config = {}) => {

  const opts = requestInterceptors(Object.assign({
    url
  }, config))
  return uni.uploadFile({
    url: opts.url,
    filePath: file,
    name: 'file',
    formData: Object.assign({}, opts.data, {
      fileName: 'touxiang.jpg',
      requestType: 4,
      listType: 0,
    })
  })
}
