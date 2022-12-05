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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/SoundCloudController/SoundCloudController.ts":
/*!***************************************************************!*\
  !*** ./packages/SoundCloudController/SoundCloudController.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./packages/utils/utils.ts");
var SoundCloudController = (function () {
    function SoundCloudController() {
        var _this = this;
        this.playerState = {};
        this.audioElBaseEventMap = {
            play: function () { return _this.setPlayerState({ isPlaying: true }); },
            pause: function () { return _this.setPlayerState({ isPlaying: false }); },
            timeupdate: function () { return _this.setPlayerState({ currentTime: _this.tarAudioEl.currentTime }); },
            durationchange: function () { return _this.setPlayerState({ currentTime: _this.tarAudioEl.duration }); },
        };
        this.playerStateChangeCallbacks = [];
        console.log('create SoundCloudController');
        this.initEl();
        this.initAudioElEvents();
    }
    SoundCloudController.prototype.initEl = function () {
        (0, utils_1.tassign)(this, {
            titleEl: (0, utils_1.dq1)('a.playbackSoundBadge__titleLink'),
            artistEl: (0, utils_1.dq1)('a.playbackSoundBadge__lightLink'),
            artworkEl: (0, utils_1.dq1)('.playbackSoundBadge span.sc-artwork'),
            playBtnEl: (0, utils_1.dq1)('.playControl.sc-ir.playControls__control.playControls__play'),
            favBtnEl: (0, utils_1.dq1)('.playbackSoundBadge__like'),
            repectBtnEl: (0, utils_1.dq1)('.repeatControl'),
            shuffleBtnEl: (0, utils_1.dq1)('.shuffleControl'),
            volumeBtnEl: (0, utils_1.dq1)('.volume button[type="button"]'),
            tarAudioEl: (0, utils_1.dq1)('#audioel-list-container [data-index="1"]')
        });
    };
    SoundCloudController.prototype.initAudioElEvents = function () {
        var _this = this;
        if (!this.tarAudioEl)
            throw new Error('No audio el has be created');
        (0, utils_1.tentries)(this.audioElBaseEventMap).forEach(function (_a) {
            var _b = __read(_a, 2), event = _b[0], fn = _b[1];
            _this.tarAudioEl.addEventListener(event, fn);
        });
        this.audioElObserver = new MutationObserver(function (mutationList) {
            var e_1, _a;
            try {
                for (var mutationList_1 = __values(mutationList), mutationList_1_1 = mutationList_1.next(); !mutationList_1_1.done; mutationList_1_1 = mutationList_1.next()) {
                    var mutation = mutationList_1_1.value;
                    if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                        var el = mutation.target, src = el.getAttribute('src');
                        if (!src)
                            return;
                        var newPlayerState = _this.forceGetPlayerState();
                        _this.setPlayerState(newPlayerState);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (mutationList_1_1 && !mutationList_1_1.done && (_a = mutationList_1.return)) _a.call(mutationList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        this.audioElObserver.observe(this.tarAudioEl, { attributes: true });
    };
    SoundCloudController.prototype.setPlayerState = function (newState) {
        var _this = this;
        var isUpdate = (0, utils_1.tentries)(newState).find(function (_a) {
            var _b = __read(_a, 2), key = _b[0], val = _b[1];
            return _this.playerState[key] !== val;
        });
        console.log('setPlayerState', isUpdate);
        if (isUpdate) {
            (0, utils_1.tassign)(this.playerState, newState);
            this.emitPlayerStateChange();
        }
    };
    SoundCloudController.prototype.onPlayerStateChange = function (callback) {
        this.playerStateChangeCallbacks.push(callback);
    };
    SoundCloudController.prototype.offPlayerStateChange = function (callback) {
        this.playerStateChangeCallbacks.splice(this.playerStateChangeCallbacks.findIndex(function (cb) { return cb === callback; }));
    };
    SoundCloudController.prototype.emitPlayerStateChange = function () {
        var _this = this;
        this.playerStateChangeCallbacks.forEach(function (cb) { return cb(_this.playerState); });
    };
    SoundCloudController.prototype.forceGetPlayerState = function () {
        return __assign(__assign({ audioEl: this.tarAudioEl, duration: this.tarAudioEl.duration, currentTime: this.tarAudioEl.currentTime, isPlaying: !this.tarAudioEl.paused }, this.getArtistInfo()), { trackName: this.titleEl.textContent, trackLink: this.titleEl.href, volume: this.tarAudioEl.volume, isFav: this.favBtnEl.classList.contains('sc-button-selected'), repectMode: (this.repectBtnEl.classList.contains('m-one') && 'one') ||
                (this.repectBtnEl.classList.contains('m-all') && 'all') ||
                'none', isShuffle: this.shuffleBtnEl.classList.contains('m-shuffling'), isMute: this.volumeBtnEl.classList.contains('muted') });
    };
    SoundCloudController.prototype.getArtistInfo = function () {
        var _a, _b;
        return {
            artwork: (_b = (_a = this.artworkEl.style.backgroundImage.match(/^url\(\"(.*)\"\)$/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '',
            artist: this.artistEl.textContent,
            artLink: this.artistEl.href,
        };
    };
    return SoundCloudController;
}());
exports["default"] = SoundCloudController;


/***/ }),

