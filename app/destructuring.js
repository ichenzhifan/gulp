define([], function () {
	"use strict";

	var _ref = [1, 2, 3];
	var a = _ref[0];
	var b = _ref[2];

	var _getNodes = getNodes();

	var

	// 2. object matching
	// var _getNodes = getNodes();
	// var op = _getNodes.op;
	// var lhs = _getNodes.lhs;
	// var rhs = _getNodes.rhs;
	op = _getNodes.op;
	var lhs = _getNodes.lhs;
	var rhs = _getNodes.rhs;


	function getNodes() {
		return {
			op: 1,
			lhs: {
				x: 10
			},
			rhs: function rhs() {
				return 100;
			}
		};
	}
	//alert(rhs());

	// 3. can be used in parameter position
	function g(_ref2) {
		var x = _ref2.name;

		alert(x);
	}

	//g({name: 20});

	// 4. destructuing + defaults arguments
	function r(_ref3) {
		var x = _ref3.x;
		var y = _ref3.y;
		var _ref3$w = _ref3.w;
		var w = _ref3$w === undefined ? 100 : _ref3$w;

		return x + y + w;
	}

	alert(r({
		x: 10,
		y: 10
	}));
});