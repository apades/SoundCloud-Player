(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SoundCloudControllerExt"] = factory();
	else
		root["SoundCloudControllerExt"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/SoundCloudController/SoundCloudController.ts":
/*!***************************************************************!*\
  !*** ./packages/SoundCloudController/SoundCloudController.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundCloudController)
/* harmony export */ });
/* harmony import */ var _utils_AsyncLock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/AsyncLock */ "./packages/utils/AsyncLock.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./packages/utils/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var SoundCloudController = /*#__PURE__*/function () {
  function SoundCloudController() {
    var _this = this;
    _classCallCheck(this, SoundCloudController);
    _defineProperty(this, "audioElLock", new _utils_AsyncLock__WEBPACK_IMPORTED_MODULE_0__.AsyncLock());
    _defineProperty(this, "playerState", {});
    _defineProperty(this, "audioElBaseEventMap", {
      play: function play() {
        return _this.setPlayerState({
          isPlaying: true
        });
      },
      pause: function pause() {
        return _this.setPlayerState({
          isPlaying: false
        });
      },
      // ? maybe not use this
      // timeupdate: () => this.setPlayerState({ currentTime: this.audioEl.currentTime }),
      durationchange: function durationchange() {
        return _this.setPlayerState({
          duration: _this.audioEl.duration
        });
      }

      // TODO isloading state
      // waiting: () => this.setPlayerState({ isPlaying: false }),
      // canplay: () => 1,
      // progress: () => 1,
    });
    _defineProperty(this, "playerStateChangeCallbacks", []);
    this.initEl();
  }
  _createClass(SoundCloudController, [{
    key: "initEl",
    value: function () {
      var _initEl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.tassign)(this, {
                  playBtnEl: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.playControl.sc-ir.playControls__control.playControls__play'),
                  repectBtnEl: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.repeatControl'),
                  shuffleBtnEl: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.shuffleControl'),
                  volumeBtnEl: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.volume button[type="button"]')
                });
                _context.next = 3;
                return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.waitLoopCallback)(function () {
                  return !!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('#audioel-list-container [data-index="1"]');
                });
              case 3:
                this.playBtnEl.click();
                _context.next = 6;
                return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.waitLoopCallback)(function () {
                  return !!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('#audioel-list-container [msaudiocategory="BackgroundCapableMedia"]');
                }, 5000);
              case 6:
                this.audioElLock.ok();
                console.log('initEl ok');
                (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.tassign)(this, {
                  audioEl: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('#audioel-list-container [msaudiocategory="BackgroundCapableMedia"]')
                });
                this.initAudioElEvents();
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function initEl() {
        return _initEl.apply(this, arguments);
      }
      return initEl;
    }()
  }, {
    key: "initAudioElEvents",
    value: function initAudioElEvents() {
      var _this2 = this;
      if (!this.audioEl) throw new Error('No audio el has be created');
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.tentries)(this.audioElBaseEventMap).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          event = _ref2[0],
          fn = _ref2[1];
        _this2.audioEl.addEventListener(event, fn);
      });
      this.audioElObserver = new MutationObserver(function (mutationList) {
        var _iterator = _createForOfIteratorHelper(mutationList),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
              var el = mutation.target,
                src = el.getAttribute('src');
              if (!src) return;
              var newPlayerState = _this2.forceGetPlayerState();
              console.log('audio update', newPlayerState);
              _this2.setPlayerState(newPlayerState);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      this.audioElObserver.observe(this.audioEl, {
        attributes: true
      });
    }

    // TODO action in origin soundCloud page
    // protected observer:MutationObserver = new MutationObserver((mutationList) => {
    //     for (const mutation of mutationList) {
    //         if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
    //             const el = mutation.target as HTMLAudioElement,
    //                 src = el.getAttribute('src')
    //             if (!src) return

    //             let newPlayerState = this.forceGetPlayerState()
    //             this.setPlayerState(newPlayerState)
    //         }
    //     }
    // }) 
  }, {
    key: "bindElEvent",
    value: function bindElEvent(el, type) {
      var _this3 = this;
      switch (type) {
        case 'click':
          {
            el.addEventListener('click', function () {
              return _this3.setPlayerState(_this3.forceGetPlayerState());
            });
            break;
          }
        case 'attr':
          {}
      }
    }
  }, {
    key: "setPlayerState",
    value: function setPlayerState(newState) {
      var _this4 = this;
      var isUpdate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.tentries)(newState).find(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          val = _ref4[1];
        return _this4.playerState[key] !== val;
      });
      if (isUpdate) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.tassign)(this.playerState, _objectSpread(_objectSpread({}, this.forceGetPlayerState()), newState));
        this.emitPlayerStateChange();
      }
    }
  }, {
    key: "onPlayerStateChange",
    value: function onPlayerStateChange(callback) {
      this.playerStateChangeCallbacks.push(callback);
    }
  }, {
    key: "offPlayerStateChange",
    value: function offPlayerStateChange(callback) {
      this.playerStateChangeCallbacks.splice(this.playerStateChangeCallbacks.findIndex(function (cb) {
        return cb === callback;
      }));
    }
  }, {
    key: "emitPlayerStateChange",
    value: function emitPlayerStateChange() {
      var _this5 = this;
      this.playerStateChangeCallbacks.forEach(function (cb) {
        return cb(_this5.playerState);
      });
    }
  }, {
    key: "forceGetPlayerState",
    value: function forceGetPlayerState() {
      return _objectSpread({
        audioEl: this.audioEl,
        duration: this.audioEl.duration || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime2realTime)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.playbackTimeline__duration span[aria-hidden]').textContent),
        currentTime: this.audioEl.currentTime,
        isPlaying: !this.audioEl.paused,
        volume: this.audioEl.volume,
        repectMode: this.repectBtnEl.classList.contains('m-one') && 'one' || this.repectBtnEl.classList.contains('m-all') && 'all' || 'none',
        isShuffle: this.shuffleBtnEl.classList.contains('m-shuffling'),
        isMute: this.volumeBtnEl.classList.contains('muted')
      }, this.getTrackInfo());
    }
  }, {
    key: "getTrackInfo",
    value: function getTrackInfo() {
      var _artworkEl$style$back, _artworkEl$style$back2;
      var titleEl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('a.playbackSoundBadge__titleLink'),
        artworkEl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.playbackSoundBadge span.sc-artwork'),
        artistEl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('a.playbackSoundBadge__lightLink'),
        favBtnEl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dq1)('.playbackSoundBadge__like');
      return {
        artwork: (_artworkEl$style$back = (_artworkEl$style$back2 = artworkEl.style.backgroundImage.match(/^url\(\"(.*)\"\)$/)) === null || _artworkEl$style$back2 === void 0 ? void 0 : _artworkEl$style$back2[1]) !== null && _artworkEl$style$back !== void 0 ? _artworkEl$style$back : '',
        artist: artistEl.textContent,
        artLink: artistEl.href,
        trackName: titleEl.children[1].textContent,
        trackLink: titleEl.href,
        isFav: favBtnEl.classList.contains('sc-button-selected')
      };
    }
  }, {
    key: "getAudioEl",
    value: function () {
      var _getAudioEl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.audioElLock.waiting();
              case 2:
                return _context2.abrupt("return", this.audioEl);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function getAudioEl() {
        return _getAudioEl.apply(this, arguments);
      }
      return getAudioEl;
    }()
  }]);
  return SoundCloudController;
}();