/***/ "./packages/SoundCloudController/SoundCloudControllerExt.ts":
/*!******************************************************************!*\
  !*** ./packages/SoundCloudController/SoundCloudControllerExt.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./packages/utils/utils.ts");
var SoundCloudController_1 = __importDefault(__webpack_require__(/*! ./SoundCloudController */ "./packages/SoundCloudController/SoundCloudController.ts"));
var SoundCloudControllerExt = (function (_super) {
    __extends(SoundCloudControllerExt, _super);
    function SoundCloudControllerExt() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
        _this.initExtMessager();
        return _this;
    }
    SoundCloudControllerExt.prototype.initExtMessager = function () {
        var _this = this;
        chrome.runtime.onMessage.addListener(function (request) {
            switch (request.type) {
                case 'play':
                case 'pause':
                case 'toggle': {
                    _this.playBtnEl.click();
                    break;
                }
                case 'prev': {
                    (0, utils_1.dq1)('.playControls__prev').click();
                    break;
                }
                case 'next': {
                    (0, utils_1.dq1)('.playControls__next').click();
                    break;
                }
            }
        });
    };
    SoundCloudControllerExt.prototype.emitPlayerStateChange = function () {
        _super.prototype.emitPlayerStateChange.call(this);
        browser.runtime.sendMessage({
            type: 'playerStateUpdate',
            data: this.playerState
        });
        console.log('sendMessage playerStateUpdate');
    };
    return SoundCloudControllerExt;
}(SoundCloudController_1.default));
exports["default"] = SoundCloudControllerExt;


/***/ }),

