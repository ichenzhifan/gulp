define(['babel-polyfill'], function () {
	'use strict';

	var m = new Map(); /**
                    Map对象就是简单的键/值映射.其中键和值可以是任意值(原始值或对象值).
                    
                    	new Map([iterable])
                    	myMap.get(key)
                    	myMap.set(key, value)
                    	myMap.has(key)
                    	myMap.delete(key)
                    	myMap.clear()
                    	myMap.size
                    
                    
                    Object和Map的比较EDIT
                    	Object和Map类似的一点是,它们都允许你按键存取一个值,都可以删除键,还可以检测一个键是否绑定了值.
                    	因此,一直以来,我们都把对象当成Map来使用,不过,现在有了Map,下面的区别解释了为什么使用Map更好点.
                    
                    	1.一个对象通常都有自己的原型,所以一个对象总有一个"prototype"键.不过,现在可以使用map = Object.create(null)来创建一个没有原型的对象.
                    	2.一个对象的键只能是字符串,但一个Map的键可以是任意值.
                    	3.你可以很容易的得到一个Map的键值对个数,而只能跟踪一个对象的键值对个数
                    */

	m.set('name', 'john');
	m.set('age', 12);

	console.log(m.size); // 2
	console.log(m.get('age')); // 12

	console.log(m.has('name')); // true

	// iterator is supported.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = m[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var v = _step.value;

			// v[0] => key
			// v[1] => value
			console.log(v[0] + ' ' + v[1]);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	m.delete('age');
	console.log(m.has('age')); // false, deleted was called before.
});