/***/ }),

/***/ "./packages/utils/AsyncLock.ts":
/*!*************************************!*\
  !*** ./packages/utils/AsyncLock.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncLock": () => (/* binding */ AsyncLock)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AsyncLock = /*#__PURE__*/_createClass(function AsyncLock() {
  var _this = this;
  _classCallCheck(this, AsyncLock);
  _defineProperty(this, "checkingAyncQueue", []);
  _defineProperty(this, "isOk", false);
  _defineProperty(this, "waiting", function () {
    if (_this.isOk) return;
    return new Promise(function (resolve) {
      _this.checkingAyncQueue.push(resolve);
    });
  });
  _defineProperty(this, "ok", function () {
    _this.isOk = true;
    _this.checkingAyncQueue.forEach(function (fn) {
      return fn();
    });
  });
  _defineProperty(this, "reWaiting", function () {
    _this.isOk = false;
  });
});

/***/ }),

/***/ "./packages/utils/utils.ts":
/*!*********************************!*\
  !*** ./packages/utils/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dq1": () => (/* binding */ dq1),
/* harmony export */   "formatTime2realTime": () => (/* binding */ formatTime2realTime),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "tassign": () => (/* binding */ tassign),
/* harmony export */   "tentries": () => (/* binding */ tentries),
/* harmony export */   "wait": () => (/* binding */ wait),
/* harmony export */   "waitLoopCallback": () => (/* binding */ waitLoopCallback)
/* harmony export */ });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var dq1 = document.querySelector.bind(document);
function tassign(tarObj, merObj) {
  return Object.assign(tarObj, merObj);
}
function tentries(obj) {
  return Object.entries(obj);
}
var isNull = function isNull(data) {
  return data === null || data === undefined;
};
var wait = function wait() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (res) {
    return setTimeout(function () {
      res();
    }, time);
  });
};

