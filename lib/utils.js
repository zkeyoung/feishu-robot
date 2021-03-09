/**
 * 生成10位时间戳
 * @returns {string} - 时间戳
 */
function genTimeStamp() {
    let timestamp = Date.now();
    return String(timestamp).slice(0, 10);
}

function exist(value) {
    return null != value;
}

function isString(value) {
    return typeof value === 'string';
}

module.exports = {
    genTimeStamp,
    exist,
    isString,
}