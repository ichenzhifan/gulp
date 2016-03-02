define([], function () {
  "use strict";

  var _templateObject = _taggedTemplateLiteral(["Hi\n", "!"], ["Hi\\n", "!"]);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  /**
  Template strings provide syntactic sugar(``, not '') for constructing strings. 
  This is similar to string interpolation features in Perl, Python and more. 
  Optionally, a tag can be added to allow the string construction to be customized, 
  avoiding injection attacks or constructing higher level data structures from string contents.
  */

  var a = 5;
  var b = 10;
  var s = "Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".";

  // Fifteen is 15 and
  // not 20.
  console.log(s);

  // 'Hi\n5'
  String.raw(_templateObject, 2 + 3);
});