define([], function () {
	"use strict";

	/**
 Callee-evaluated default parameter values. Turn an array into consecutive arguments in 
 a function call. Bind trailing parameters to an array. Rest replaces the need for arguments 
 and addresses common cases more directly.
 */

	// default value in parameter
	function g(x) {
		var y = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

		// y is 10 if not passed
		return x + y;
	}
	// alert(g(10));
	// alert(g(10, 20));

	// parameter is an array.
	function add(x) {
		var _sum = x;

		for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			y[_key - 1] = arguments[_key];
		}

		if (y) {
			y.forEach(function (v, i) {
				_sum += v;
			});
		}

		return _sum;
	}
	alert(add(2, 1, 2, 2, 3)); // 10
});