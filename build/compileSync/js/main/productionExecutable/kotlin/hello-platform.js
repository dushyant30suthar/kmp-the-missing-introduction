(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['hello-platform'] = factory(typeof globalThis['hello-platform'] === 'undefined' ? {} : globalThis['hello-platform']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function hello(who) {
    return 'hello, ' + who;
  }
  function main() {
    console.log(hello('js'));
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=hello-platform.js.map
