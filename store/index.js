import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import user from '@/api/user'
import lottery from '@/api/lottery'

import lqmock from '@/mock/lq';
import toto14mock from '@/mock/toto14'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 测试
    test: '测试',
    // 用户信息
    userInfo: {},
    // 财产信息
    balanceInfo: {},
    // 竞猜篮球
    jclq: {
      dataList: []
    },
    // 竞猜足球
    jczq: {
      data: []
    },
    // 胜负彩
    toto14: '',
    // 任选9
    toto9: '',
    // 下单可用优惠券
    coupons: [],
    // 选择优惠券
    chooseCouponId: ''
  },
  getters: {},
  mutations: {
    // 余额信息
    updateBalanceInfo(state, balanceInfo) {
      state.balanceInfo = balanceInfo
    },
    // 用户信息
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    // 下单已选择可用优惠券id
    updateChooseCouponId(state, chooseCouponId) {
      state.chooseCouponId = chooseCouponId
    },
    // 下单可用优惠券
    updateCoupons(state, list) {
      state.coupons = list
    },

    /* ----- 足球开始 ----- */
    // 清空足球内容
    emptyJczq(state) {
      state.jczq = {
        data: []
      }
    },
    // 刷竞猜足球
    updateJczq(state, data) {
      state.jczq = data
    },
    // 刷新竞猜足球选择项
    updateJczqChooseById(state, {
      id,
      choose
    }) {
      _.get(state.jczq, 'data', []).forEach(item => {
        item.matches.forEach(match => {
          if (match.id == id)
            match.choose = choose;
        })
      })
    },
    // 清空竞猜足球选择项
    emptyJczqChoose(state) {
      _.get(state.jczq, 'data', []).forEach(item => {
        item.matches.forEach(match => {
          match.choose = [];
        })
      })
    },
    /* ----- 足球结束 ----- */

    /* ----- 篮球开始 ----- */
    // 清空篮球内容
    emptyJclq(state) {
      state.jclq = {
        dataList: []
      }
    },
    // 刷竞猜篮球
    updateJclq(state, data) {
      state.jclq = data
    },
    // 刷新竞猜蓝球选择项
    updateJclqChooseById(state, {
      id,
      choose = []
    }) {
      _.get(state.jclq, 'dataList', []).forEach(item => {
        item.matches.forEach(match => {
          if (match.id == id)
            match.choose = choose;
        })
      })
    },
    // 清空竞猜蓝球选择项
    emptyJclqChoose(state) {
      _.get(state.jclq, 'dataList', []).forEach(item => {
        item.matches.forEach(match => {
          match.choose = [];
        })
      })
    },
    /* ----- 篮球结束 ----- */
    
    /* ----- 胜负彩开始 ----- */
    emptyToto14 (state) {
      state.toto14 = ''
    },
    updateToto14 (state, data) {
      state.toto14 = data
    },
    updateToto14ChooseByIndex(state, {
      index,
      choose = []
    }) {
      state.toto14.data[index].choose = choose
    },
    emptyJToto14Choose(state) {
      _.get(state.toto14, 'data', []).forEach(match => {
        match.choose = []
      })
    },
    /* ----- 胜负彩结束 ----- */
    
    /* ----- 任选九开始 ----- */
    emptyToto9 (state) {
      state.toto9 = ''
    },
    updateToto9 (state, data) {
      state.toto9 = data
    },
    updateToto9ChooseByIndex(state, {
      index,
      choose = []
    }) {
      state.toto9.data[index].choose = choose
    },
    emptyJToto9Choose(state) {
      _.get(state.toto9, 'data', []).forEach(match => {
        match.choose = []
      })
    }
    /* ----- 任选九结束 ----- */
    
  },
  actions: {
    // 获取可用优惠券
    updateCoupons({
      commit
    }, params) {
      return user.queryMyCoupons(params).then(res => {
        commit('updateCoupons', _.get(res, 'list', []).filter(item =>
          item.enableFlag == 1))
      })
    },
    // 任选9
    updateToto9({
      commit
    }) {
      return lottery.queryToTo9({
        listType: 0
      }).then(res => {
        res.data.forEach(match => {
           match.choose = []
        })
        commit('updateToto9', res)
      })
    },
    // 胜负彩
    updateToto14({
      commit
    }) {
      return lottery.queryToTo14({
        listType: 0
      }).then(res => {
        res.data.forEach(match => {
           match.choose = []
        })
        commit('updateToto14', res)
      })
    },
    // 竞猜足球
    updateJczq({
      commit
    }) {
      return lottery.getSpf({
        flssues: 'all',
        requestType: 1
      }).then(res => {
        res.data.forEach(item => {
          item.matches.forEach(match => {
            match.dayOfWeekStr = item.dayOfWeekStr;
            match.choose = [];
          })
        })
        commit('updateJczq', res)
      })
    },
    // 竞彩篮球
    updateJclq({
      commit
    }) {
      // TODO:
      // const mock = _.cloneDeep(lqmock)
      // mock.dataList.forEach(item => {
      //   item.matches.forEach(match => {
      //     match.choose = [];
      //   })
      // })
      // commit('updateJclq', _.cloneDeep(mock))
      return lottery.getBasketball({
        bt: 4
      }).then(res => {
        res.dataList.forEach(item => {
          item.matches.forEach(match => {
            match.choose = [];
          })
        })
        // console.log('篮球', res)
        commit('updateJclq', res)
      })
    },
    // 更新用户信息
    updateUserInfo({
      commit
    }) {
      return user
        .getUserInfo()
        .then(userInfo => {
          commit('updateUserInfo', userInfo)
          return userInfo
        })
    },
    // 更新财产信息
    updateBalanceInfo({
      commit
    }) {
      return user
        .queryBalance()
        .then(res => {
          commit('updateBalanceInfo', res)
          return res
        })
    },
  }
})

export default store
