define([], function () {
    'use strict';

    function loadImg(url) {
        return new Promise(function (resolve, reject) {
            // XHR to load image
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.responseType = 'blob';

            requst.onload = function () {
                if (request.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error('Image don\'t load successful. error code: ' + request.statusText));
                }
            };

            request.onerror = function () {
                reject(Error('The network issue'));
            };

            request.send();
        });
    }

    var body = document.querySelector('body');
    var myImage = new Image();

    loadImg('t.jpg').then(function (response) {
        var imageUrl = URL.createObjectURL(response);

        myImage.src = imageUrl;
        body.appendChild(myImage);
    }).catch(function (error) {
        console.error(error);
    });
});