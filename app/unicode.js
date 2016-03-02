define([], function () {
	'use strict';

	/**
 Non-breaking additions to support full Unicode, including new unicode literal 
 form in strings and new RegExp u mode to handle code points, as well as new APIs to 
 process strings at the 21bit code points level. These additions support building global 
 apps in JavaScript.
 */

	// 1. same as es5.1
	console.log('好'.length); // 1

	// 2. new RegExp behavior, opt-in 'u'
	console.log('好'.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length); // 1

	// 3. new string ops
	console.log('好'.codePointAt(0)); // 22909

	// 4. for-of iterates code point
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = '好'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var c = _step.value;

			console.log(c);
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
});