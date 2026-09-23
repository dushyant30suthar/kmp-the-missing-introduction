(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './hello-platform-greeting.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./hello-platform-greeting.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['hello-platform-greeting'] === 'undefined') {
      throw new Error("Error loading module 'hello-platform:app'. Its dependency 'hello-platform-greeting' was not found. Please, check whether 'hello-platform-greeting' is loaded prior to 'hello-platform:app'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'hello-platform:app'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'hello-platform:app'.");
    }
    globalThis['hello-platform:app'] = factory(typeof globalThis['hello-platform:app'] === 'undefined' ? {} : globalThis['hello-platform:app'], globalThis['hello-platform-greeting'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_hello_platform_greeting, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var greeting = kotlin_hello_platform_greeting.$_$.a;
  var println = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    println(greeting());
  }
  function mainWrapper() {
    main();
  }
  //region block: exports
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));
