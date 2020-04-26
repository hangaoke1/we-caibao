<template>
  <view class="u-js" @touchend.stop.prevent>
    <view class="u-title">
      <text class="f-30">{{current}}期投注截止还有</text>
      <g-countdown :time="info.remainTime" v-if="info.remainTime"></g-countdown>
      <g-countdown v-else :time="0"></g-countdown>
      <text class="f-30" style="margin-left: 20rpx;">当天剩余</text>
      <text class="f-30 red-6">{{remain}}期</text>
    </view>

    <view class="u-panel" @tap="handleShowMore">
      <view class="u-panel-left">
        <text class="f-30">{{info.upIssue}}期</text>
        <view class="u-ball-wrap"><view class="u-ball f-26 white-1" v-for="item in info.upDrawNumberArr" :key="item">{{item}}</view></view>
      </view>
      <text class="u-arrow f-30 iconfont grey-6">&#xe60d;</text>
    </view>

    <view v-show="show">
      <view class="u-panel-content" v-for="item in oldList" :key="item.issue">
        <view class="u-panel-left">
          <text class="f-30">{{item.issue}}期</text>
          <view class="u-ball-wrap"><view class="u-ball f-26 white-1" v-for="subItem in item.drawNumberArr" :key="subItem">{{subItem}}</view></view>
        </view>
      </view>
    </view>

    <view class="u-type">
      <view class="u-choose-list">
        <view :class="{ 'z-active': item == type }" class="u-choose-item f-28" v-for="item in typeList" :key="item" @tap="handleTypeChange(item)">{{ infoMap[item].name }}</view>
      </view>
    </view>

    <!-- 选号区域 -->
    <view class="u-xuan">
      <view class="u-tip f-30">{{info.issue}}期</view>

      <!-- 任选 -->
      <view class="u-hao-list" v-if="isRenxuan">
        <view class="u-hao-item" :class="{ 'z-active-ball': chooseList.includes(item) }" v-for="item in ballList" :key="item" @tap="handleBallClick(item)">{{ item }}</view>
      </view>

      <!-- 前二组选 -->
      <view class="u-hao-list" v-if="type === 'twoGroupPoly'">
        <view class="u-hao-item" :class="{ 'z-active-ball': zuxuan2.includes(item) }" v-for="item in ballList" :key="item" @tap="handlezuxuan2(item)">{{ item }}</view>
      </view>

      <!-- 前三组选 -->
      <view class="u-hao-list" v-if="type === 'threeGroupPoly'">
        <view class="u-hao-item" :class="{ 'z-active-ball': zuxuan3.includes(item) }" v-for="item in ballList" :key="item" @tap="handlezuxuan3(item)">{{ item }}</view>
      </view>

      <!-- 前二直选 -->
      <template v-if="type === 'twoDirect'">
        <view class="u-hao-list">
          <view class="f-34 grey-6" style="width: 100%;padding: 20rpx 0;">第1位</view>
          <view class="u-hao-item" :class="{ 'z-active-ball': zhixuan2[0].includes(item) }" v-for="item in ballList" :key="item" @tap="handlezhixuan2(item, 0)">
            {{ item }}
          </view>
        </view>
        <view class="u-hao-list">
          <view class="f-34 grey-6" style="width: 100%;padding: 20rpx 0;">第2位</view>
          <view class="u-hao-item" :class="{ 'z-active-ball': zhixuan2[1].includes(item) }" v-for="item in ballList" :key="item" @tap="handlezhixuan2(item, 1)">
            {{ item }}
          </view>
        </view>
      </template>

      <!-- 前三直选 -->
      <template v-if="type === 'threeDirect'">
        <view class="u-hao-list">
          <view class="f-34 grey-6" style="width: 100%;padding: 20rpx 0;">第1位</view>
          <view class="u-hao-item" :class="{ 'z-active-ball': zhixuan3[0].includes(item) }" v-for="item in ballList" :key="item" @tap="handlezhixuan3(item, 0)">
            {{ item }}
          </view>
        </view>
        <view class="u-hao-list">
          <view class="f-34 grey-6" style="width: 100%;padding: 20rpx 0;">第2位</view>
          <view class="u-hao-item" :class="{ 'z-active-ball': zhixuan3[1].includes(item) }" v-for="item in ballList" :key="item" @tap="handlezhixuan3(item, 1)">
            {{ item }}
          </view>
        </view>
        <view class="u-hao-list">
          <view class="f-34 grey-6" style="width: 100%;padding: 20rpx 0;">第3位</view>
          <view class="u-hao-item" :class="{ 'z-active-ball': zhixuan3[2].includes(item) }" v-for="item in ballList" :key="item" @tap="handlezhixuan3(item, 2)">
            {{ item }}
          </view>
        </view>
      </template>

      <view class="u-intro">
        <text class="f-22 grey-6">玩法说明：</text>
        <text class="f-22 blue-6">{{ infoMap[type].intro }}</text>
      </view>

      <view class="u-prize f-26 red-6">单注奖金：{{ infoMap[type].prize }}元</view>
      <view class="u-prize f-26 red-6">预测最高奖金：{{ prize }}元</view>
    </view>

    <view class="u-bottom">
      <view class="u-bottom-left" @click="emptyAll"><text class="f-36 red-6">清空</text></view>
      <view class="u-bottom-center">
        <!-- <text class="f-22 red-6" v-if="!count">摇一摇 来一注</text> -->
        <text class="f-30 red-6" v-if="!count"></text>
        <template v-else>
          <text class="f-36 red-6">{{ count }}</text>
          <text class="f-36">注</text>
          <text class="f-36 red-6">{{ count * 2 }}</text>
          <text class="f-36">元</text>
        </template>
      </view>
      <view class="u-bottom-right f-36" @click="handleConfirm">确定</view>
    </view>
    
    <view class="u-float" @click="aiChoose">机选</view>
  </view>
