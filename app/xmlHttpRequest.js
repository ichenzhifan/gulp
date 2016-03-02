define([], function () {
    'use strict';

    /**
    Example using new XMLHttpRequest()
    创建一个Promise
    
    这个例子展示了如何用promise报告一个XMLHttpRequest的成功或失败。
    */
    function $http(url) {
        var core = {
            ajax: function ajax(method, url, args) {
                var promise = new Promise(function (resolve, reject) {
                    // XMLHttpRequest instance
                    var client = new XMLHttpRequest();
                    var uri = url;

                    // parameter check.
                    if (args && (method === 'POST' || method === 'GET')) {
                        uri += '?';
                        var argCount = 0;

                        for (var key in args) {
                            if (argCount++) {
                                uri += '&';
                            }

                            uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                        }
                    }

                    client.open(method, uri);
                    client.send();

                    client.onload = function (resp) {
                        if (resp.status >= 200 && resp.status < 300) {
                            // Performs the function "resolve" when this.status is equal to 2xx
                            resolve(resp);
                        } else {
                            // Performs the function "reject" when this.status is different than 2xx
                            reject(resp.statusText);
                        }
                    };

                    client.onerror = function (error) {
                        reject(error.statusText);
                    };
                });

                return promise;
            }
        };

        // adapter pattern.
        return {
            get: function get(args) {
                return core.ajax('GET', url, args);
            },
            post: function post(args) {
                return core.ajax('POST', url, args);
            },
            put: function put(args) {
                return core.ajax('PUT', url, args);
            },
            delete: function _delete(args) {
                return core.ajax('DELETE', url, args);
            }
        };
    }

    $http('./data/test.json').get().then(function (result) {
        console.log(result);
    }, function (error) {
        console.error(error);
    });
});