// TODO Promise<boolean>

var waitLoopCallback = function waitLoopCallback(cb) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res, rej) {
      var timmer, initTime, loop;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(option)) {
                initTime = new Date().getTime();
                loop = function loop() {
                  var rs = cb();
                  if (!rs) {
                    if (!isNull(option) && new Date().getTime() - initTime > option) return res(false);
                    return timmer = setTimeout(function () {
                      loop();
                    }, 500);
                  } else return res(true);
                };
                loop();
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
function formatTime2realTime(time) {
  var _time$split = time.split(':'),
    _time$split2 = _slicedToArray(_time$split, 2),
    min = _time$split2[0],
    sec = _time$split2[1];
  return +min * 60 + +sec;
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./packages/SoundCloudController/SoundCloudControllerExt.ts ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundCloudControllerExt)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./packages/utils/utils.ts");
/* harmony import */ var _SoundCloudController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoundCloudController */ "./packages/SoundCloudController/SoundCloudController.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


// declare type $ = typeof import('jquery')
var SoundCloudControllerExt = /*#__PURE__*/function (_SoundCloudController) {
  _inherits(SoundCloudControllerExt, _SoundCloudController);
  var _super = _createSuper(SoundCloudControllerExt);
  function SoundCloudControllerExt() {
    var _this;
    _classCallCheck(this, SoundCloudControllerExt);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.initExtMessager();
    return _this;
  }
  _createClass(SoundCloudControllerExt, [{
    key: "initExtMessager",
    value: function initExtMessager() {
      var _this2 = this;
      chrome.runtime.onMessage.addListener(function (request) {
        switch (request.type) {
          case 'play':
          case 'pause':
          case 'toggle':
            {
              _this2.playBtnEl.click();
              break;
            }
          case 'prev':
            {
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.dq1)('.playControls__prev').click();
              break;
            }
          case 'next':
            {
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.dq1)('.playControls__next').click();
              break;
            }
          case 'unfav':
          case 'fav':
            {
              // TODO network error
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.dq1)('.playbackSoundBadge__like').click();
              _this2.setPlayerState({
                isFav: !_this2.playerState.isFav
              });
              break;
            }
        }
      });
    }
  }, {
    key: "emitPlayerStateChange",
    value: function emitPlayerStateChange() {
      _get(_getPrototypeOf(SoundCloudControllerExt.prototype), "emitPlayerStateChange", this).call(this);
      chrome.runtime.sendMessage({
        type: 'sc:stateUpdate',
        data: this.playerState
      })["catch"](function (error) {
        if (error == 'Error: Could not establish connection. Receiving end does not exist.') return;
        console.error(error);
      });
    }
  }]);
  return SoundCloudControllerExt;
}(_SoundCloudController__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxjQUFjLENBQUM7Z0JBQUUwRSxLQUFLLEVBQUUsQ0FBQyxNQUFJLENBQUNoQyxXQUFXLENBQUNnQztjQUFNLENBQUMsQ0FBQztjQUN2RDtZQUNKO1FBQUM7TUFFVCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUE7SUFBQSxPQUVELGlDQUF3QjtNQUNwQjtNQUNBb0MsTUFBTSxDQUFDQyxPQUFPLENBQUNJLFdBQVcsQ0FBQztRQUN2QnhGLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIrRCxJQUFJLEVBQUUsSUFBSSxDQUFDaEQ7TUFDZixDQUFDLENBQUMsU0FDUSxDQUFDLFVBQUEwRSxLQUFLLEVBQUk7UUFDWixJQUFJQSxLQUFLLElBQUksc0VBQXNFLEVBQUU7UUFDckZ0RyxPQUFPLENBQUNzRyxLQUFLLENBQUNBLEtBQUssQ0FBQztNQUN4QixDQUFDLENBQUM7SUFDVjtFQUFDO0VBQUE7QUFBQSxFQTdDZ0R0SCw2REFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9wYWNrYWdlcy9Tb3VuZENsb3VkQ29udHJvbGxlci9Tb3VuZENsb3VkQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL3BhY2thZ2VzL3V0aWxzL0FzeW5jTG9jay50cyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL3BhY2thZ2VzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTnVtYmVyLmpzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vcGFja2FnZXMvU291bmRDbG91ZENvbnRyb2xsZXIvU291bmRDbG91ZENvbnRyb2xsZXJFeHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU291bmRDbG91ZENvbnRyb2xsZXJFeHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU291bmRDbG91ZENvbnRyb2xsZXJFeHRcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgQXN5bmNMb2NrIH0gZnJvbSBcIi4uL3V0aWxzL0FzeW5jTG9ja1wiXG5pbXBvcnQgeyB0YXNzaWduLCBkcTEsIHRlbnRyaWVzLCB3YWl0TG9vcENhbGxiYWNrLCBmb3JtYXRUaW1lMnJlYWxUaW1lLCB3YWl0IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRDbG91ZENvbnRyb2xsZXIge1xuICAgIHBsYXlCdG5FbDogSFRNTERpdkVsZW1lbnRcblxuICAgIHJlcGVjdEJ0bkVsOiBIVE1MQnV0dG9uRWxlbWVudFxuICAgIHNodWZmbGVCdG5FbDogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICB2b2x1bWVCdG5FbDogSFRNTEJ1dHRvbkVsZW1lbnRcblxuICAgIGF1ZGlvRWw6IEhUTUxBdWRpb0VsZW1lbnRcbiAgICBhdWRpb0VsTG9jayA9IG5ldyBBc3luY0xvY2soKVxuXG4gICAgcGxheWVyU3RhdGUgPSB7fSBhcyBQbGF5ZXJTdGF0ZVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEVsKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaW5pdEVsKCkge1xuICAgICAgICB0YXNzaWduPFNvdW5kQ2xvdWRDb250cm9sbGVyPih0aGlzLCB7XG4gICAgICAgICAgICBwbGF5QnRuRWw6IGRxMSgnLnBsYXlDb250cm9sLnNjLWlyLnBsYXlDb250cm9sc19fY29udHJvbC5wbGF5Q29udHJvbHNfX3BsYXknKSxcbiAgICAgICAgICAgIHJlcGVjdEJ0bkVsOiBkcTEoJy5yZXBlYXRDb250cm9sJyksXG4gICAgICAgICAgICBzaHVmZmxlQnRuRWw6IGRxMSgnLnNodWZmbGVDb250cm9sJyksXG4gICAgICAgICAgICB2b2x1bWVCdG5FbDogZHExKCcudm9sdW1lIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdJyksXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgd2FpdExvb3BDYWxsYmFjaygoKSA9PiAhIWRxMSgnI2F1ZGlvZWwtbGlzdC1jb250YWluZXIgW2RhdGEtaW5kZXg9XCIxXCJdJykpXG4gICAgICAgIHRoaXMucGxheUJ0bkVsLmNsaWNrKClcblxuICAgICAgICBhd2FpdCB3YWl0TG9vcENhbGxiYWNrKCgpID0+ICEhZHExKCcjYXVkaW9lbC1saXN0LWNvbnRhaW5lciBbbXNhdWRpb2NhdGVnb3J5PVwiQmFja2dyb3VuZENhcGFibGVNZWRpYVwiXScpLCA1MDAwKVxuICAgICAgICB0aGlzLmF1ZGlvRWxMb2NrLm9rKClcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXRFbCBvaycpXG5cbiAgICAgICAgdGFzc2lnbjxTb3VuZENsb3VkQ29udHJvbGxlcj4odGhpcywge1xuICAgICAgICAgICAgYXVkaW9FbDogZHExKCcjYXVkaW9lbC1saXN0LWNvbnRhaW5lciBbbXNhdWRpb2NhdGVnb3J5PVwiQmFja2dyb3VuZENhcGFibGVNZWRpYVwiXScpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaW5pdEF1ZGlvRWxFdmVudHMoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhdWRpb0VsQmFzZUV2ZW50TWFwOiBBdWRpb0VsRXZlbnRNYXAgPSB7XG4gICAgICAgIHBsYXk6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBpc1BsYXlpbmc6IHRydWUgfSksXG4gICAgICAgIHBhdXNlOiAoKSA9PiB0aGlzLnNldFBsYXllclN0YXRlKHsgaXNQbGF5aW5nOiBmYWxzZSB9KSxcbiAgICAgICAgLy8gPyBtYXliZSBub3QgdXNlIHRoaXNcbiAgICAgICAgLy8gdGltZXVwZGF0ZTogKCkgPT4gdGhpcy5zZXRQbGF5ZXJTdGF0ZSh7IGN1cnJlbnRUaW1lOiB0aGlzLmF1ZGlvRWwuY3VycmVudFRpbWUgfSksXG4gICAgICAgIGR1cmF0aW9uY2hhbmdlOiAoKSA9PiB0aGlzLnNldFBsYXllclN0YXRlKHsgZHVyYXRpb246IHRoaXMuYXVkaW9FbC5kdXJhdGlvbiB9KVxuICAgICAgICAsXG4gICAgICAgIC8vIFRPRE8gaXNsb2FkaW5nIHN0YXRlXG4gICAgICAgIC8vIHdhaXRpbmc6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBpc1BsYXlpbmc6IGZhbHNlIH0pLFxuICAgICAgICAvLyBjYW5wbGF5OiAoKSA9PiAxLFxuICAgICAgICAvLyBwcm9ncmVzczogKCkgPT4gMSxcbiAgICB9XG4gICAgcHJvdGVjdGVkIGF1ZGlvRWxPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlclxuICAgIHByb3RlY3RlZCBpbml0QXVkaW9FbEV2ZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvRWwpIHRocm93IG5ldyBFcnJvcignTm8gYXVkaW8gZWwgaGFzIGJlIGNyZWF0ZWQnKVxuXG4gICAgICAgIHRlbnRyaWVzKHRoaXMuYXVkaW9FbEJhc2VFdmVudE1hcCkuZm9yRWFjaCgoW2V2ZW50LCBmbl0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9FbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiBhcyBhbnkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hdWRpb0VsT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ3NyYycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEF1ZGlvRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IGVsLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzcmMpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbGF5ZXJTdGF0ZSA9IHRoaXMuZm9yY2VHZXRQbGF5ZXJTdGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyB1cGRhdGUnLCBuZXdQbGF5ZXJTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJTdGF0ZShuZXdQbGF5ZXJTdGF0ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hdWRpb0VsT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmF1ZGlvRWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KVxuICAgIH1cblxuICAgIC8vIFRPRE8gYWN0aW9uIGluIG9yaWdpbiBzb3VuZENsb3VkIHBhZ2VcbiAgICAvLyBwcm90ZWN0ZWQgb2JzZXJ2ZXI6TXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAvLyAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAvLyAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ3NyYycpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBlbCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MQXVkaW9FbGVtZW50LFxuICAgIC8vICAgICAgICAgICAgICAgICBzcmMgPSBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgLy8gICAgICAgICAgICAgaWYgKCFzcmMpIHJldHVyblxuXG4gICAgLy8gICAgICAgICAgICAgbGV0IG5ld1BsYXllclN0YXRlID0gdGhpcy5mb3JjZUdldFBsYXllclN0YXRlKClcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFBsYXllclN0YXRlKG5ld1BsYXllclN0YXRlKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfSkgXG4gICAgYmluZEVsRXZlbnQoZWw6IEhUTUxFbGVtZW50LCB0eXBlOiAnY2xpY2snIHwgJ2F0dHInKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNldFBsYXllclN0YXRlKHRoaXMuZm9yY2VHZXRQbGF5ZXJTdGF0ZSgpKSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnYXR0cic6IHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGxheWVyU3RhdGUobmV3U3RhdGU6IFBhcnRpYWw8UGxheWVyU3RhdGU+KSB7XG4gICAgICAgIGxldCBpc1VwZGF0ZSA9IHRlbnRyaWVzKG5ld1N0YXRlKS5maW5kKChba2V5LCB2YWxdKSA9PlxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZVtrZXldICE9PSB2YWxcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChpc1VwZGF0ZSkge1xuICAgICAgICAgICAgdGFzc2lnbih0aGlzLnBsYXllclN0YXRlLCB7IC4uLnRoaXMuZm9yY2VHZXRQbGF5ZXJTdGF0ZSgpLCAuLi5uZXdTdGF0ZSB9KVxuICAgICAgICAgICAgdGhpcy5lbWl0UGxheWVyU3RhdGVDaGFuZ2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBsYXllclN0YXRlQ2hhbmdlQ2FsbGJhY2tzOiAoKHBsYXllclN0YXRlOiBQbGF5ZXJTdGF0ZSkgPT4gdm9pZClbXSA9IFtdXG4gICAgb25QbGF5ZXJTdGF0ZUNoYW5nZShjYWxsYmFjazogKHBsYXllclN0YXRlOiBQbGF5ZXJTdGF0ZSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnBsYXllclN0YXRlQ2hhbmdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gICAgfVxuICAgIG9mZlBsYXllclN0YXRlQ2hhbmdlKGNhbGxiYWNrOiAocGxheWVyU3RhdGU6IFBsYXllclN0YXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMucGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3Muc3BsaWNlKHRoaXMucGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3MuZmluZEluZGV4KGNiID0+IGNiID09PSBjYWxsYmFjaykpXG4gICAgfVxuICAgIGVtaXRQbGF5ZXJTdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcy5mb3JFYWNoKGNiID0+IGNiKHRoaXMucGxheWVyU3RhdGUpKVxuICAgIH1cblxuICAgIGZvcmNlR2V0UGxheWVyU3RhdGUoKTogUGxheWVyU3RhdGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXVkaW9FbDogdGhpcy5hdWRpb0VsLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYXVkaW9FbC5kdXJhdGlvbiB8fCBmb3JtYXRUaW1lMnJlYWxUaW1lKGRxMSgnLnBsYXliYWNrVGltZWxpbmVfX2R1cmF0aW9uIHNwYW5bYXJpYS1oaWRkZW5dJykudGV4dENvbnRlbnQpLFxuICAgICAgICAgICAgY3VycmVudFRpbWU6IHRoaXMuYXVkaW9FbC5jdXJyZW50VGltZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogIXRoaXMuYXVkaW9FbC5wYXVzZWQsXG4gICAgICAgICAgICB2b2x1bWU6IHRoaXMuYXVkaW9FbC52b2x1bWUsXG4gICAgICAgICAgICByZXBlY3RNb2RlOiAodGhpcy5yZXBlY3RCdG5FbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tb25lJykgJiYgJ29uZScpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMucmVwZWN0QnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtLWFsbCcpICYmICdhbGwnKSB8fFxuICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgIGlzU2h1ZmZsZTogdGhpcy5zaHVmZmxlQnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtLXNodWZmbGluZycpLFxuICAgICAgICAgICAgaXNNdXRlOiB0aGlzLnZvbHVtZUJ0bkVsLmNsYXNzTGlzdC5jb250YWlucygnbXV0ZWQnKSxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0VHJhY2tJbmZvKCksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmFja0luZm8oKSB7XG4gICAgICAgIGxldCB0aXRsZUVsID0gZHExPEhUTUxBbmNob3JFbGVtZW50PignYS5wbGF5YmFja1NvdW5kQmFkZ2VfX3RpdGxlTGluaycpLFxuICAgICAgICAgICAgYXJ0d29ya0VsID0gZHExKCcucGxheWJhY2tTb3VuZEJhZGdlIHNwYW4uc2MtYXJ0d29yaycpLFxuICAgICAgICAgICAgYXJ0aXN0RWwgPSBkcTE8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLnBsYXliYWNrU291bmRCYWRnZV9fbGlnaHRMaW5rJyksXG4gICAgICAgICAgICBmYXZCdG5FbCA9IGRxMSgnLnBsYXliYWNrU291bmRCYWRnZV9fbGlrZScpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFydHdvcms6IGFydHdvcmtFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UubWF0Y2goL151cmxcXChcXFwiKC4qKVxcXCJcXCkkLyk/LlsxXSA/PyAnJyxcbiAgICAgICAgICAgIGFydGlzdDogYXJ0aXN0RWwudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBhcnRMaW5rOiBhcnRpc3RFbC5ocmVmLFxuICAgICAgICAgICAgdHJhY2tOYW1lOiB0aXRsZUVsLmNoaWxkcmVuWzFdLnRleHRDb250ZW50LFxuICAgICAgICAgICAgdHJhY2tMaW5rOiB0aXRsZUVsLmhyZWYsXG4gICAgICAgICAgICBpc0ZhdjogZmF2QnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYy1idXR0b24tc2VsZWN0ZWQnKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEF1ZGlvRWwoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW9FbExvY2sud2FpdGluZygpXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvRWxcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXN5bmNMb2NrIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgY2hlY2tpbmdBeW5jUXVldWU6IEZ1bmN0aW9uW10gPSBbXVxuICBpc09rID0gZmFsc2VcblxuICB3YWl0aW5nID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzT2spIHJldHVyblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5jaGVja2luZ0F5bmNRdWV1ZS5wdXNoKHJlc29sdmUpXG4gICAgfSlcbiAgfVxuICBvayA9ICgpID0+IHtcbiAgICB0aGlzLmlzT2sgPSB0cnVlXG4gICAgdGhpcy5jaGVja2luZ0F5bmNRdWV1ZS5mb3JFYWNoKChmbikgPT4gZm4oKSlcbiAgfVxuXG4gIHJlV2FpdGluZyA9ICgpID0+IHtcbiAgICB0aGlzLmlzT2sgPSBmYWxzZVxuICB9XG59XG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgY29uc3QgZHExOiB7IDxFIGV4dGVuZHMgRWxlbWVudCA9IEhUTUxEaXZFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IEUgfCBudWxsIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpIGFzIHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yXG5leHBvcnQgZnVuY3Rpb24gdGFzc2lnbjxUIGV4dGVuZHMgZHlrZXk+KHRhck9iajogVCwgbWVyT2JqOiBQYXJ0aWFsPFQ+KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyT2JqLCBtZXJPYmopXG59XG5cbnR5cGUgRW50cmllczxUPiA9IHtcbiAgICBbSyBpbiBrZXlvZiBUXTogW0ssIFRbS11dXG59W2tleW9mIFRdW11cbmV4cG9ydCBmdW5jdGlvbiB0ZW50cmllczxUIGV4dGVuZHMgZHlrZXk+KG9iajogVCk6IEVudHJpZXM8VD4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopXG59XG5cblxuZXhwb3J0IGxldCBpc051bGwgPSAoZGF0YTogdW5rbm93bik6IGRhdGEgaXMgdW5kZWZpbmVkIHwgbnVsbCA9PlxuICAgIGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkXG5cbmV4cG9ydCBsZXQgd2FpdCA9ICh0aW1lID0gMCk6IFByb21pc2U8dm9pZD4gPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzKSA9PlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlcygpXG4gICAgICAgIH0sIHRpbWUpXG4gICAgKVxuXG4vLyBUT0RPIFByb21pc2U8Ym9vbGVhbj5cbnR5cGUgV2FpdExvb3AgPSB7XG4gICAgKGNiOiAoKSA9PiBib29sZWFuIC8qIHwgUHJvbWlzZTxib29sZWFuPiAqLywgbGltaXRUaW1lPzogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPlxuICAgIC8vIFRPRE8gXG4gICAgKGNiOiAoKSA9PiBib29sZWFuIC8qIHwgUHJvbWlzZTxib29sZWFuPiAqLywgb3B0aW9uPzogUGFydGlhbDx7XG4gICAgICAgIGludGVydmFsVGltZTogbnVtYmVyXG4gICAgICAgIGludGVydmFsQ291bnQ6IG51bWJlclxuICAgICAgICBsaW1pdFRpbWU6IG51bWJlclxuICAgIH0+KTogUHJvbWlzZTxib29sZWFuPlxufVxuZXhwb3J0IGxldCB3YWl0TG9vcENhbGxiYWNrOiBXYWl0TG9vcCA9IChjYiwgb3B0aW9uID0gNTAwMCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKG9wdGlvbikpIHtcbiAgICAgICAgICAgIGxldCB0aW1tZXI6IE5vZGVKUy5UaW1lb3V0XG4gICAgICAgICAgICBsZXQgaW5pdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgbGV0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJzID0gY2IoKVxuICAgICAgICAgICAgICAgIGlmICghcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc051bGwob3B0aW9uKSAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGluaXRUaW1lID4gb3B0aW9uKSByZXR1cm4gcmVzKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wKClcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gcmVzKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29wKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lMnJlYWxUaW1lKHRpbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IFttaW4sIHNlY10gPSB0aW1lLnNwbGl0KCc6JylcbiAgICByZXR1cm4gK21pbiAqIDYwICsgK3NlY1xufSIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBOdW1iZXJgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogKipOb3RlOioqIFRvIGV4Y2x1ZGUgYEluZmluaXR5YCwgYC1JbmZpbml0eWAsIGFuZCBgTmFOYCwgd2hpY2ggYXJlXG4gKiBjbGFzc2lmaWVkIGFzIG51bWJlcnMsIHVzZSB0aGUgYF8uaXNGaW5pdGVgIG1ldGhvZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTnVtYmVyKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcignMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IG51bWJlclRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkcTEgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBTb3VuZENsb3VkQ29udHJvbGxlciBmcm9tIFwiLi9Tb3VuZENsb3VkQ29udHJvbGxlclwiO1xuLy8gZGVjbGFyZSB0eXBlICQgPSB0eXBlb2YgaW1wb3J0KCdqcXVlcnknKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZENsb3VkQ29udHJvbGxlckV4dCBleHRlbmRzIFNvdW5kQ2xvdWRDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNvdW5kQ2xvdWRDb250cm9sbGVyPikge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuXG4gICAgICAgIHRoaXMuaW5pdEV4dE1lc3NhZ2VyKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEV4dE1lc3NhZ2VyKCkge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3Q6IE1lc3NhZ2VSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcXVlc3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUJ0bkVsLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncHJldic6IHtcbiAgICAgICAgICAgICAgICAgICAgZHExKCcucGxheUNvbnRyb2xzX19wcmV2JykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICduZXh0Jzoge1xuICAgICAgICAgICAgICAgICAgICBkcTEoJy5wbGF5Q29udHJvbHNfX25leHQnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3VuZmF2JzpcbiAgICAgICAgICAgICAgICBjYXNlICdmYXYnOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gbmV0d29yayBlcnJvclxuICAgICAgICAgICAgICAgICAgICBkcTEoJy5wbGF5YmFja1NvdW5kQmFkZ2VfX2xpa2UnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyU3RhdGUoeyBpc0ZhdjogIXRoaXMucGxheWVyU3RhdGUuaXNGYXYgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZW1pdFBsYXllclN0YXRlQ2hhbmdlKCkge1xuICAgICAgICBzdXBlci5lbWl0UGxheWVyU3RhdGVDaGFuZ2UoKVxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnc2M6c3RhdGVVcGRhdGUnLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5wbGF5ZXJTdGF0ZVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgPT0gJ0Vycm9yOiBDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24uIFJlY2VpdmluZyBlbmQgZG9lcyBub3QgZXhpc3QuJykgcmV0dXJuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJBc3luY0xvY2siLCJ0YXNzaWduIiwiZHExIiwidGVudHJpZXMiLCJ3YWl0TG9vcENhbGxiYWNrIiwiZm9ybWF0VGltZTJyZWFsVGltZSIsIlNvdW5kQ2xvdWRDb250cm9sbGVyIiwicGxheSIsInNldFBsYXllclN0YXRlIiwiaXNQbGF5aW5nIiwicGF1c2UiLCJkdXJhdGlvbmNoYW5nZSIsImR1cmF0aW9uIiwiYXVkaW9FbCIsImluaXRFbCIsInBsYXlCdG5FbCIsInJlcGVjdEJ0bkVsIiwic2h1ZmZsZUJ0bkVsIiwidm9sdW1lQnRuRWwiLCJjbGljayIsImF1ZGlvRWxMb2NrIiwib2siLCJjb25zb2xlIiwibG9nIiwiaW5pdEF1ZGlvRWxFdmVudHMiLCJFcnJvciIsImF1ZGlvRWxCYXNlRXZlbnRNYXAiLCJmb3JFYWNoIiwiZXZlbnQiLCJmbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdWRpb0VsT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25MaXN0IiwibXV0YXRpb24iLCJ0eXBlIiwiYXR0cmlidXRlTmFtZSIsImVsIiwidGFyZ2V0Iiwic3JjIiwiZ2V0QXR0cmlidXRlIiwibmV3UGxheWVyU3RhdGUiLCJmb3JjZUdldFBsYXllclN0YXRlIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJuZXdTdGF0ZSIsImlzVXBkYXRlIiwiZmluZCIsImtleSIsInZhbCIsInBsYXllclN0YXRlIiwiZW1pdFBsYXllclN0YXRlQ2hhbmdlIiwiY2FsbGJhY2siLCJwbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcyIsInB1c2giLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJjYiIsInRleHRDb250ZW50IiwiY3VycmVudFRpbWUiLCJwYXVzZWQiLCJ2b2x1bWUiLCJyZXBlY3RNb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpc1NodWZmbGUiLCJpc011dGUiLCJnZXRUcmFja0luZm8iLCJ0aXRsZUVsIiwiYXJ0d29ya0VsIiwiYXJ0aXN0RWwiLCJmYXZCdG5FbCIsImFydHdvcmsiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm1hdGNoIiwiYXJ0aXN0IiwiYXJ0TGluayIsImhyZWYiLCJ0cmFja05hbWUiLCJjaGlsZHJlbiIsInRyYWNrTGluayIsImlzRmF2Iiwid2FpdGluZyIsImlzT2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNraW5nQXluY1F1ZXVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmluZCIsInRhck9iaiIsIm1lck9iaiIsIk9iamVjdCIsImFzc2lnbiIsIm9iaiIsImVudHJpZXMiLCJpc051bGwiLCJkYXRhIiwidW5kZWZpbmVkIiwid2FpdCIsInRpbWUiLCJyZXMiLCJzZXRUaW1lb3V0Iiwib3B0aW9uIiwicmVqIiwiaW5pdFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImxvb3AiLCJycyIsInRpbW1lciIsInNwbGl0IiwibWluIiwic2VjIiwiU291bmRDbG91ZENvbnRyb2xsZXJFeHQiLCJhcmdzIiwiaW5pdEV4dE1lc3NhZ2VyIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicmVxdWVzdCIsInNlbmRNZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9