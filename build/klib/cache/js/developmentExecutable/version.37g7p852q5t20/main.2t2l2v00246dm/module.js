(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'hello-platform'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'hello-platform'.");
    }
    globalThis['hello-platform'] = factory(typeof globalThis['hello-platform'] === 'undefined' ? {} : globalThis['hello-platform'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
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
  //region block: exports
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));
