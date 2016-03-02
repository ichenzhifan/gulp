define([], function () {
	"use strict";

	/**
 1. Math.acosh(x) // 返回x的反双曲余弦值.
 2. Math.asinh(x) // 返回x的反双曲正弦值.
 3. Math.atanh(x) // 返回 x 的反双曲正切值.
 4. Math.cosh(x) // 返回x的双曲余弦值.
 
 5. Math.hypot(x,y,...) //  函数返回它的所有参数的平方和的平方根
 */

	// Math.acosh(x)

	/*
 1. Math.acosh
 Polyfill
 
 For all x≥1, we have arcosh(x)=ln(x+x2-1) and 
 so this can be emulated with the following function:
 */
	Math.acosh = Math.acosh || function (x) {
		return Math.log(x + Math.sqrt(x * x - 1));
	};

	/*
 2. Math.hypot
 */
	Math.hypot = Math.hypot || function () {
		var result = 0;
		var len = arguments.length;

		for (var i = 0; i < len; i++) {
			if (arguments[i] === Infinity || arguments[i] === -Infinity) {
				return Infinity;
			}

			result += arguments[i] * arguments[i];
		}

		return Math.sqrt(result);
	};

	alert(Math.hypot(3, 4)); // 5
});