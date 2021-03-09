const https = require('https');
/**
 * 发送post请求
 * @param {string} url - webhook地址
 * @param {string} data - 请求体
 * @returns {Promise}
 */
function post(url, data) {
    return new Promise((resolve, reject) => {
        request(url, data, (err, result) => {
            if (err) return reject(err);
            return resolve(result);
        });
    });
}

function request(url, data, callback) {
    const urlInfo = new URL(url);
    const dataString = JSON.stringify(data);
    const option = {
        hostname: urlInfo.hostname,
        port: 443,
        path: urlInfo.pathname,
        search: urlInfo.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(dataString)
        }
    };
    const request = https.request(option, (reponse) => {
        reponse.setEncoding('utf8');
        let resData = '';
        reponse.on('data', (chunk) => {
            resData += chunk;
        });
        reponse.on('end', () => {
            let result = {
                statusCode: reponse.statusCode,
                data: resData
            };
            try {
                let jsonData = JSON.parse(result.data);
                result.data = jsonData;
            } catch (err) {}
            return callback(null, result);
        });
    }).on('error', (err) => {
        callback(err, null);
    });

    request.write(dataString);
    request.end();
}

exports.post = post;