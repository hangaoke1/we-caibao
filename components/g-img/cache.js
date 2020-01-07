let taskArr = new Array(); //图片下载任务集合
let isStartTask = false; //是否开启下载任务

import md5 from 'js-md5';

const init = (url, cb) => {
  if (!/^http/.test(url)) {
    return cb(url)
  }
	//本地缓存路径
	const hb_path = '_downloads/image/' + md5(url) + 'mv.jpg'; //HBuilder平台路径
	const sd_path = plus.io.convertLocalFileSystemURL(hb_path); //SD卡绝对路径
	//检查图片是否已存在
	plus.io.resolveLocalFileSystemURL(
		sd_path,
		function(entry) {
			// cb(hb_path);
			cb('file://' + sd_path)
		},
		function(e) {
			// 先显示图片再进行缓存， 若出现相同的url则采用浏览器自带缓存。
			cb(url);
			//如果文件不存在,联网下载图片
			const ifDowload = taskArr.filter(item => {
				return item.data_src === url;
			});
			if (ifDowload.length === 0) {
        // console.log('============图片不存在, 添加到队列=========', url);
				taskArr.push({
					data_src: url,
					hb_path: hb_path,
					sd_path: sd_path,
					status: 'start'
				});
			} else {
        // console.log('============图片不存在, 已经存在于队列=========', url);
      }
			imgOnLoadError();
		}
	);
}
const imgOnLoadError = () => {
	//启动下载队列
	if (!isStartTask) {
		isStartTask = true;
		startTask();
	}
}
// 下载
function startTask() {
	if (taskArr.length == 0) {
		isStartTask = false;
		return;
	}
  const item = taskArr.shift();
	if (item.status !== 'start') {
		return;
	}
	item.status = 'loading';
	const task = plus.downloader.createDownload(
		item.data_src,
		{
			filename: item.hb_path,
			timeout: 5,
			retry: 1,
      retryInterval: 5
		},
		function(download, status) {
      // console.log('图片下载完毕', item.data_src)
			if (status == 200) {
        // console.log('图片下载成功')
				item.status = 'finish';
			} else {
				delFile(item.hb_path);
				download.abort();
				item.status = 'error';
			}
      //继续下载
			startTask();
		}
	);
	task.start();
}
// 删除缓存图片
function delFile(hb_path) {
	if (hb_path) {
		plus.io.resolveLocalFileSystemURL(hb_path, function(entry) {
			entry.remove(
				function(entry) {
					console.log('文件删除成功==' + hb_path);
				},
				function(e) {
					console.log('文件删除失败=' + hb_path);
				}
			);
		});
	}
}

export {
  init
};
