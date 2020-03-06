(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>account works!</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-navbar></app-navbar>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>favorite works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n  <div>\r\n    <h1 class=\"text-center\">muscle is your life?</h1>\r\n    <h2 class=\"text-center\">Let's start to calculate your protein </h2>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn-lg btn-danger col-10\" *ngIf=\"!acccept\" (click)=\"isAcccept()\">Lets started</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"acccept\">\r\n\r\n    <form (submit)=\"submit()\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <div id=\"egg\" class=\"invisible\">\r\n\r\n          <div class=\"row justify-content-center\">\r\n            <small class=\"text-danger p-2 m-1\"\r\n              [class.d-none]=\"egg.untouched || !egg.value || egg.value && eggSize.dirty\">You must\r\n              choose a size <i class=\"fas fa-arrow-circle-right\"></i></small>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-center\">\r\n\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Egg</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Egg\" #egg=\"ngModel\" name=\"egg\" placeholder=\"amount\" [(ngModel)]=\"protein.egg.amount\">\r\n\r\n            <select class=\"rounded-pill border border-danger p-1 m-1 space\" [(ngModel)]=\"protein.egg.sizeEgg\"\r\n              #eggSize=\"ngModel\" name=\"eggSize\">\r\n              <option [value]=\"size\" disabled>size</option>\r\n              <option value=\"S\">S</option>\r\n              <option value=\"M\">M</option>\r\n              <option value=\"L\">L</option>\r\n            </select>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div id=\"bread\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Bread</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Bread\" name=\"bread\" placeholder=\"slices\" [(ngModel)]=\"protein.bread\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"tuna\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Tuna</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Tuna\" name=\"tuna\" placeholder=\"grams\" [(ngModel)]=\"protein.tuna\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"meat\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Meat</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Meat\" name=\"meat\" placeholder=\"grams\" [(ngModel)]=\"protein.meat\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"cheese\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Cheese</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Cheese\" name=\"cheese\" placeholder=\"grams\" [(ngModel)]=\"protein.cheese\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"cottage\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Cottage</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Cottage\" name=\"cottage\" placeholder=\"grams\" [(ngModel)]=\"protein.cottage\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"quinoa\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Quinoa</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Quinoa\" name=\"quinoa\" placeholder=\"grams\" [(ngModel)]=\"protein.quinoa\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"almonds\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Almonds</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Almonds\" name=\"almonds\" placeholder=\"grams\" [(ngModel)]=\"protein.almonds\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"powder\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Powder</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Powder\" name=\"powder\" placeholder=\"portions\" [(ngModel)]=\"protein.powder\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"gainer\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Gainer</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Gainer\" name=\"gainer\" placeholder=\"portions\" [(ngModel)]=\"protein.gainer\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"submit\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-1\"></div>\r\n            <input class=\"btn-secondary rounded-pill border far col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 button\"\r\n              type=\"button\" value=\"&#xf06e; Show\" (click)=\"show()\">\r\n\r\n            <input class=\"btn-secondary rounded-pill border far col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 button\"\r\n              [disabled]=\"!login\" type=\"submit\" value=\"&#xf0c7; Save\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"/assets/photos/body_building.jpg\" class=\"backgroundImage\">\r\n\r\n<div class=\"container\">\r\n\r\n    <h2 class=\"text-center\">Protein for healthy muscle and bone</h2>\r\n\r\n    <strong>proteins in the diet contribute significantly to the production of energy for the body.</strong>\r\n\r\n    <p>Dietary proteins provide amino acids as building blocks for growth, repair and maintenance of proteins in the\r\n        body. The body does not have a mechanism for storing amino acids or protein, unlike carbohydrates which can be\r\n        stored as glycogen and fats that can be stored as triacylglycerides.</p>\r\n\r\n    <p>When we have sufficient protein and an adequate supply of energy in our diet, the excess amino acids that are not\r\n        used for growth or repair are either converted to glucose in the liver or are used to provide energy. Without\r\n        enough supply of dietary energy from carbohydrates and fats, the body preferentially uses amino acids for energy\r\n        production at the expense of growth, maintenance and repair. This means that it is particularly important as we\r\n        get older to provide enough energy in the diet from carbohydrates and fats so that dietary protein can be used\r\n        for repair and maintenance.</p>\r\n\r\n    <p>Dietary protein is a key nutrient for muscle and bone health. Adequate dietary protein during childhood and\r\n        adolescent years is essential in order to accumulate an adequate bone and muscle mass during growth. For muscles\r\n        to grow, they need both protein and exercise, and the same is true also for bone. Dietary protein can also help\r\n        slow down the rate of bone and muscle loss that occurs as we get older. Low and high protein diets can affect\r\n        bone metabolism in different ways.</p>\r\n\r\n    <p>Skeletal muscle represents a pool of protein that can be called upon as a source of energy when food is scarce or\r\n        when the body is stressed such as after injury. A lack of protein in the diet will lead to poor muscle strength\r\n        which can increase the risk of falling, especially in the elderly and contributes to poor recovery in patients\r\n        who have had fractures. Low protein diets are also associated with decreased intestinal calcium absorption and\r\n        an increase in the levels of the key bone regulatory hormone parathyroid hormone.</p>\r\n\r\n    <p>High protein diets can increase calcium absorption and lead to an increased excretion of calcium in urine. High\r\n        protein diets are also linked to increased production of an important bone growth factor - insulin-like growth\r\n        factor 1. High protein diets are associated with an increased bone mineral content, a decrease in the risk of\r\n        fractures, and improved fracture repair and recovery after injury.</p>\r\n\r\n    <p>Muscle contains about 30% protein by weight. You might be surprised to learn that bone contains a higher\r\n        percentage of protein than muscle weight for weight. This is because, in muscle, the proteins are mainly found\r\n        inside the muscle cells, which contain a lot of water, while in bone, much of the protein is found outside of\r\n        cells in densely packed fibres that contain little water.</p>\r\n\r\n    <h4 class=\"text-center\">Summary - all people must to eat foot with protein.</h4>\r\n\r\n    <small>&copy; University of Liverpool/The University of Sheffield/Newcastle University</small>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n        <div class=\"fixed-top\">\r\n\r\n                <nav class=\"navbar \">\r\n\r\n                        <button routerLink=\"product/home\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-secondary \"><span class=\"fas fa-home\">\r\n                                </span>\r\n                                Home</button>\r\n\r\n                        <button routerLink=\"product/account\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-dark text-light \"><span\r\n                                        class=\"fas fa-user-circle\">\r\n                                </span>\r\n                                Account</button>\r\n\r\n                        <button routerLink=\"product/favorite\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-secondary \"><span\r\n                                        class=\"far fa-thumbs-up\"></span>\r\n                                Favorite</button>\r\n\r\n                        <button routerLink=\"product/info\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-dark text-light \"><span\r\n                                        class=\"fas fa-question-circle\"></span>\r\n                                Info</button>\r\n\r\n                        <!-- <button class=\"btn btn-outline-light col-2\"><span class=\"fas fa-toggle-on\"></span> Hebrew</button> -->\r\n                        <!-- <button class=\"btn btn-outline-light col-2\"><span class=\"fas fa-toggle-off\"></span> English</button> -->\r\n\r\n                </nav>\r\n\r\n                <header>\r\n                        <div class=\"row\">\r\n                                <img src=\"/assets/photos/bodybuilding_weightlifting.jpg\"\r\n                                        class=\"backgroundImage col-6 smartphone\">\r\n                                <img src=\"/assets/photos/sport_girl_fitness.jpg\"\r\n                                        class=\"backgroundImage col-6 smartphone\">\r\n                        </div>\r\n                </header>\r\n\r\n        </div>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n        <footer class=\"m-1 text-light bg-dark text-center\">\r\n                <small>&copy; Created by - Lichay Tiram -</small>\r\n        </footer>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");







