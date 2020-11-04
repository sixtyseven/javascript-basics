```js
// create a UMD pattern

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["exports"], factory);
  } else if (
    typeof exports === "object" &&
    typeof exports.nodeName !== "string"
  ) {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals with namespace
    root.globalNameSpace =
      typeof globalNameSpace === "undefined" ? globalNameSpace : {};
    factory(root.globalNameSpace);
  }
})(this, function (exports) {
  "use strict";
  function SubModuleName() {}

  // attach properties to the exports object to define
  // the exported module properties.
  exports.SubModuleName = SubModuleName;
});
```
