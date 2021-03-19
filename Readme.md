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

## 配置参数
```js
require('feishu-robot')(option);
```
* [option.webhook](#webhook参数获取方式) (必填): webhook地址，类型是URL。例如：webhook: https://open.feishu.cn/xxxxxx
* [option.secret](#webhook参数获取方式) (选填): 如果飞书安全设置为签名校验则需要填写此项。类型是string，例如： secret: '123456'

## API说明
* Rebot.sendText(text: string) 发送文本信息
* Rebot.sendRickText(title: string, texts[][], lang?:string) 发送富文本信息， texts是二维数组，每个元素代表一行数据。格式需要和[飞书格式](https://open.feishu.cn/document/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM#c48c9c2a)匹配
* Rebot.send(data: object) 支持所有消息，格式需要飞书匹配。

## webhook参数获取方式
1. 随便在哪一个飞书群聊里，点击设置
2. 点击群机器人
3. 添加机器人
4. 选择添加自定义机器人（通过webhook将自定义服务的消息推送至飞书）
5. 设置机器人名称、描述，点击下一步
6. 点击复制获取webhook地址，点击签名校验复制secret。点击完成
### webhook获取图片教程（**多图预警**）
![image](https://user-images.githubusercontent.com/38270459/111720692-66bd7c00-8899-11eb-9ba5-0cd94753581b.png)
![image](https://user-images.githubusercontent.com/38270459/111721384-b94b6800-889a-11eb-82ca-e441250f8d9c.png)
![image](https://user-images.githubusercontent.com/38270459/111721494-f7488c00-889a-11eb-9e0c-60b0da76a7f3.png)
![image](https://user-images.githubusercontent.com/38270459/111721574-265efd80-889b-11eb-9e1e-b1288f6dc4e8.png)
![image](https://user-images.githubusercontent.com/38270459/111721700-61f9c780-889b-11eb-8a83-58f84bad1163.png)
![image](https://user-images.githubusercontent.com/38270459/111722043-0845cd00-889c-11eb-9f1e-6abce953b6ce.png)

## 尾言
如果对您有帮助，请给个star。^_^

## License
[MIT](LICENSE)