/***/ "./packages/utils/utils.ts":
/*!*********************************!*\
  !*** ./packages/utils/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tentries = exports.tassign = exports.dq1 = void 0;
exports.dq1 = document.querySelector.bind(document);
function tassign(tarObj, merObj) {
    return Object.assign(tarObj, merObj);
}
exports.tassign = tassign;
function tentries(obj) {
    return Object.entries(obj);
}
exports.tentries = tentries;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./packages/SoundCloudController/SoundCloudControllerExt.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLDhCQUFDO0FBQUQsQ0FBQyxDQXJDb0QsOEJBQW9CLEdBcUN4RTs7Ozs7Ozs7Ozs7Ozs7O0FDekNZLFdBQUcsR0FBMEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFrQztBQUNoSyxTQUFnQixPQUFPLENBQWtCLE1BQVMsRUFBRSxNQUFrQjtJQUNsRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUN4QyxDQUFDO0FBRkQsMEJBRUM7QUFLRCxTQUFnQixRQUFRLENBQWtCLEdBQU07SUFDNUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBRkQsNEJBRUM7Ozs7Ozs7VUNWRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vcGFja2FnZXMvU291bmRDbG91ZENvbnRyb2xsZXIvU291bmRDbG91ZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9wYWNrYWdlcy9Tb3VuZENsb3VkQ29udHJvbGxlci9Tb3VuZENsb3VkQ29udHJvbGxlckV4dC50cyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL3BhY2thZ2VzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTb3VuZENsb3VkQ29udHJvbGxlckV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTb3VuZENsb3VkQ29udHJvbGxlckV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyB0YXNzaWduLCBkcTEsIHRlbnRyaWVzIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRDbG91ZENvbnRyb2xsZXIge1xuICAgIHRpdGxlRWw6IEhUTUxBbmNob3JFbGVtZW50XG4gICAgYXJ0aXN0RWw6IEhUTUxBbmNob3JFbGVtZW50XG4gICAgYXJ0d29ya0VsOiBIVE1MU3BhbkVsZW1lbnRcbiAgICBwbGF5QnRuRWw6IEhUTUxEaXZFbGVtZW50XG5cbiAgICBmYXZCdG5FbDogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICByZXBlY3RCdG5FbDogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICBzaHVmZmxlQnRuRWw6IEhUTUxCdXR0b25FbGVtZW50XG4gICAgdm9sdW1lQnRuRWw6IEhUTUxCdXR0b25FbGVtZW50XG5cbiAgICB0YXJBdWRpb0VsOiBIVE1MQXVkaW9FbGVtZW50XG5cbiAgICBwbGF5ZXJTdGF0ZSA9IHt9IGFzIFBsYXllclN0YXRlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZSBTb3VuZENsb3VkQ29udHJvbGxlcicpXG4gICAgICAgIHRoaXMuaW5pdEVsKClcbiAgICAgICAgdGhpcy5pbml0QXVkaW9FbEV2ZW50cygpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRFbCgpIHtcbiAgICAgICAgdGFzc2lnbjxTb3VuZENsb3VkQ29udHJvbGxlcj4odGhpcywge1xuICAgICAgICAgICAgdGl0bGVFbDogZHExKCdhLnBsYXliYWNrU291bmRCYWRnZV9fdGl0bGVMaW5rJyksXG4gICAgICAgICAgICBhcnRpc3RFbDogZHExKCdhLnBsYXliYWNrU291bmRCYWRnZV9fbGlnaHRMaW5rJyksXG4gICAgICAgICAgICBhcnR3b3JrRWw6IGRxMSgnLnBsYXliYWNrU291bmRCYWRnZSBzcGFuLnNjLWFydHdvcmsnKSxcbiAgICAgICAgICAgIHBsYXlCdG5FbDogZHExKCcucGxheUNvbnRyb2wuc2MtaXIucGxheUNvbnRyb2xzX19jb250cm9sLnBsYXlDb250cm9sc19fcGxheScpLFxuXG4gICAgICAgICAgICBmYXZCdG5FbDogZHExKCcucGxheWJhY2tTb3VuZEJhZGdlX19saWtlJyksXG4gICAgICAgICAgICByZXBlY3RCdG5FbDogZHExKCcucmVwZWF0Q29udHJvbCcpLFxuICAgICAgICAgICAgc2h1ZmZsZUJ0bkVsOiBkcTEoJy5zaHVmZmxlQ29udHJvbCcpLFxuICAgICAgICAgICAgdm9sdW1lQnRuRWw6IGRxMSgnLnZvbHVtZSBidXR0b25bdHlwZT1cImJ1dHRvblwiXScpLFxuXG4gICAgICAgICAgICAvLyA/IG1heWJlIG5vdCBkYXRhLWluZGV4PVwiMVwiXG4gICAgICAgICAgICB0YXJBdWRpb0VsOiBkcTEoJyNhdWRpb2VsLWxpc3QtY29udGFpbmVyIFtkYXRhLWluZGV4PVwiMVwiXScpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGF1ZGlvRWxCYXNlRXZlbnRNYXA6IEF1ZGlvRWxFdmVudE1hcCA9IHtcbiAgICAgICAgcGxheTogKCkgPT4gdGhpcy5zZXRQbGF5ZXJTdGF0ZSh7IGlzUGxheWluZzogdHJ1ZSB9KSxcbiAgICAgICAgcGF1c2U6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBpc1BsYXlpbmc6IGZhbHNlIH0pLFxuICAgICAgICB0aW1ldXBkYXRlOiAoKSA9PiB0aGlzLnNldFBsYXllclN0YXRlKHsgY3VycmVudFRpbWU6IHRoaXMudGFyQXVkaW9FbC5jdXJyZW50VGltZSB9KSxcbiAgICAgICAgZHVyYXRpb25jaGFuZ2U6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBjdXJyZW50VGltZTogdGhpcy50YXJBdWRpb0VsLmR1cmF0aW9uIH0pLFxuICAgICAgICAvLyA/IGlzbG9hZGluZyBzdGF0ZVxuICAgICAgICAvLyB3YWl0aW5nOiAoKSA9PiAxLFxuICAgICAgICAvLyBjYW5wbGF5OiAoKSA9PiAxLFxuICAgICAgICAvLyBjYW5wbGF5dGhyb3VnaDogKCkgPT4gMSxcbiAgICAgICAgLy8gcHJvZ3Jlc3M6ICgpID0+IDEsXG4gICAgfVxuICAgIHByb3RlY3RlZCBhdWRpb0VsT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXJcbiAgICBwcm90ZWN0ZWQgaW5pdEF1ZGlvRWxFdmVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJBdWRpb0VsKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGF1ZGlvIGVsIGhhcyBiZSBjcmVhdGVkJylcblxuICAgICAgICB0ZW50cmllcyh0aGlzLmF1ZGlvRWxCYXNlRXZlbnRNYXApLmZvckVhY2goKFtldmVudCwgZm5dKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhckF1ZGlvRWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4gYXMgYW55KVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYXVkaW9FbE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gbXV0YXRpb24udGFyZ2V0IGFzIEhUTUxBdWRpb0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmMgPSBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3JjKSByZXR1cm5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxheWVyU3RhdGUgPSB0aGlzLmZvcmNlR2V0UGxheWVyU3RhdGUoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBsYXllclN0YXRlKG5ld1BsYXllclN0YXRlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmF1ZGlvRWxPYnNlcnZlci5vYnNlcnZlKHRoaXMudGFyQXVkaW9FbCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgc2V0UGxheWVyU3RhdGUobmV3U3RhdGU6IFBhcnRpYWw8UGxheWVyU3RhdGU+KSB7XG4gICAgICAgIGxldCBpc1VwZGF0ZSA9IHRlbnRyaWVzKG5ld1N0YXRlKS5maW5kKChba2V5LCB2YWxdKSA9PlxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZVtrZXldICE9PSB2YWxcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZygnc2V0UGxheWVyU3RhdGUnLCBpc1VwZGF0ZSlcblxuICAgICAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHRhc3NpZ24odGhpcy5wbGF5ZXJTdGF0ZSwgbmV3U3RhdGUpXG4gICAgICAgICAgICB0aGlzLmVtaXRQbGF5ZXJTdGF0ZUNoYW5nZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3M6ICgocGxheWVyU3RhdGU6IFBsYXllclN0YXRlKSA9PiB2b2lkKVtdID0gW11cbiAgICBvblBsYXllclN0YXRlQ2hhbmdlKGNhbGxiYWNrOiAocGxheWVyU3RhdGU6IFBsYXllclN0YXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMucGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgICB9XG4gICAgb2ZmUGxheWVyU3RhdGVDaGFuZ2UoY2FsbGJhY2s6IChwbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcy5zcGxpY2UodGhpcy5wbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcy5maW5kSW5kZXgoY2IgPT4gY2IgPT09IGNhbGxiYWNrKSlcbiAgICB9XG4gICAgZW1pdFBsYXllclN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnBsYXllclN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goY2IgPT4gY2IodGhpcy5wbGF5ZXJTdGF0ZSkpXG4gICAgfVxuXG4gICAgZm9yY2VHZXRQbGF5ZXJTdGF0ZSgpOiBQbGF5ZXJTdGF0ZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpb0VsOiB0aGlzLnRhckF1ZGlvRWwsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy50YXJBdWRpb0VsLmR1cmF0aW9uLFxuICAgICAgICAgICAgY3VycmVudFRpbWU6IHRoaXMudGFyQXVkaW9FbC5jdXJyZW50VGltZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogIXRoaXMudGFyQXVkaW9FbC5wYXVzZWQsXG5cbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0QXJ0aXN0SW5mbygpLFxuXG4gICAgICAgICAgICB0cmFja05hbWU6IHRoaXMudGl0bGVFbC50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIHRyYWNrTGluazogdGhpcy50aXRsZUVsLmhyZWYsXG5cbiAgICAgICAgICAgIHZvbHVtZTogdGhpcy50YXJBdWRpb0VsLnZvbHVtZSxcblxuICAgICAgICAgICAgaXNGYXY6IHRoaXMuZmF2QnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYy1idXR0b24tc2VsZWN0ZWQnKSxcbiAgICAgICAgICAgIHJlcGVjdE1vZGU6ICh0aGlzLnJlcGVjdEJ0bkVsLmNsYXNzTGlzdC5jb250YWlucygnbS1vbmUnKSAmJiAnb25lJykgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5yZXBlY3RCdG5FbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tYWxsJykgJiYgJ2FsbCcpIHx8XG4gICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgaXNTaHVmZmxlOiB0aGlzLnNodWZmbGVCdG5FbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tc2h1ZmZsaW5nJyksXG4gICAgICAgICAgICBpc011dGU6IHRoaXMudm9sdW1lQnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdXRlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBcnRpc3RJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXJ0d29yazogdGhpcy5hcnR3b3JrRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlLm1hdGNoKC9edXJsXFwoXFxcIiguKilcXFwiXFwpJC8pPy5bMV0gPz8gJycsXG4gICAgICAgICAgICBhcnRpc3Q6IHRoaXMuYXJ0aXN0RWwudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBhcnRMaW5rOiB0aGlzLmFydGlzdEVsLmhyZWYsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkcTEgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBTb3VuZENsb3VkQ29udHJvbGxlciBmcm9tIFwiLi9Tb3VuZENsb3VkQ29udHJvbGxlclwiO1xuLy8gZGVjbGFyZSB0eXBlICQgPSB0eXBlb2YgaW1wb3J0KCdqcXVlcnknKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZENsb3VkQ29udHJvbGxlckV4dCBleHRlbmRzIFNvdW5kQ2xvdWRDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNvdW5kQ2xvdWRDb250cm9sbGVyPikge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuXG4gICAgICAgIHRoaXMuaW5pdEV4dE1lc3NhZ2VyKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEV4dE1lc3NhZ2VyKCkge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3Q6IE1lc3NhZ2VSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcXVlc3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUJ0bkVsLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncHJldic6IHtcbiAgICAgICAgICAgICAgICAgICAgZHExKCcucGxheUNvbnRyb2xzX19wcmV2JykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICduZXh0Jzoge1xuICAgICAgICAgICAgICAgICAgICBkcTEoJy5wbGF5Q29udHJvbHNfX25leHQnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9sdW1lIHVwIGRvd25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlbWl0UGxheWVyU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHN1cGVyLmVtaXRQbGF5ZXJTdGF0ZUNoYW5nZSgpXG4gICAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAncGxheWVyU3RhdGVVcGRhdGUnLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5wbGF5ZXJTdGF0ZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnc2VuZE1lc3NhZ2UgcGxheWVyU3RhdGVVcGRhdGUnKVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgZHExOiB7IDxFIGV4dGVuZHMgRWxlbWVudCA9IEhUTUxEaXZFbGVtZW50PihzZWxlY3RvcnM6IHN0cmluZyk6IEUgfCBudWxsIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpIGFzIHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yXG5leHBvcnQgZnVuY3Rpb24gdGFzc2lnbjxUIGV4dGVuZHMgZHlrZXk+KHRhck9iajogVCwgbWVyT2JqOiBQYXJ0aWFsPFQ+KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyT2JqLCBtZXJPYmopXG59XG5cbnR5cGUgRW50cmllczxUPiA9IHtcbiAgICBbSyBpbiBrZXlvZiBUXTogW0ssIFRbS11dXG59W2tleW9mIFRdW11cbmV4cG9ydCBmdW5jdGlvbiB0ZW50cmllczxUIGV4dGVuZHMgZHlrZXk+KG9iajogVCk6IEVudHJpZXM8VD4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcGFja2FnZXMvU291bmRDbG91ZENvbnRyb2xsZXIvU291bmRDbG91ZENvbnRyb2xsZXJFeHQudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=