</template>

<script>
import _ from 'lodash';
import lottery from '@/api/lottery/index.js'
import gCountdown from '@/components/g-countdown/index.vue';
import { openUrl } from '@/util/index.js';
import { get11x5Prize } from '@/lib/11x5_prize.js'

function factorialize(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
export default {
  components: {
    gCountdown
  },
  data() {
    return {
      oldList: [],
      info: {
        issueId: '',
        issue: '',
        drawTime: '',
        upDrawNumber: '',
        sellEndTime: '',
        remainTime: 0,
        upIssue: ''
      },
      show: false,
      type: 'twoPoly',
      typeList: ['onePoly', 'twoPoly', 'threePoly', 'fourPoly', 'fivePoly', 'sixPoly', 'sevenPoly', 'eightPoly', 'twoDirect', 'threeDirect', 'twoGroupPoly', 'threeGroupPoly'],
      infoMap: {
        onePoly: {
          name: '任选一',
          prize: 13,
          intro: '选1个号码，猜中开奖号码第1个数字'
        },
        twoPoly: {
          name: '任选二',
          prize: 6,
          intro: '选2个号码，猜中开奖号码任意2个数字'
        },
        threePoly: {
          name: '任选三',
          prize: 19,
          intro: '选3个号码，猜中开奖号码任意3个数字'
        },
        fourPoly: {
          name: '任选四',
          prize: 78,
          intro: '选4个号码，猜中开奖号码任意4个数字'
        },
        fivePoly: { name: '任选五', prize: 540, intro: '选5个号码，猜中开奖号码任意5个数字' },
        sixPoly: { name: '任选六', prize: 90, intro: '选6个号码，猜中开奖号码任意5个数字' },
        sevenPoly: { name: '任选七', prize: 26, intro: '选7个号码，猜中开奖号码任意5个数字' },
        eightPoly: { name: '任选八', prize: 9, intro: '选8个号码，猜中开奖号码任意5个数字' },
        twoDirect: { name: '前二直选', prize: 130, intro: '选2个号码，猜中开奖号码前2个数字且顺序一致' },
        threeDirect: { name: '前三直选', prize: 1170, intro: '选3个号码，猜中开奖号码前3个数字且顺序一致' },
        twoGroupPoly: { name: '前二组选', prize: 65, intro: '选2个号码，猜中开奖号码前2个数字' },
        threeGroupPoly: { name: '前三组选', prize: 195, intro: '选3个号码，猜中开奖号码前3个数字' }
      },
      ballList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      chooseList: [],
      zhixuan2: [[], []], // 直选2
      zhixuan3: [[], [], []], // 直选3
      zuxuan2: [], // 组选2
      zuxuan3: [], // 组选3
    };
  },
  computed: {
    // 预测奖金
    prize() {
      const type = this.type
      const choose = this.chooseList
      // 任选1
      if (type === 'onePoly') {
        return get11x5Prize('1', choose)
      }
      // 任选2
      if (type === 'twoPoly') {
        return get11x5Prize('2', choose)
      }
      // 任选3
      if (type === 'threePoly') {
        return get11x5Prize('3', choose)
      }
      // 任选4
      if (type === 'fourPoly') {
        return get11x5Prize('4', choose)
      }
      //任选5
      if (type === 'fivePoly') {
        return get11x5Prize('5', choose)
      }
      // 任选6
      if (type === 'sixPoly') {
        return get11x5Prize('6', choose)
      }
      // 任选7
      if (type === 'sevenPoly') {
        return get11x5Prize('7', choose)
      }
      // 任选8
      if (type === 'eightPoly') {
        return get11x5Prize('8', choose)
      }
      // 前二直选
      if (type === 'twoDirect') {
        return 130
      }
      // 前三直选
      if (type === 'threeDirect') {
        return 1170
      }
      // 前二组选
      if (type === 'twoGroupPoly') {
        return 65
      }
      // 前三组选
      if (type === 'threeGroupPoly') {
        return 195
      }
    },
    // 当前期数
    current () {
      const issue = this.info.issue;
      return issue.slice(-2)
    },
    // 前一期
    pre () {
      const upIssue = this.info.upIssue;
      return upIssue.slice(-2)
    },
    // 剩余期数
    remain () {
      return 43 - Number(this.pre)
    },
    // 判断是否是任选1-8
    isRenxuan() {
      return this.infoMap[this.type].name.indexOf('任选') > -1;
    },
    // 计算注数
    count() {
      if (this.type === 'onePoly') {
        return _.get(this.chooseList, 'length', 0);
      }
      if (this.type === 'twoPoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 2) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 2) * factorialize(2));
      }
      if (this.type === 'threePoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 3) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 3) * factorialize(3));
      }
      if (this.type === 'fourPoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 4) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 4) * factorialize(4));
      }
      if (this.type === 'fivePoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 5) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 5) * factorialize(5));
      }
      if (this.type === 'sixPoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 6) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 6) * factorialize(6));
      }
      if (this.type === 'sevenPoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 7) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 7) * factorialize(7));
      }
      if (this.type === 'eightPoly') {
        const len = _.get(this.chooseList, 'length', 0);
        if (len < 8) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 8) * factorialize(8));
      }
      if (this.type === 'twoDirect') {
        return this.zhixuan2[0].length * this.zhixuan2[1].length;
      }
      if (this.type === 'threeDirect') {
        return this.zhixuan3[0].length * this.zhixuan3[1].length * this.zhixuan3[2].length;
      }
      if (this.type == 'twoGroupPoly') {
        const len = _.get(this.zuxuan2, 'length', 0);
        if (len < 2) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 2) * factorialize(2));
      }
      if (this.type == 'threeGroupPoly') {
        const len = _.get(this.zuxuan3, 'length', 0);
        if (len < 3) {
          return 0;
        }
        return factorialize(len) / (factorialize(len - 3) * factorialize(3));
      }
    }
  },
  methods: {
    handleShowMore() {
      this.show = !this.show;
    },
    // 用户是否已经选择
    hasSelect () {
      switch (this.type){
        case 'onePoly':
          return !!this.chooseList.length
          break;
        case 'twoPoly':
          return !!this.chooseList.length
          break;
        case 'threePoly':
          return !!this.chooseList.length
          break;
        case 'fourPoly':
          return !!this.chooseList.length
          break;
        case 'fivePoly':
          return !!this.chooseList.length
          break;
        case 'sixPoly':
          return !!this.chooseList.length
          break;
        case 'sevenPoly':
          return !!this.chooseList.length
          break;
        case 'eightPoly':
          return !!this.chooseList.length
          break;
        case 'twoDirect':
          return !!(this.zhixuan2[0].length || this.zhixuan2[1].length)
          break;
        case 'threeDirect':
          return !!(this.zhixuan3[0].length || this.zhixuan3[1].length || this.zhixuan3[2].length)
          break;
        case 'twoGroupPoly':
          return this.zuxuan2.length
          break;
        case 'threeGroupPoly':
          return this.zuxuan3.length
          break;
        default:
          break;
      }
    },
    // 智能机选
    aiChoose () {
      this.emptyAll();
      const list = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
      switch (this.type){
        case 'onePoly':
          this.chooseList = getRandomArrayElements(list, 1)
          break;
        case 'twoPoly':
          this.chooseList = getRandomArrayElements(list, 2)
          break;
        case 'threePoly':
          this.chooseList = getRandomArrayElements(list, 3)
          break;
        case 'fourPoly':
          this.chooseList = getRandomArrayElements(list, 4)
          break;
        case 'fivePoly':
          this.chooseList = getRandomArrayElements(list, 5)
          break;
        case 'sixPoly':
          this.chooseList = getRandomArrayElements(list, 6)
          break;
        case 'sevenPoly':
          this.chooseList = getRandomArrayElements(list, 7)
          break;
        case 'eightPoly':
          this.chooseList = getRandomArrayElements(list, 8)
          break;
        case 'twoDirect':
          const twoBall = getRandomArrayElements(list, 2)
          this.zhixuan2 = [[twoBall[0]], [twoBall[1]]]
          break;
        case 'threeDirect':
          const threeBall = getRandomArrayElements(list, 3)
          this.zhixuan3 = [[threeBall[0]], [threeBall[1]], [threeBall[2]]]
          break;
        case 'twoGroupPoly':
          this.zuxuan2 = getRandomArrayElements(list, 2)
          break;
        case 'threeGroupPoly':
          this.zuxuan3 = getRandomArrayElements(list, 3)
          break;
        default:
          break;
      }
    },
    // 清空全部
    emptyAll() {
      this.chooseList = [];
      this.zhixuan2 = [[], []];
      this.zhixuan3 = [[], [], []];
      this.zuxuan2 = [];
      this.zuxuan3 = [];
    },
    // 类型选择
    handleTypeChange(item) {
      this.emptyAll();
      this.type = item;
    },
    // 任选1-8点击选择
    handleBallClick(num) {
      if (this.chooseList.includes(num)) {
        this.chooseList = this.chooseList.filter(item => item != num);
      } else {
        this.chooseList.push(num);
      }
    },
    // 组选2
    handlezuxuan2(num) {
      if (this.zuxuan2.includes(num)) {
        this.zuxuan2 = this.zuxuan2.filter(item => item != num);
      } else {
        this.zuxuan2.push(num);
      }
    },
    // 组选3
    handlezuxuan3(num) {
      if (this.zuxuan3.includes(num)) {
        this.zuxuan3 = this.zuxuan3.filter(item => item != num);
      } else {
        if (this.zuxuan3.length === 8) {
          return uni.showToast({
            title: '最多只能选8个号码',
            icon: 'none'
          });
        }
        this.zuxuan3.push(num);
      }
    },
    // 直选2
    handlezhixuan2(num, index) {
      if (this.zhixuan2[index].includes(num)) {
        this.$set(this.zhixuan2, index, this.zhixuan2[index].filter(item => item != num));
      } else {
        // 重复检测
        const isRepeat = this.checkRepeat(num, this.zhixuan2);
        if (isRepeat) {
          return uni.showToast({
            title: '不能选重复号码',
            icon: 'none'
          });
        }
        this.zhixuan2[index].push(num);
      }
    },
    // 直选3
    handlezhixuan3(num, index) {
      if (this.zhixuan3[index].includes(num)) {
        this.$set(this.zhixuan3, index, this.zhixuan3[index].filter(item => item != num));
      } else {
        // 重复检测
        const isRepeat = this.checkRepeat(num, this.zhixuan3);
        if (isRepeat) {
          return uni.showToast({
            title: '不能选重复号码',
            icon: 'none'
          });
        }
        this.zhixuan3[index].push(num);
      }
    },
    // 直选2，3检测重复
    checkRepeat(num, lists) {
      let repeat = false;
      lists.forEach(list => {
        if (list.includes(num)) {
          repeat = true;
        }
      });
      return repeat;
    },
    // 投注确认
    handleConfirm () {
      const isOk = this.checkOk();
      const hasSelect = this.hasSelect();

      if (!hasSelect) {
        return this.aiChoose();
      }
      
      if (!isOk) {
        return uni.showToast({
          title: '请至少选择1注',
          icon: 'none'
        })
      }
      // TODO: 携带参数
      const value = this.genSelect();
      const chooseList = uni.getStorageSync('js11x5') || [];
      const select = {
        type: this.type,
        value,
        baseCount: this.count
      }
      uni.setStorageSync('js11x5', [...chooseList, select]);
      /**
       * issue    // 期
       * issueId  // id
       * type     // 类型
       * value    // 选项
       * baseCount // 基础注数
       */
      uni.navigateTo({
        url: `/pages/js11x5/confirm?issueId=${this.info.issueId}&issue=${this.info.issue}`
      })
    },
    genSelect() {
      if (['onePoly', 'twoPoly', 'threePoly', 'fourPoly', 'fivePoly', 'sixPoly', 'sevenPoly', 'eightPoly'].includes(this.type)) {
        return this.chooseList.join(' ')
      }
      if (this.type === 'twoDirect') {
        return [this.zhixuan2[0].join(' '), this.zhixuan2[1].join(' ')].join('-')
      }
      if (this.type === 'threeDirect') {
        return [this.zhixuan3[0].join(' '), this.zhixuan3[1].join(' '), this.zhixuan3[2].join(' ')].join('-')
      }
      if (this.type === 'twoGroupPoly') {
        return this.zuxuan2.join(' ')
      }
      if (this.type === 'threeGroupPoly') {
        return this.zuxuan3.join(' ') 
      }
    },
    // 条件检测
    checkOk() {
      // 任选1
      if (this.type === 'onePoly') {
        if (this.chooseList.length < 1) {
          return false;
        }
      }
      // 任选2
      if (this.type === 'twoPoly') {
        if (this.chooseList.length < 2) {
          return false;
        }
      }
      // 任选3
      if (this.type === 'threePoly') {
        if (this.chooseList.length < 3) {
          return false;
        }
      }
      // 任选4
      if (this.type === 'fourPoly') {
        if (this.chooseList.length < 4) {
          return false;
        }
      }
      // 任选5
      if (this.type === 'fivePoly') {
        if (this.chooseList.length < 5) {
          return false;
        }
      }
      // 任选6
      if (this.type === 'sixPoly') {
        if (this.chooseList.length < 6) {
          return false;
        }
      }
      // 任选7
      if (this.type === 'sevenPoly') {
        if (this.chooseList.length < 7) {
          return false;
        }
      }
      // 任选8
      if (this.type === 'eightPoly') {
        if (this.chooseList.length < 8) {
          return false;
        }
      }
      // 直选2
      if (this.type === 'twoDirect') {
        if (!this.zhixuan2[0].length || !this.zhixuan2[1].length) {
          return false
        }
      }
      // 直选3
      if (this.type === 'threeDirect') {
        if (!this.zhixuan3[0].length || !this.zhixuan3[1].length || !this.zhixuan3[2].length) {
          return false
        }
      }
      // 组选2
      if (this.type === 'twoGroupPoly') {
        if (this.zuxuan2.length < 2) {
          return false
        }
      }
      // 组选3
      if (this.type === 'threeGroupPoly') {
        if (this.zuxuan3.length < 3) {
          return false
        }
      }
      return true
    },
    initData () {
      lottery.queryCurIssue({
        lotteryId: 10108
      }).then(res => {
        res.upDrawNumberArr = res.upDrawNumber ? res.upDrawNumber.split(',') : [];
        this.info = res;
      })
      // 获取往期开奖
      lottery.getIssueNotify({
        lotteryId: 10108,
        firstRow: 1,
        fetchSize: 3
      }).then(res => {
        res.forEach(item => {
          item.drawNumberArr = item.drawNumber ? item.drawNumber.split(',') : []
        })
        this.oldList = res
      })
    }
  },
  onShow() {
    // this.initData()
  },
  created () {
    uni.setStorageSync('js11x5', []);
    this.initData();
  },
  onNavigationBarButtonTap() {
    openUrl({
      url: 'https://m.chart.icaile.com/chart/sd/fbzs.html',
      needRedirect: true
    })
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/common_vue.less';
.u-js {
  min-height: 100vh;
  padding-bottom: 150rpx;
  background: #f0f0f0;
}
.u-title {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20rpx 0;
}

.u-panel,
.u-panel-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
  padding: 20rpx;
}
.u-panel-left {
  display: flex;
}

