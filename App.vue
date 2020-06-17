<script>
  import checkUpdate from '@/lib/checkUpdate.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
      plus.screen.lockOrientation('portrait-primary');
      plus.webview.prefetchURL('https://live.m.500.com/home/zq/jczq/cur?render=local');
      // 检测更新
      checkUpdate();
 
      const innerAudioContext = uni.createInnerAudioContext();
      innerAudioContext.autoplay = false;
      innerAudioContext.src = '/static/coin.mp3';
      innerAudioContext.onPlay(() => {
        console.log('开始播放');
      });
      innerAudioContext.onError((res) => {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
      
      uni.$on('winLottery',(usnerinfo)=>{
        checkUpdate();
        innerAudioContext.play();
      })  
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style></style>