const routes = [
    {
        path: 'product', children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"] },
            { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
            { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"] }
        ]
    },
    { path: '**', redirectTo: 'product/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProteinNutrition';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _storeRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeRouter */ "./src/app/storeRouter/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_15__["FavoriteComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot({
                routerState: 1 /* Minimal */,
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_storeRouter__WEBPACK_IMPORTED_MODULE_8__["reducer"], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                },
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('products', _store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            // Only a tool for developers will delete on products
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
            }),
        ],
        providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _storeRouter__WEBPACK_IMPORTED_MODULE_8__["CustomSerializer"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/*!*************************************************!*\
  !*** ./src/app/favorite/favorite.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoriteComponent = class FavoriteComponent {
    constructor() { }
    ngOnInit() {
    }
};
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite/favorite.component.css")).default]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    color: oldlace;\r\n    width: 70px;\r\n}\r\n\r\nsmall {\r\n    left: 30px;\r\n}\r\n\r\nh1, h2 {\r\n    color: white;\r\n}\r\n\r\nselect {\r\n    outline:0;\r\n    /* -webkit-appearance: initial; */\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n}\r\n\r\nselect:focus {\r\n    color: white;\r\n    background-color: rgb(34, 34, 32);\r\n}\r\n\r\ninput:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\ninput:hover {\r\n    background-color: inherit;\r\n    color: white;\r\n}\r\n\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::-moz-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n.space {\r\n    width: 70px;\r\n}\r\n\r\n.button {\r\n    right: 3%;\r\n    max-width: 160px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFIQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBSEE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUhBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGNvbG9yOiBvbGRsYWNlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBvdXRsaW5lOjA7XHJcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IGluaXRpYWw7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiKDE0NSwgMTQwLCAxNDUpO1xyXG59XHJcblxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzIpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDEsIDIzMiwgMC43ODgpO1xyXG59XHJcblxyXG5pbnB1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/protein.model */ "./src/app/shared/models/protein.model.ts");
/* harmony import */ var _store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/egg.model */ "./src/app/shared/models/egg.model.ts");






let HomeComponent = class HomeComponent {
    constructor(store) {
        this.store = store;
        this.clearInterval = [];
    }
    ngOnInit() {
        this.protein = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_2__["Protein"](0, new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_5__["Egg"]());
        if (!!localStorage.getItem("acccept")) {
            this.acccept = true;
            this.visibility();
        }
    }
    ngOnDestroy() {
        this.clearInterval.forEach(id => clearInterval(id));
    }
    isAcccept() {
        this.acccept = true;
        this.visibility();
        localStorage.setItem('acccept', "true");
    }
    submit() {
        this.protein.id += 1;
        const protein = Object.assign({}, this.protein);
        this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["AddProteinSuccess"])({ protein: protein }));
    }
    show() {
        const _a = this.protein, { id, egg } = _a, protein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id", "egg"]);
        this.calculateProtein(protein, egg);
    }
    calculateProtein(protein, egg) {
        let sum = 0;
        if (egg.amount && egg.sizeEgg) {
            if (egg.sizeEgg === 'S')
                sum += egg.amount * 6.029;
            else
                egg.sizeEgg === 'M' ? sum += egg.amount * 7.285 : sum += egg.amount * 8.541;
        }
        protein.bread *= 3.24;
        protein.tuna /= 3.571428571428571;
        protein.meat /= 3.225806451612903;
        protein.cheese /= 10.52631578947368;
        protein.cottage /= 9.090909090909091;
        protein.quinoa /= 7.575757575757576;
        protein.almonds *= 6.154;
        protein.powder *= 25;
        protein.gainer *= 22;
        Object.values(protein).forEach(value => value ? sum += value : sum += 0);
        alert(`You eat ${sum} protein approximately`);
    }
    visibility() {
        let timeToShow = 100;
        const _a = this.protein, { id } = _a, protein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id"]);
        Object.keys(protein).forEach(key => {
            this.clearInterval.push(setTimeout(() => this.visibilityOn(key), timeToShow));
            timeToShow += 250;
        });
        this.clearInterval.push(setTimeout(() => this.visibilityOn("submit"), timeToShow));
    }
    visibilityOn(name) {
        document.getElementById(name).className = "visibility: visible";
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2, h4, p, strong, small {\r\n    color: oldlace;\r\n}\r\n\r\n.backgroundImage {\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 67%;\r\n    top: 260px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLCBoNCwgcCwgc3Ryb25nLCBzbWFsbCB7XHJcbiAgICBjb2xvcjogb2xkbGFjZTtcclxufVxyXG5cclxuLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NyU7XHJcbiAgICB0b3A6IDI2MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backgroundImage {\r\n    opacity: 0.9;\r\n    position: relative;\r\n    padding: 0;\r\n    z-index: -2;\r\n    left: 15px;\r\n    max-height: 210px;\r\n    min-height: 165px;\r\n}\r\n\r\n@media (max-width: 420px) {\r\n    .smartphone {\r\n        max-height: 15px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kSW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTY1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnNtYXJ0cGhvbmUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/models/egg.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/egg.model.ts ***!
  \********************************************/
/*! exports provided: Egg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Egg", function() { return Egg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Egg {
    constructor(amount, sizeEgg) {
        this.amount = amount;
        this.sizeEgg = sizeEgg;
    }
}


/***/ }),

/***/ "./src/app/shared/models/protein.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/protein.model.ts ***!
  \************************************************/
/*! exports provided: Protein */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protein", function() { return Protein; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Protein {
    constructor(id, egg, bread, tuna, meat, cheese, cottage, quinoa, almonds, powder, gainer) {
        this.id = id;
        this.egg = egg;
        this.bread = bread;
        this.tuna = tuna;
        this.meat = meat;
        this.cheese = cheese;
        this.cottage = cottage;
        this.quinoa = quinoa;
        this.almonds = almonds;
        this.powder = powder;
        this.gainer = gainer;
    }
}


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _protein_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["LoadProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["LoadProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["LoadProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["AddProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["AddProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["AddProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinSuccess"]; });





/***/ }),

/***/ "./src/app/store/actions/protein.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/protein.action.ts ***!
  \*************************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return LoadProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return LoadProteinsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return LoadProteinsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return AddProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return AddProteinFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return AddProteinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return DeleteProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return DeleteProteinFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return DeleteProteinSuccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const LoadProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins');
const LoadProteinsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadProteinsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, reducers, getProductsState, getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getSelectedProtein */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["AddProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["AddProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["AddProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinSuccess"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getProductsState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedProtein"]; });







/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, getProductsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsState", function() { return getProductsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _protein_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein.reducer */ "./src/app/store/reducers/protein.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



;
const reducers = {
    protein: _protein_reducer__WEBPACK_IMPORTED_MODULE_1__["proteinReducer"]
};
const getProductsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])("products");


/***/ }),