.u-arrow {
  transform: rotate(90deg);
  transition: all 300ms cubic-bezier(0.36, 0.66, 0.04, 1);
}
.u-ball-wrap {
  display: flex;
  align-items: center;
}
.u-ball {
  width: 42rpx;
  height: 42rpx;
  margin-left: 20rpx;
  background: @red-6;
  border-radius: 50%;
  display: flex;
  .g-center();
}

.u-type {
  padding: 20rpx 20rpx 0 40rpx;
  background: #fff;
  margin-bottom: 20rpx;
}
.u-choose-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.u-choose-item {
  width: 122rpx;
  height: 56rpx;
  margin-right: 16rpx;
  margin-bottom: 20rpx;
  background: rgba(242, 242, 242, 1);
  border-radius: 10rpx;
  display: flex;
  .g-center();
}

.u-xuan {
  padding: 24rpx 0 20rpx 40rpx;
  background: #fff;
}
.u-hao-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 20rpx;
}
.u-hao-item {
  width: 78rpx;
  height: 78rpx;
  margin-bottom: 20rpx;
  margin-right: 32rpx;
  color: @red-6;
  border: 2rpx solid #d2d2d2;
  border-radius: 50%;
  display: flex;
  .g-center();
}

.z-active {
  background: @red-6;
  color: #fff;
}

.z-active-ball {
  background: @red-6;
  color: #fff;
  border: 2rpx solid @red-6;
}

.u-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 750rpx;
  height: 80rpx;
  background: #fff;
}
.u-bottom-left {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150rpx;
  height: 80rpx;
}
.u-bottom-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150rpx;
  height: 80rpx;
  background: @red-6;
  color: #fff;
}
.u-float {
  position: fixed;
  right: 30rpx;
  bottom: 150rpx;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 120rpx;
  height: 120rpx;
  border-radius: 120rpx;
  background: @red-6;
  opacity: 0.8;
  color: #fff;
  font-size: 30rpx;
}
</style>
