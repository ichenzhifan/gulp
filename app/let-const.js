define([], function () {
    "use strict";

    /**
    Block-scoped binding constructs. 
    let is the new var. 
    const is single-assignment. Static restrictions prevent use before assignment
    */

    function f() {
        var x = undefined;

        var say = function say() {
            var y = 10;

            // error, const
            // y = 20;

            return y;
        };

        // ok, let.
        x = 20;

        return x + say();
    }

    alert(f());
});