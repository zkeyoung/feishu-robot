const webhook = 'https://open.feishu.cn/';
const Rebot = require('../index')({ webhook });
Rebot.sendText('hello, world').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});