/***/ "./src/app/store/reducers/protein.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/protein.reducer.ts ***!
  \***************************************************/
/*! exports provided: adapter, initialState, proteinReducer, getAllProteins, getProteinsEntities, getProteinLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proteinReducer", function() { return proteinReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return getAllProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return getProteinsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return getProteinLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");




const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    loaded: false
});
const proteinReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["LoadProteins"], state => {
    return Object.assign({}, state, { loaded: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["AddProteinSuccess"], (state, action) => {
    const { protein } = action;
    return adapter.addOne(protein, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProteinSuccess"], (state, action) => {
    const { proteinId } = action;
    return adapter.removeOne(proteinId, state);
}));
const { selectEntities, selectAll } = adapter.getSelectors();
const getAllProteins = selectAll;
const getProteinsEntities = selectEntities;
const getProteinLoaded = (state) => state.loaded;


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getSelectedProtein */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _protein_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein.selectors */ "./src/app/store/selectors/protein.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_1__["getProteinState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_1__["getProteinLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_1__["getProteinsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_1__["getSelectedProtein"]; });





/***/ }),

/***/ "./src/app/store/selectors/protein.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/store/selectors/protein.selectors.ts ***!
  \******************************************************/
/*! exports provided: getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getSelectedProtein */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return getProteinState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return getAllProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return getProteinLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return getProteinsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return getSelectedProtein; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/protein.reducer */ "./src/app/store/reducers/protein.reducer.ts");
/* harmony import */ var src_app_storeRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storeRouter */ "./src/app/storeRouter/index.ts");





