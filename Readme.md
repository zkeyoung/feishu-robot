## 飞书群聊机器人
## 环境
* node: 10.18.0
* npm: 6.13.4

## 安装
```bash
$ npm install feishu-robot
```

## 快速开始
```js
const Rebot = require('feishu-robot')({ webhook });
Rebot.sendText('hello, world').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}
```
## API说明
* Rebot.sendText(text: string) 发送文本信息
* Rebot.sendRickText(title: string, texts[][], lang?:string) 发送富文本信息， texts是二维数组，每个元素代表一行数据。格式需要和[飞书格式](https://open.feishu.cn/document/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM#c48c9c2a)匹配
* Rebot.send(data: object) 支持所有消息，格式需要飞书匹配。

## 配置参数
```js
require('feishu-robot')(option);
```
* option.webhook (必填): webhook 地址。例如：webhook: https://open.feishu.cn/xxxxxx
* option.secret (选填): 如果飞书安全设置为签名校验则需要填写此项。例如： secret: '123456'

## 尾言
如果对您有帮助，请给个star。^_^

## License
[MIT](LICENSE)