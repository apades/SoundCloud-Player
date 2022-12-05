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
            durationchange: function () { return _this.setPlayerState({ duration: _this.tarAudioEl.duration }); },
        };
        this.playerStateChangeCallbacks = [];
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
        chrome.runtime.sendMessage({
            type: 'playerStateUpdate',
            data: this.playerState
        })
            .catch(function (error) {
            if (error == 'Error: Could not establish connection. Receiving end does not exist.')
                return;
            console.error(error);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0F4Q29ELDhCQUFvQixHQXdDeEU7Ozs7Ozs7Ozs7Ozs7OztBQzVDWSxXQUFHLEdBQTBFLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBa0M7QUFDaEssU0FBZ0IsT0FBTyxDQUFrQixNQUFTLEVBQUUsTUFBa0I7SUFDbEUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7QUFDeEMsQ0FBQztBQUZELDBCQUVDO0FBS0QsU0FBZ0IsUUFBUSxDQUFrQixHQUFNO0lBQzVDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDOUIsQ0FBQztBQUZELDRCQUVDOzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci8uL3BhY2thZ2VzL1NvdW5kQ2xvdWRDb250cm9sbGVyL1NvdW5kQ2xvdWRDb250cm9sbGVyLnRzIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyLy4vcGFja2FnZXMvU291bmRDbG91ZENvbnRyb2xsZXIvU291bmRDbG91ZENvbnRyb2xsZXJFeHQudHMiLCJ3ZWJwYWNrOi8vU291bmRDbG91ZC1QbGF5ZXIvLi9wYWNrYWdlcy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1NvdW5kQ2xvdWQtUGxheWVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Tb3VuZENsb3VkLVBsYXllci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU291bmRDbG91ZENvbnRyb2xsZXJFeHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU291bmRDbG91ZENvbnRyb2xsZXJFeHRcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgdGFzc2lnbiwgZHExLCB0ZW50cmllcyB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kQ2xvdWRDb250cm9sbGVyIHtcbiAgICB0aXRsZUVsOiBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGFydGlzdEVsOiBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGFydHdvcmtFbDogSFRNTFNwYW5FbGVtZW50XG4gICAgcGxheUJ0bkVsOiBIVE1MRGl2RWxlbWVudFxuXG4gICAgZmF2QnRuRWw6IEhUTUxCdXR0b25FbGVtZW50XG4gICAgcmVwZWN0QnRuRWw6IEhUTUxCdXR0b25FbGVtZW50XG4gICAgc2h1ZmZsZUJ0bkVsOiBIVE1MQnV0dG9uRWxlbWVudFxuICAgIHZvbHVtZUJ0bkVsOiBIVE1MQnV0dG9uRWxlbWVudFxuXG4gICAgdGFyQXVkaW9FbDogSFRNTEF1ZGlvRWxlbWVudFxuXG4gICAgcGxheWVyU3RhdGUgPSB7fSBhcyBQbGF5ZXJTdGF0ZVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEVsKClcbiAgICAgICAgdGhpcy5pbml0QXVkaW9FbEV2ZW50cygpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRFbCgpIHtcbiAgICAgICAgdGFzc2lnbjxTb3VuZENsb3VkQ29udHJvbGxlcj4odGhpcywge1xuICAgICAgICAgICAgdGl0bGVFbDogZHExKCdhLnBsYXliYWNrU291bmRCYWRnZV9fdGl0bGVMaW5rJyksXG4gICAgICAgICAgICBhcnRpc3RFbDogZHExKCdhLnBsYXliYWNrU291bmRCYWRnZV9fbGlnaHRMaW5rJyksXG4gICAgICAgICAgICBhcnR3b3JrRWw6IGRxMSgnLnBsYXliYWNrU291bmRCYWRnZSBzcGFuLnNjLWFydHdvcmsnKSxcbiAgICAgICAgICAgIHBsYXlCdG5FbDogZHExKCcucGxheUNvbnRyb2wuc2MtaXIucGxheUNvbnRyb2xzX19jb250cm9sLnBsYXlDb250cm9sc19fcGxheScpLFxuXG4gICAgICAgICAgICBmYXZCdG5FbDogZHExKCcucGxheWJhY2tTb3VuZEJhZGdlX19saWtlJyksXG4gICAgICAgICAgICByZXBlY3RCdG5FbDogZHExKCcucmVwZWF0Q29udHJvbCcpLFxuICAgICAgICAgICAgc2h1ZmZsZUJ0bkVsOiBkcTEoJy5zaHVmZmxlQ29udHJvbCcpLFxuICAgICAgICAgICAgdm9sdW1lQnRuRWw6IGRxMSgnLnZvbHVtZSBidXR0b25bdHlwZT1cImJ1dHRvblwiXScpLFxuXG4gICAgICAgICAgICAvLyA/IG1heWJlIG5vdCBkYXRhLWluZGV4PVwiMVwiXG4gICAgICAgICAgICB0YXJBdWRpb0VsOiBkcTEoJyNhdWRpb2VsLWxpc3QtY29udGFpbmVyIFtkYXRhLWluZGV4PVwiMVwiXScpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGF1ZGlvRWxCYXNlRXZlbnRNYXA6IEF1ZGlvRWxFdmVudE1hcCA9IHtcbiAgICAgICAgcGxheTogKCkgPT4gdGhpcy5zZXRQbGF5ZXJTdGF0ZSh7IGlzUGxheWluZzogdHJ1ZSB9KSxcbiAgICAgICAgcGF1c2U6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBpc1BsYXlpbmc6IGZhbHNlIH0pLFxuICAgICAgICB0aW1ldXBkYXRlOiAoKSA9PiB0aGlzLnNldFBsYXllclN0YXRlKHsgY3VycmVudFRpbWU6IHRoaXMudGFyQXVkaW9FbC5jdXJyZW50VGltZSB9KSxcbiAgICAgICAgZHVyYXRpb25jaGFuZ2U6ICgpID0+IHRoaXMuc2V0UGxheWVyU3RhdGUoeyBkdXJhdGlvbjogdGhpcy50YXJBdWRpb0VsLmR1cmF0aW9uIH0pXG4gICAgICAgICxcbiAgICAgICAgLy8gPyBpc2xvYWRpbmcgc3RhdGVcbiAgICAgICAgLy8gd2FpdGluZzogKCkgPT4gMSxcbiAgICAgICAgLy8gY2FucGxheTogKCkgPT4gMSxcbiAgICAgICAgLy8gY2FucGxheXRocm91Z2g6ICgpID0+IDEsXG4gICAgICAgIC8vIHByb2dyZXNzOiAoKSA9PiAxLFxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYXVkaW9FbE9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyXG4gICAgcHJvdGVjdGVkIGluaXRBdWRpb0VsRXZlbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyQXVkaW9FbCkgdGhyb3cgbmV3IEVycm9yKCdObyBhdWRpbyBlbCBoYXMgYmUgY3JlYXRlZCcpXG5cbiAgICAgICAgdGVudHJpZXModGhpcy5hdWRpb0VsQmFzZUV2ZW50TWFwKS5mb3JFYWNoKChbZXZlbnQsIGZuXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJBdWRpb0VsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuIGFzIGFueSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmF1ZGlvRWxPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3QpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnc3JjJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MQXVkaW9FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gZWwuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNyYykgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1BsYXllclN0YXRlID0gdGhpcy5mb3JjZUdldFBsYXllclN0YXRlKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5ZXJTdGF0ZShuZXdQbGF5ZXJTdGF0ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hdWRpb0VsT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhckF1ZGlvRWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KVxuICAgIH1cblxuICAgIC8vIFRPRE8gYWN0aW9uIGluIG9yaWdpbiBzb3VuZENsb3VkIHBhZ2VcblxuICAgIHNldFBsYXllclN0YXRlKG5ld1N0YXRlOiBQYXJ0aWFsPFBsYXllclN0YXRlPikge1xuICAgICAgICBsZXQgaXNVcGRhdGUgPSB0ZW50cmllcyhuZXdTdGF0ZSkuZmluZCgoW2tleSwgdmFsXSkgPT5cbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdGVba2V5XSAhPT0gdmFsXG4gICAgICAgIClcblxuICAgICAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHRhc3NpZ24odGhpcy5wbGF5ZXJTdGF0ZSwgbmV3U3RhdGUpXG4gICAgICAgICAgICB0aGlzLmVtaXRQbGF5ZXJTdGF0ZUNoYW5nZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3M6ICgocGxheWVyU3RhdGU6IFBsYXllclN0YXRlKSA9PiB2b2lkKVtdID0gW11cbiAgICBvblBsYXllclN0YXRlQ2hhbmdlKGNhbGxiYWNrOiAocGxheWVyU3RhdGU6IFBsYXllclN0YXRlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMucGxheWVyU3RhdGVDaGFuZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgICB9XG4gICAgb2ZmUGxheWVyU3RhdGVDaGFuZ2UoY2FsbGJhY2s6IChwbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcy5zcGxpY2UodGhpcy5wbGF5ZXJTdGF0ZUNoYW5nZUNhbGxiYWNrcy5maW5kSW5kZXgoY2IgPT4gY2IgPT09IGNhbGxiYWNrKSlcbiAgICB9XG4gICAgZW1pdFBsYXllclN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnBsYXllclN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goY2IgPT4gY2IodGhpcy5wbGF5ZXJTdGF0ZSkpXG4gICAgfVxuXG4gICAgZm9yY2VHZXRQbGF5ZXJTdGF0ZSgpOiBQbGF5ZXJTdGF0ZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhdWRpb0VsOiB0aGlzLnRhckF1ZGlvRWwsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy50YXJBdWRpb0VsLmR1cmF0aW9uLFxuICAgICAgICAgICAgY3VycmVudFRpbWU6IHRoaXMudGFyQXVkaW9FbC5jdXJyZW50VGltZSxcbiAgICAgICAgICAgIGlzUGxheWluZzogIXRoaXMudGFyQXVkaW9FbC5wYXVzZWQsXG5cbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0QXJ0aXN0SW5mbygpLFxuXG4gICAgICAgICAgICB0cmFja05hbWU6IHRoaXMudGl0bGVFbC50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIHRyYWNrTGluazogdGhpcy50aXRsZUVsLmhyZWYsXG5cbiAgICAgICAgICAgIHZvbHVtZTogdGhpcy50YXJBdWRpb0VsLnZvbHVtZSxcblxuICAgICAgICAgICAgaXNGYXY6IHRoaXMuZmF2QnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYy1idXR0b24tc2VsZWN0ZWQnKSxcbiAgICAgICAgICAgIHJlcGVjdE1vZGU6ICh0aGlzLnJlcGVjdEJ0bkVsLmNsYXNzTGlzdC5jb250YWlucygnbS1vbmUnKSAmJiAnb25lJykgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5yZXBlY3RCdG5FbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tYWxsJykgJiYgJ2FsbCcpIHx8XG4gICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgaXNTaHVmZmxlOiB0aGlzLnNodWZmbGVCdG5FbC5jbGFzc0xpc3QuY29udGFpbnMoJ20tc2h1ZmZsaW5nJyksXG4gICAgICAgICAgICBpc011dGU6IHRoaXMudm9sdW1lQnRuRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdXRlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBcnRpc3RJbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXJ0d29yazogdGhpcy5hcnR3b3JrRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlLm1hdGNoKC9edXJsXFwoXFxcIiguKilcXFwiXFwpJC8pPy5bMV0gPz8gJycsXG4gICAgICAgICAgICBhcnRpc3Q6IHRoaXMuYXJ0aXN0RWwudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBhcnRMaW5rOiB0aGlzLmFydGlzdEVsLmhyZWYsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkcTEgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCBTb3VuZENsb3VkQ29udHJvbGxlciBmcm9tIFwiLi9Tb3VuZENsb3VkQ29udHJvbGxlclwiO1xuLy8gZGVjbGFyZSB0eXBlICQgPSB0eXBlb2YgaW1wb3J0KCdqcXVlcnknKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZENsb3VkQ29udHJvbGxlckV4dCBleHRlbmRzIFNvdW5kQ2xvdWRDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFNvdW5kQ2xvdWRDb250cm9sbGVyPikge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuXG4gICAgICAgIHRoaXMuaW5pdEV4dE1lc3NhZ2VyKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEV4dE1lc3NhZ2VyKCkge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3Q6IE1lc3NhZ2VSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcXVlc3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0b2dnbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUJ0bkVsLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncHJldic6IHtcbiAgICAgICAgICAgICAgICAgICAgZHExKCcucGxheUNvbnRyb2xzX19wcmV2JykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICduZXh0Jzoge1xuICAgICAgICAgICAgICAgICAgICBkcTEoJy5wbGF5Q29udHJvbHNfX25leHQnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9sdW1lIHVwIGRvd25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlbWl0UGxheWVyU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHN1cGVyLmVtaXRQbGF5ZXJTdGF0ZUNoYW5nZSgpXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdwbGF5ZXJTdGF0ZVVwZGF0ZScsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnBsYXllclN0YXRlXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciA9PSAnRXJyb3I6IENvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbi4gUmVjZWl2aW5nIGVuZCBkb2VzIG5vdCBleGlzdC4nKSByZXR1cm5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGRxMTogeyA8RSBleHRlbmRzIEVsZW1lbnQgPSBIVE1MRGl2RWxlbWVudD4oc2VsZWN0b3JzOiBzdHJpbmcpOiBFIHwgbnVsbCB9ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvci5iaW5kKGRvY3VtZW50KSBhcyB0eXBlb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvclxuZXhwb3J0IGZ1bmN0aW9uIHRhc3NpZ248VCBleHRlbmRzIGR5a2V5Pih0YXJPYmo6IFQsIG1lck9iajogUGFydGlhbDxUPikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhck9iaiwgbWVyT2JqKVxufVxuXG50eXBlIEVudHJpZXM8VD4gPSB7XG4gICAgW0sgaW4ga2V5b2YgVF06IFtLLCBUW0tdXVxufVtrZXlvZiBUXVtdXG5leHBvcnQgZnVuY3Rpb24gdGVudHJpZXM8VCBleHRlbmRzIGR5a2V5PihvYmo6IFQpOiBFbnRyaWVzPFQ+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3BhY2thZ2VzL1NvdW5kQ2xvdWRDb250cm9sbGVyL1NvdW5kQ2xvdWRDb250cm9sbGVyRXh0LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9