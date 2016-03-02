define(['babel-polyfill'], function () {
    'use strict';

    // Sets
    var s = new Set(); /**
                       Efficient data structures for common algorithms. 
                       WeakMaps provides leak-free object-key’d side tables.
                       */

    var obj = { name: 1 };
    s.add('hello').add('john').add('!').add(obj);

    // 1.size
    console.log(s.size); // 4
    // 2.has
    console.log(s.has(obj)); // true
    // 3.iterator
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v = _step.value;

            console.log(v);
        }
        // 4.to array
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

    var myArr = Array.from(s);
    console.log(myArr);

    // 5. array to set
    var newSet = new Set(myArr);

    // 6. delete
    s.delete('john');

    // 7. clear
    s.clear();
});