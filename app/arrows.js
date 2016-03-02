define([], function () {
    'use strict';

    /**
    An arrow function expression (also known as fat arrow function) 
    has a shorter syntax compared to function expressions and lexically binds 
    the this value (does not bind its own this, arguments, super, or new.target). 
    Arrow functions are always anonymous.
    */

    var pageHander = {
        id: '12345',
        init: function init() {
            var _this = this;

            document.addEventListener('click', function (event) {
                return _this.doSomething(event);
            }, false);
        },
        doSomething: function doSomething(event) {
            console.log(event.type);
        }
    };

    pageHander.init();

    // let  evens = [1,2,3];

    // let odds = evens.map(v=> v+1);
    // console.log(odds);

    // evens.forEach((v, i) => {
    // 	console.log('value:' + v + ' index:' + i);
    // });

    /**
    Arrow functions are different than traditional functions but do share some common characteristics. 
    For example:
    
    The typeof operator returns "function" for arrow functions.
    Arrow functions are still instances of Function, so instanceof works the same way.
    The methods call(), apply(), and bind() are still usable with arrow functions, though 
    they do not augment the value of this.
    The biggest difference is that arrow functions can’t be used with new, attempting 
    to do results in an error being thrown.
    */
});