const crypto = require('crypto');
/**
 * 签名
 * @param {string} timestamp - 10位时间戳
 * @param {string} secret - 密钥
 * @returns {string} - 签名
 */
exports.genSign = function (timestamp, secret) {
    const key = `${timestamp}\n${secret}`;
    const sign = crypto.createHmac('sha256', key).update('').digest('base64');
    return sign;
}