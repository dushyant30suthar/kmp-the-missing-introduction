(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['hello-platform-greeting'] = factory(typeof globalThis['hello-platform-greeting'] === 'undefined' ? {} : globalThis['hello-platform-greeting']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function greeting() {
    return 'Hello, Platform!';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = greeting;
  //endregion
  return _;
}));

//# sourceMappingURL=hello-platform-greeting.js.map
