/**
 * 热更新检测
 */
import user from '@/api/user/index.js';


export default function(force = false, appkey) {

  console.log('---- 版本更新检测开始 ----')
  plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
    const platform = uni.getSystemInfoSync().platform; // 平台类型
    const version = widgetInfo.version;

    user.queryVersion({
      appkey
    }).then(res => {
      console.log('当前平台: ' + platform);
      console.log('当前版本: ' + version);
      console.log('最新版本: ' + res.version);

      if (version != res.version) {
        const url = res.commonUrl;
        if (!url) {
          uni.showToast({
            title: '配置异常, 请联系相关人员',
            icon: 'none'
          })
          return
        }
        if (force) {
          uni.showLoading({
            title: '更新中'
          })
        }
        const downloadTask = uni.downloadFile({
          url,
          success: (downloadResult) => {
            uni.hideLoading()
            console.log(downloadResult);
            if (downloadResult.statusCode === 200) {
              plus.runtime.install(downloadResult.tempFilePath, {
                force: false
              }, function() {
                uni.showModal({
                  title: '更新完成',
                  content: '快乐赢球，尽情收米',
                  confirmText: '重启应用',
                  showCancel: false,
                  success: function(res) {
                    plus.runtime.restart();
                  }
                })
              }, (e) => {
                console.log(e);
                uni.showToast({
                  title: '安装升级包失败',
                  icon: 'none'
                })
              });
            }
          },
          fail: () => {
            uni.hideLoading()
            uni.showToast({
              title: '下载升级包失败',
              icon: 'none'
            })
          }
        });
        downloadTask.onProgressUpdate((e) => {
          // console.log('更新进度: ', e.progress)
        })

      } else {
        if (force) {
          uni.showToast({
            title: '已经是最新版本, 无需更新',
            icon: 'none'
          })
        }
        console.log('已经是最新版本, 无需更新')
      }
    }).catch(err => {
      if (force) {
        uni.showToast({
          title: '版本更新检测失败',
          icon: 'none'
        })
      }
      console.log('---- 版本更新检测失败 ----')
    })
  })
}
