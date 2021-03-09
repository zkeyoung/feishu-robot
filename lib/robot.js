const crypto = require('./crypto');
const utils = require('./utils');
const httpClient = require('./httpClient');

module.exports = Robot;

/**
 * 飞书群聊机器人
 * @param {string} webhook - webhook地址
 * @param {string} secret - 密钥
 * @return {Robot}
 */
function Robot(webhook, secret) {
    this.webhook = webhook;
    this.secret = secret;
}

/**
 * 发送文本消息
 * @param {string} text 文本
 * @return {Promise} - resolve({ statusCode, data }), reject(err);
 */
Robot.prototype.sendText = function (text) {
    const data = {
        msg_type: 'text',
        content: {
            text: text
        }
    };
    if (utils.exist(this.secret)) {
        const timestamp = utils.genTimeStamp();
        const sign = crypto.genSign(timestamp, this.secret);
        data.timestamp = timestamp;
        data.sign = sign;
    }
    return httpClient.post(this.webhook, data);
}