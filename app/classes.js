define([], function () {
	'use strict';

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var Parent = function () {
		function Parent(text) {
			_classCallCheck(this, Parent);

			this.text = text;
		}

		_createClass(Parent, [{
			key: 'say',
			value: function say() {
				return this.text;
			}
		}], [{
			key: 'sayAgain',
			value: function sayAgain() {
				// By default, this.name point to class name.
				// this.name => "Parent"
				return 'static :' + this.name;
			}
		}]);

		return Parent;
	}();

	var Child = function (_Parent) {
		_inherits(Child, _Parent);

		function Child(age, text) {
			_classCallCheck(this, Child);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Child).call(this, text));

			_this.age = age;
			return _this;
		}

		_createClass(Child, [{
			key: 'getAge',
			value: function getAge() {
				return this.age;
			}
		}]);

		return Child;
	}(Parent);

	// var p = new Parent('John');
	// alert(p.text);
	// alert(p.say());
	// alert(Parent.sayAgain());

	//
	var c = new Child(24, 'Jake');
	alert(c.age);
	alert(c.getAge());
	alert(c.text);
	alert(c.say());
});