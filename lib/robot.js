const crypto = require('./crypto');
const utils = require('./utils');
const simpleClient = require('simple-client');

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
 * @return {Promise} - resolve({ statusCode, statusMessage, data }), reject(err);
 */
Robot.prototype.sendText = function (text) {
    const data = {
        msg_type: 'text',
        content: {
            text: text
        }
    };
    return this.send(data);
}

/**
 * 发送富文本消息
 * @param {string} title 标题
 * @param {array[]} texts 富文本消息按照飞书格式数组中每个元素是数字，代表一行数据 element: [{ tag, text, ... }]
 * @param {string} language - 语言默认中文zh_cn
 * @return {Promise} - resolve({ statusCode, statusMessage, data }), reject(err);
 */
Robot.prototype.sendRickText = function (title, texts, language) {
    const defaultLanguage = 'zh_cn';
    language = utils.exist(language) ? language : defaultLanguage;
    const data = {
        msg_type: 'post',
        content: {
            post: {
                [language]: {
                    title: title,
                    content: texts
                }
            }
        }
    };
    return this.send(data);
}

/**
 * 发送消息
 * @param {object} data - 对应飞书消息格式
 * @returns {Promise} - resolve({ statusCode, data }), reject(err);
 */
Robot.prototype.send = function(data) {
    if (utils.exist(this.secret)) {
        const timestamp = utils.genTimeStamp();
        const sign = crypto.genSign(timestamp, this.secret);
        data.timestamp = timestamp;
        data.sign = sign;
    }
    return simpleClient.post(this.webhook, { body: data });
}