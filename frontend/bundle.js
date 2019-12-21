'use strict';

var foo = "hello world!";

var index = (function () {
  var y = "234";
  console.log("".concat(foo, " ").concat(y, " 2"));
});

module.exports = index;
