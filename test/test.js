const webhook = 'https://open.feishu.cn/open-apis/bot/v2/hook';
const Rebot = require('../index')({ webhook });

// 普通文本
/* Rebot.sendText('⁣test').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

const message  = {
    title: '日常提示',
    texts: [
        [
            { tag: 'text', text: '第一行：其余标签请' },
            { tag: 'a', text: '点击链接', href: 'https://open.feishu.cn/document/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM' }
        ]
    ]
}
// 富文本
Rebot.sendRickText(message.title, message.texts, 'en_us').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});