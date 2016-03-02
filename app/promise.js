define([], function () {
    "use strict";

    /**
    Promise: 对象用于延迟(deferred) 计算和异步(asynchronous ) 计算.。
    一个Promise对象代表着一个还未完成，但预期将来会完成的操作。
    
    语法:
    new Promise(executor)
    new Promise((resolve, reject) => {})
    
    参数: 带有 resolve 、reject两个参数的函数对象。 
    第一个参数用在处理执行成功的场景，
    第二个参数则用在处理执行失败的场景。 一旦我们的操作完成即可调用这些函数。
    */

    /*
    1. 创建Promise
    */
    function testPromise() {
        var iNow = 0;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(++iNow);
            }, Math.random() * 2000 + 1000);
        });

        promise.then(function (value) {
            console.log(value);
        }, function (error) {
            console.error(error);
        });
    }

    testPromise();
});