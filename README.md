kscreenshot
===========

这是一个实用的web截图工具，带有下载，复制功能。

![](https://github.com/kejiacheng/img/blob/master/screenshot.gif)

npm:
```sh
npm install kscreenshot --save
```



###使用
```js
import kscreenshot from 'kscreenshot'

//65指键盘中的A
new kscreenshot(65, function (base64) {
    return 'https://www.baidu.com/img/bd_logo1.png'
})
```
该截图工具带有两个参数：1.触发按键；2.截图完成后COPY功能

当执行完程序后，按下shift + a将会触发截图功能；当点击完成，将会触发第二个回调函数，该函数带有截图的base64码，用户需返回一个绝对路径用以完成COPY功能。