//网络请求工具

let HTTPRequest = {};

HTTPRequest.get = function (url, params,headers) {
    var tempArr = [];
    if (params) {
        let keys = Object.keys(params);
        keys.forEach((key) => tempArr.push(key + "=" + params[key]));
    }
    if (url.search(/\?/) === -1) {
        url += '?' + tempArr.join('&');
    } else {
        url += tempArr.join('&');
    }

    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => response.json())
            .then(response=> {
                resolve(response)
            })
            .catch(e => {
                reject(e)
            }).done()

    })
};


HTTPRequest.post = function (url, params, headers) {
    var formData = new FormData();
    if (params) {
        let keys = Object.keys(params);
        keys.forEach((key) => formData.append(key, params[key]));
    }
    return new Promise(function (resolve, reject) {

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => response.json())
            .then(response=> {
                resolve(response)
            })
            .catch(e => {
                reject(e);
            }).done()

    })
};

module.exports =  HTTPRequest;
