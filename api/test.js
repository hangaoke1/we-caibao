export default function doTest() {
  var xhr = new plus.net.XMLHttpRequest();
  xhr.onreadystatechange = function() {
    switch (xhr.readyState) {
      case 0:
        console.log("xhr请求已初始化");
        break;
      case 1:
        console.log("xhr请求已打开");
        break;
      case 2:
        console.log("xhr请求已发送");
        break;
      case 3:
        console.log("xhr请求已响应");
        break;
      case 4:
        if (xhr.status == 200) {
          console.log("xhr请求成功：" + xhr.responseText);
        } else {
          console.log("xhr请求失败：" + xhr.readyState);
        }
        break;
      default:
        break;
    }
  }
  xhr.open("POST", "http://client.zcwy.vip/user/app_withdraw.htm");
  xhr.send();
}
