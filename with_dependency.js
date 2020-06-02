// create a UMD pattern, with a dependency  module  ("depModule")

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["exports", "depModule"], factory);
  } else if (
    typeof exports === "object" &&
    typeof exports.nodeName !== "string"
  ) {
    // CommonJS
    factory(exports, require("./moduleFileName").depModule);
  } else {
    // Browser globals with namespace
    root.globalNameSpace =
      typeof globalNameSpace === "undefined" ? globalNameSpace : {};
    factory(root.globalNameSpace, root.globalNameSpace.depModule);
  }
})(this, function (exports) {
  "use strict";
  function AnotherSubModuleName() {}

  // attach properties to the exports object to define
  // the exported module properties.
  exports.AnotherSubModuleName = AnotherSubModuleName;
});