const getProteinState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getProductsState"], (proteinState) => proteinState.protein);
const getAllProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_3__["getAllProteins"]);
const getProteinLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_3__["getProteinLoaded"]);
const getProteinsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_3__["getProteinsEntities"]);
const getSelectedProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProteinsEntities, src_app_storeRouter__WEBPACK_IMPORTED_MODULE_4__["getRouterState"], (entities, router) => router.state && entities[parseInt(router.state.params.proteinId)]);


/***/ }),

/***/ "./src/app/storeRouter/index.ts":
/*!**************************************!*\
  !*** ./src/app/storeRouter/index.ts ***!
  \**************************************/
/*! exports provided: reducer, getRouterState, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/storeRouter/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getRouterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["CustomSerializer"]; });





/***/ }),

/***/ "./src/app/storeRouter/reducers/index.ts":
/*!***********************************************!*\
  !*** ./src/app/storeRouter/reducers/index.ts ***!
  \***********************************************/
/*! exports provided: reducer, getRouterState, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



const reducer = {
    routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])("routerReducer");
class CustomSerializer {
    serialize(routerState) {
        let state = routerState.root;
        while (state.firstChild)
            state = state.firstChild;
        const { url } = routerState;
        const { params } = state;
        const { queryParams } = routerState.root;
        return { url, params, queryParams };
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Lichay\gitStudio\AngularRepo\Projects\ProteinNutrition\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map