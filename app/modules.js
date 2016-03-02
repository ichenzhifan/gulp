define(['modules/math'], function (_math) {
  'use strict';

  var math = _interopRequireWildcard(_math);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  alert(math.pi); /**
                  Language-level support for modules for component definition. 
                  Codifies patterns from popular JavaScript module loaders (AMD, CommonJS). 
                  Runtime behaviour defined by a host-defined default loader. 
                  Implicitly async model – no code executes until requested modules are available and processed.
                  */
});