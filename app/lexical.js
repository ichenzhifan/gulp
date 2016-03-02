define([], function () {
    'use strict';

    /**
     They support both expression and statement bodies.
     Unlike functions, arrows share the same lexical this as their surrounding code.
    */
    var bob = {
        _name: 'bob',
        _friends: ['f1'],
        print: function print() {
            var _this = this;

            this._friends.forEach(function (f) {
                console.log(_this._name + ' friend: ' + f);
            });
        }
    };

    bob.print();
});