/**
 * 打开h5
 */
import config from '@/config'
export const openUrl = function(params) {
  const {
    url,
    titletext = config.nameZh,
    showAction = true,
    showTitle = true,
    needRedirect = false
  } = params;
  // #ifdef H5
  window.open(url)
  return
  // #endif
  const info = uni.getSystemInfoSync()
  const gifRatio = 658 / 494
  const width = info.windowWidth
  const height = width / gifRatio
  let goUrl = url
  let centerButtonOnTab
  // ios下有bug
  centerButtonOnTab = new plus.nativeObj.View("", {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  }, [{
    tag: 'img',
    id: 'img',
    src: '/static/loading.gif',
    position: {
      left: (info.windowWidth - width) / 2 + 'px',
      top: (info.windowHeight - height) / 2 + 'px',
      width: width + 'px',
      height: height + 'px'
    }
  }]);

  if (needRedirect) {
    goUrl = '/static/redirect.html?url=' + encodeURIComponent(url)
  }

  var w = plus.webview.create(goUrl, goUrl, {
    'uni-app': 'none',
    plusrequire: "normal",
    top: 0,
    popGesture: "close",
    backgroundColorTop: "#ffffff",
    backButtonAutoControl: 'close',
    titleNView: showTitle ? {
      autoBackButton: true,
      titletext,
      buttons: showAction ? [{
        float: 'right',
        fontSrc: '/static/uni.ttf',
        text: '\ue507',
        onclick: () => {
          uni.showActionSheet({
            itemList: ['刷新', '浏览器打开'],
            success: (res) => {
              if (res.tapIndex == 0) {
                w.reload()
              } else {
                plus.runtime.openURL(url)
              }
            }
          })
        }
      }] : []
    } : null
  }, {
    offset: uni.getSystemInfoSync().statusBarHeight + 50,
    url: url
  });

  if (goUrl.indexOf('m.chart.icaile.com') > -1) {
    w.setCssFile('_www/static/rmad11x5.css');
  }

  if (goUrl.indexOf('h5.jiangduoduo.com') > -1) {
    w.setCssFile('_www/static/rmadDLT.css');
  }

  w.addEventListener('close', () => {
    w = null;
  })
  w.show('slide-in-right');
  if (centerButtonOnTab) {
    // 加载webview期间动画
    w.append(centerButtonOnTab);
    w.addEventListener('loaded', function() {
      w.remove(centerButtonOnTab)
      centerButtonOnTab.close()
    }, false);
  }
}

/**
 * 隐号
 */
export const encryptMobile = (mobile) => {
  const mobileStr = String(mobile);
  const len = mobileStr.length;
  const starIndex = len - 8;
  const endIndex = len - 5;
  mobile = mobileStr.replace(/\w/g, function(match, pos, originText) {
    if (pos >= starIndex && pos <= endIndex) {
      return '*';
    } else {
      return match;
    }
  });
  return mobile;
};

/* 延迟 */
export const delay = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
