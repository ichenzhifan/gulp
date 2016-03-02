define([], function () {
    'use strict';

    /**
    	Proxy 对象用来为基础操作（例如：属性查找、赋值、枚举、方法调用等）定义用户自定义行为。
    */

    /**
    	 1. 在以下简单的例子中，当对象中不存在属性名时，缺省返回数为20。
    	 例子中使用了 get 处理器（get handler）。
    */
    // var handler = {
    // 	get: (target, name)=>{
    // 		return name in target ? target[name] : 20;
    // 	}
    // };

    // var p = new Proxy({}, handler);
    // p.a = 1;
    // p.b = 2;

    // console.log(p.a); // 1;
    // console.log(p.c); // 20

    /**
    	2. 无操作转发代理
    	在以下例子中，我们使用了一个原生 JavaScript 对象，代理会将所有应用到它的操作转发到这个对象上
    */
    // var target = {};
    // var p = new Proxy(target, {});
    // p.a = 10;

    // console.log(target.a); // 10

    /**
    	3. 验证
    	通过代理，你可以轻松地验证向一个对象的传值。以下例子使用了 set 处理器（set handler）
    */
    var validator = {
        set: function set(obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                    throw new RangeError('The age cannot greater than 200');
                }
            }

            // the default behavior.
            obj[prop] = value;
        }
    };

    var person = new Proxy({}, validator);
    person.age = 100;
    console.log(person.age); // 100

    person.age = 'youg'; // throw error
    person.age = 300; // throw error.
});