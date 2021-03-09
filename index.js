const Robot = require('./lib/robot');
const utils = require('./lib/utils');
module.exports = function (option) {

    checkInput(option);

    const { webhook, secret } = option;
    
    return new Robot(webhook, secret);
};

/**
 * 参数检查
 * @param {string} option.webhook
 * @param {string?} option.secret
 */
function checkInput(option) {
    const { webhook, secret } = option;
    if(!utils.exist(webhook) || !utils.isString(webhook)) {
        throw new TypeError('webhook is required and expect string');
    }
    try {
        new URL(webhook);
    } catch (err) {
        throw new TypeError('webhook expect URL');
    }
    if (utils.exist(secret) && !utils.isString(secret)) {
        throw new TypeError('secret expect string');
    }
}