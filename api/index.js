import _ from 'lodash'
import config from '@/config'


// 请求拦截
const requestInterceptors = opts => {
  const apiPrefix = config.server

  // 初始化数据
  const initData = {}

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
        throw new Error(error.message)
      } else {
        const data = _.get(res, 'data', {})
        const flag = data.flag;

        // 请求成功
        if (flag === 1) {
          return data
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
