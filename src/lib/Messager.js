(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Messager"] = factory();
	else
		root["Messager"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./packages/Messager/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Messager)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Messager = /*#__PURE__*/function () {
  function Messager() {
    _classCallCheck(this, Messager);
    _defineProperty(this, "onMsgEventMap", {});
    if (Messager._messager) return Messager._messager;
    Messager._messager = this;
    this.init();
    return this;
  }
  _createClass(Messager, [{
    key: "init",
    value: function init() {
      var _this = this;
      try {
        chrome.runtime.onMessage.addListener(function (msgData, sender, sendRes) {
          var type = msgData.type;
          !localStorage.disableMsg;
          console.log('💬rc:onMsg', type, msgData);
          if (_this.onMsgEventMap[type]) {
            _this.onMsgEventMap[type].forEach( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fn) {
                var res;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fn(msgData.data, sender);
                      case 2:
                        res = _context.sent;
                        res && sendRes(res);
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        });
      } catch (error) {
        this.isFail = true;
        console.error('Not support chrome messager on this page');
      }
    }
  }, {
    key: "sendMsg",
    value: function sendMsg(message) {
      var toAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new Promise(function (res, rej) {
        if (toAll) res(chrome.runtime.sendMessage(message));
        return chrome.tabs.query({
          active: true,
          currentWindow: true
        }, function (tabs) {
          return res(chrome.tabs.sendMessage(tabs[0].id, message));
        });
      });
    }
  }, {
    key: "sendMsgToAll",
    value: function sendMsgToAll(message) {
      return this.sendMsg(message, true);
    }
  }, {
    key: "onMsg",
    value: function onMsg(type, callback) {
      var _this$onMsgEventMap$t;
      if (this.isFail) return console.error('Not support chrome messager on this page');
      this.onMsgEventMap[type] = (_this$onMsgEventMap$t = this.onMsgEventMap[type]) !== null && _this$onMsgEventMap$t !== void 0 ? _this$onMsgEventMap$t : [];
      this.onMsgEventMap[type].push(callback);
    }
  }, {
    key: "offMsg",
    value: function offMsg(type, callback) {
      var _this$onMsgEventMap$t2;
      this.onMsgEventMap[type] = (_this$onMsgEventMap$t2 = this.onMsgEventMap[type]) !== null && _this$onMsgEventMap$t2 !== void 0 ? _this$onMsgEventMap$t2 : [];
      var index = this.onMsgEventMap[type].findIndex(function (fn) {
        return fn === callback;
      });
      index !== -1 && this.onMsgEventMap[type].splice(index, 1);
    }
  }]);
  return Messager;
}();
_defineProperty(Messager, "_messager", null);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FFRCxlQUNJWixJQUFPLEVBQ1B1QixRQUkyRCxFQUM3RDtNQUFBO01BQ0UsSUFBSSxJQUFJLENBQUNaLE1BQU0sRUFBRSxPQUFPUixPQUFPLENBQUNPLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQztNQUNqRixJQUFJLENBQUNMLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLDRCQUFHLElBQUksQ0FBQ0ssYUFBYSxDQUFDTCxJQUFJLENBQUMseUVBQUksRUFBRTtNQUN6RCxJQUFJLENBQUNLLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLENBQUN3QixJQUFJLENBQUNELFFBQVEsQ0FBQztJQUMzQztFQUFDO0lBQUE7SUFBQSxPQUVELGdCQUNJdkIsSUFBTyxFQUNQdUIsUUFJMkQsRUFDdkQ7TUFBQTtNQUNKLElBQUksQ0FBQ2xCLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLDZCQUFHLElBQUksQ0FBQ0ssYUFBYSxDQUFDTCxJQUFJLENBQUMsMkVBQUksRUFBRTtNQUN6RCxJQUFJeUIsS0FBSyxHQUFHLElBQUksQ0FBQ3BCLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLENBQUMwQixTQUFTLENBQUMsVUFBQ25CLEVBQUU7UUFBQSxPQUFLQSxFQUFFLEtBQUtnQixRQUFRO01BQUEsRUFBQztNQUN2RUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ3BCLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLENBQUMyQixNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0Q7RUFBQztFQUFBO0FBQUE7QUFBQSxnQkEzRmdCbkMsUUFBUSxlQUNTLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL3BhY2thZ2VzL01lc3NhZ2VyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1lc3NhZ2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1lc3NhZ2VyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZXI8TXNnTWFwID0gZHlrZXk+e1xuICAgIHN0YXRpYyBfbWVzc2FnZXI6IE1lc3NhZ2VyPGFueT4gPSBudWxsXG5cbiAgICBwcm90ZWN0ZWQgb25Nc2dFdmVudE1hcDoge1xuICAgICAgICBbVCBpbiBrZXlvZiBNc2dNYXBdOiAoKFxuICAgICAgICAgICAgZGF0YTogTXNnTWFwW1RdLFxuICAgICAgICAgICAgc2VuZGVyOiBjaHJvbWUucnVudGltZS5NZXNzYWdlU2VuZGVyLFxuICAgICAgICAgICAgLy8gc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBSZXNNc2dUeXBlPE1zZ01hcCwga2V5b2YgTXNnTWFwPikgPT4gdm9pZFxuICAgICAgICApID0+IFByb21pc2U8UmVzTXNnVHlwZTxNc2dNYXAsIFQ+PiB8IFJlc01zZ1R5cGU8TXNnTWFwLCBUPilbXVxuICAgIH0gPSB7fSBhcyBhbnlcbiAgICBpc0ZhaWw6IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoTWVzc2FnZXIuX21lc3NhZ2VyKSByZXR1cm4gTWVzc2FnZXIuX21lc3NhZ2VyXG4gICAgICAgIE1lc3NhZ2VyLl9tZXNzYWdlciA9IHRoaXNcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIG1zZ0RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGtleW9mIE1zZ01hcFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogTXNnTWFwW2tleW9mIE1zZ01hcF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzXG4gICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbXNnRGF0YS50eXBlXG4gICAgICAgICAgICAgICAgICAgICFsb2NhbFN0b3JhZ2UuZGlzYWJsZU1zZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn8J+SrHJjOm9uTXNnJywgdHlwZSwgbXNnRGF0YSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbk1zZ0V2ZW50TWFwW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTXNnRXZlbnRNYXBbdHlwZV0uZm9yRWFjaChhc3luYyAoZm4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZm4obXNnRGF0YS5kYXRhIGFzIGFueSwgc2VuZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyAmJiBzZW5kUmVzKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmlzRmFpbCA9IHRydWVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBzdXBwb3J0IGNocm9tZSBtZXNzYWdlciBvbiB0aGlzIHBhZ2UnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZE1zZzxUIGV4dGVuZHMga2V5b2YgTXNnTWFwPihtZXNzYWdlOiBTZW5kTXNnVHlwZTxNc2dNYXAsIFQ+LCB0b0FsbCA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXNNc2dUeXBlPE1zZ01hcCwgVD4+KChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgaWYgKHRvQWxsKVxuICAgICAgICAgICAgICAgIHJlcyhjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKSlcbiAgICAgICAgICAgIHJldHVybiBjaHJvbWUudGFicy5xdWVyeShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICh0YWJzKSA9PiByZXMoY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwgbWVzc2FnZSkpXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZW5kTXNnVG9BbGw8VCBleHRlbmRzIGtleW9mIE1zZ01hcD4obWVzc2FnZTogU2VuZE1zZ1R5cGU8TXNnTWFwLCBUPikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kTXNnKG1lc3NhZ2UsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nc2c8VCBleHRlbmRzIGtleW9mIE1zZ01hcD4oXG4gICAgICAgIHR5cGU6IFQsXG4gICAgICAgIGNhbGxiYWNrOiAoXG4gICAgICAgICAgICBkYXRhOiBPbWl0PE1zZ01hcFtUXSwgJyRyZXMnPixcbiAgICAgICAgICAgIHNlbmRlcjogY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcixcbiAgICAgICAgICAgIC8vIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogUmVzTXNnVHlwZTxNc2dNYXAsIFQ+KSA9PiB2b2lkXG4gICAgICAgICkgPT4gUHJvbWlzZTxSZXNNc2dUeXBlPE1zZ01hcCwgVD4+IHwgUmVzTXNnVHlwZTxNc2dNYXAsIFQ+XG4gICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmFpbCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ05vdCBzdXBwb3J0IGNocm9tZSBtZXNzYWdlciBvbiB0aGlzIHBhZ2UnKVxuICAgICAgICB0aGlzLm9uTXNnRXZlbnRNYXBbdHlwZV0gPSB0aGlzLm9uTXNnRXZlbnRNYXBbdHlwZV0gPz8gW11cbiAgICAgICAgdGhpcy5vbk1zZ0V2ZW50TWFwW3R5cGVdLnB1c2goY2FsbGJhY2spXG4gICAgfVxuXG4gICAgb2ZmTXNnPFQgZXh0ZW5kcyBrZXlvZiBNc2dNYXA+KFxuICAgICAgICB0eXBlOiBULFxuICAgICAgICBjYWxsYmFjazogKFxuICAgICAgICAgICAgZGF0YTogT21pdDxNc2dNYXBbVF0sICckcmVzJz4sXG4gICAgICAgICAgICBzZW5kZXI6IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXIsXG4gICAgICAgICAgICAvLyBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IFJlc01zZ1R5cGU8TXNnTWFwLCBUPikgPT4gdm9pZFxuICAgICAgICApID0+IFByb21pc2U8UmVzTXNnVHlwZTxNc2dNYXAsIFQ+PiB8IFJlc01zZ1R5cGU8TXNnTWFwLCBUPlxuICAgICk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTXNnRXZlbnRNYXBbdHlwZV0gPSB0aGlzLm9uTXNnRXZlbnRNYXBbdHlwZV0gPz8gW11cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vbk1zZ0V2ZW50TWFwW3R5cGVdLmZpbmRJbmRleCgoZm4pID0+IGZuID09PSBjYWxsYmFjaylcbiAgICAgICAgaW5kZXggIT09IC0xICYmIHRoaXMub25Nc2dFdmVudE1hcFt0eXBlXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufVxuXG50eXBlIFNlbmRNc2dUeXBlPE1zZ21hcCBleHRlbmRzIGR5a2V5LCBUIGV4dGVuZHMga2V5b2YgTXNnbWFwPiA9IHtcbiAgICB0eXBlOiBUXG59ICYgKE1zZ21hcFtUXSBleHRlbmRzIG51bGxcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAge31cbiAgICA6IHtcbiAgICAgICAgZGF0YTogT21pdDxNc2dtYXBbVF0sICckcmVzJz5cbiAgICB9KVxuXG50eXBlIFJlc01zZ1R5cGU8TXNnbWFwIGV4dGVuZHMgZHlrZXksIFQgZXh0ZW5kcyBrZXlvZiBNc2dtYXA+ID0gKE1zZ21hcFtUXVsnJHJlcyddIGV4dGVuZHMgbnVsbFxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICBudWxsXG4gICAgOiBNc2dtYXBbVF1bJyRyZXMnXVxuKSJdLCJuYW1lcyI6WyJNZXNzYWdlciIsIl9tZXNzYWdlciIsImluaXQiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2dEYXRhIiwic2VuZGVyIiwic2VuZFJlcyIsInR5cGUiLCJsb2NhbFN0b3JhZ2UiLCJkaXNhYmxlTXNnIiwiY29uc29sZSIsImxvZyIsIm9uTXNnRXZlbnRNYXAiLCJmb3JFYWNoIiwiZm4iLCJkYXRhIiwicmVzIiwiZXJyb3IiLCJpc0ZhaWwiLCJtZXNzYWdlIiwidG9BbGwiLCJQcm9taXNlIiwicmVqIiwic2VuZE1lc3NhZ2UiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiaWQiLCJzZW5kTXNnIiwiY2FsbGJhY2siLCJwdXNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9