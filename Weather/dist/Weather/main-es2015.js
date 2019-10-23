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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <link rel=\"stylesheet\" href=\"https://kit-free.fontawesome.com/releases/latest/css/free.min.css\" media=\"all\">\n    <script src=\"https://use.fontawesome.com/c5b6b20517.js\"></script>\n  </div>\n\n<div style=\"text-align: center\">\n\n  <h1 style=\"color: cornflowerblue\">{{title}} web</h1>\n\n</div>\n<nav style=\"text-align: center\">\n  <button routerLink=\"/home\" routerLinkActive=\"active\">Home</button> |\n  <button routerLink=\"/favorite\" routerLinkActive=\"active\">Favorite</button>\n</nav>\n\n<br>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\n    <h2 *ngFor=\"let weather of weathers\">\n        Country: {{weather.country}}\n        Temperature: {{weather.temperature}}\n        <span *ngIf=\"isCelsius\" style=\"color: blue;\">&#8451;</span>\n        <span *ngIf=\"!isCelsius\" style=\"color: blue;\">&#8457;</span>\n        Temperature mood: {{weather.temperatureMood}}\n    </h2>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <div style=\"text-align: center;margin: 5px;\">\n        <input type=\"text\" placeholder=\"Enter a country\" [(ngModel)]=\"country\"><br>\n        <button *ngIf=\"country\" (click)=\"findKey()\">Submit</button>\n        <button (click)=\"switch()\">Switch\n\n            <span *ngIf=\"isCelsius\">\n                <span style=\"color: blue;font-weight: bold;\">&#8451;</span>\n                /\n                <span style=\"color: red;\">&#8457;</span>\n            </span>\n\n            <span *ngIf=\"!isCelsius\">\n                <span style=\"color: red;\">&#8451;</span>\n                /\n                <span style=\"color: blue;font-weight: bold;\">&#8457;</span>\n            </span>\n\n        </button>\n    </div>\n\n    <div class=\"card\">\n\n        <div class=\"container\">\n            <h2>Country: {{weather.country}}</h2>\n            <h2>Temperature: {{weather.temperature}}\n                <span *ngIf=\"isCelsius\" style=\"color: blue;\">&#8451;</span>\n                <span *ngIf=\"!isCelsius\" style=\"color: blue;\">&#8457;</span>\n            </h2>\n\n        </div>\n\n        <div>\n            <button *ngIf=\"!isFavoriteExists()\" (click)=\"save()\" class=\"far fa-heart favorite fa-5x\"></button>\n            <button *ngIf=\"isFavoriteExists()\" (click)=\"save()\" class=\"fas fa-heart favorite fa-5x\"></button>\n        </div>\n\n        <div class=\"container inner\" style=\" box-shadow: none\">\n\n            <h2>Week days</h2>\n\n            <div *ngIf=\"weatherFiveDays\">\n\n                <div style=\"margin: 0 auto;\">\n\n                    <h3 class=\"box \" *ngFor=\"let weatherFiveDays of weatherFiveDays\">\n                        Day: {{weatherFiveDays.day}} <br>\n                        Temperature: {{weatherFiveDays.temperature}}\n                        <span *ngIf=\"isCelsius\" style=\"color: blue;\">&#8451;</span>\n                        <span *ngIf=\"!isCelsius\" style=\"color: blue;\">&#8457;</span>\n                        <br>\n                        Temperature mood: {{weatherFiveDays.temperatureMood}}\n                    </h3>\n\n                    <img class=\"image\" src=\"assets\\weather_og.png\">\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>");

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





const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
        this.title = 'Weather';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__["FavoriteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    border-style: solid;\n    height: 80%;\n    width: 80%;\n    -webkit-padding-after: 25%;\n            padding-block-end: 25%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    flex-direction: row;\n    flex: 1 auto;\n}\n\nh2 {\n    text-align: center;\n    box-shadow: 3px 3px 3px 3px #A3B1B6;\n    border-style: solid;\n    height: auto;\n    width: 20%;\n}\n\nh2:hover {\n    box-shadow: 3px 3px 3px 3px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLDBCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctYmxvY2stZW5kOiAyNSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxIGF1dG87XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNBM0IxQjY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuaDI6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDNweCBibGFjaztcbn0iXX0= */");

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
/* harmony import */ var _shared_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/country.service */ "./src/app/shared/services/country.service.ts");



let FavoriteComponent = class FavoriteComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.apikey = "KpQgHJYTBKfTjAPSNJpH1mY2onFsXn6G";
        this.weathers = [];
        this.isCelsius = null;
    }
    ngOnInit() {
        this.isCelsius = JSON.parse(sessionStorage.getItem("isCelsius"));
        let length = localStorage.length;
        // Find the temperature
        for (let index = 0; index < length; index++) {
            let key = localStorage.key(index);
            let weather = JSON.parse(localStorage.getItem(key));
            this.findTemperature(weather);
        }
    }
    findTemperature(weather) {
        this.countryService.getTemperatureByKey(this.apikey, weather.key).subscribe(res => {
            weather.temperature = res[0].Temperature.Metric.Value;
            if (this.isCelsius)
                weather.temperature = res[0].Temperature.Metric.Value;
            else
                weather.temperature = res[0].Temperature.Imperial.Value;
            weather.temperatureMood = res[0].WeatherText;
            this.weathers.push(weather);
        }, err => alert(err.error.Message));
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: _shared_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    border-style: solid;\n    height: 80%;\n    width: 80%;\n    -webkit-padding-after: 25%;\n            padding-block-end: 25%;\n    margin: 0 auto;\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    flex: 1 auto;\n}\n\n.container {\n    text-align: center;\n    box-shadow: 3px 3px 3px 3px #A3B1B6;\n    border-style: solid;\n    height: auto;\n    width: 50%;\n}\n\n.box {\n    text-align: center;\n    border-style: solid;\n    margin: 1px;\n    -webkit-padding-after: 1%;\n            padding-block-end: 1%;\n    border-radius: 10px;\n}\n\n.inner {\n    border: inherit;\n    flex: auto;\n    flex-direction: row;\n}\n\n.container:hover {\n    box-shadow: 3px 3px 3px 3px black;\n}\n\n.box:hover {\n    background: #96F0FE;\n}\n\n.favorite {\n    color: red;\n    padding: 0;\n    border: none;\n    background: none;\n}\n\n.image {\n    border: 2px solid black;\n    padding: 2px;\n    width: 98%;\n    height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViwwQkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDI1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleDogMSBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4ICNBM0IxQjY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJveCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDElO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbm5lciB7XG4gICAgYm9yZGVyOiBpbmhlcml0O1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggM3B4IGJsYWNrO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTZGMEZFO1xufVxuXG4uZmF2b3JpdGUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmltYWdlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufSJdfQ== */");

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
/* harmony import */ var _shared_models_Weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/Weather */ "./src/app/shared/models/Weather.ts");
/* harmony import */ var _shared_services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/country.service */ "./src/app/shared/services/country.service.ts");




let HomeComponent = class HomeComponent {
    constructor(countryService) {
        this.countryService = countryService;
        this.apikey = "KpQgHJYTBKfTjAPSNJpH1mY2onFsXn6G";
        this.country = null;
        this.isCelsius = null;
        // Objects
        this.weather = new _shared_models_Weather__WEBPACK_IMPORTED_MODULE_2__["Weather"]("215854", "Tel Aviv");
        this.weatherFiveDays = null;
    }
    ngOnInit() {
        this.isCelsius = JSON.parse(sessionStorage.getItem("isCelsius"));
        this.findTemperature();
        this.findTemperatureForFiveDays();
    }
    findKey() {
        var regex = /\d/g;
        // Check if allowed to find a key
        if (regex.test(this.country)) {
            alert("Searching should be done in English letters only");
        }
        else {
            this.countryService.getKeyByCountry(this.apikey, this.country).subscribe(res => {
                if (res[0] == null)
                    return;
                this.weather = new _shared_models_Weather__WEBPACK_IMPORTED_MODULE_2__["Weather"](res[0].Key, res[0].LocalizedName);
                this.findTemperature();
                this.findTemperatureForFiveDays();
            }, err => alert(err.error.Message));
        }
    }
    findTemperature() {
        this.countryService.getTemperatureByKey(this.apikey, this.weather.key).subscribe(res => {
            if (this.isCelsius)
                this.weather.temperature = res[0].Temperature.Metric.Value;
            else
                this.weather.temperature = res[0].Temperature.Imperial.Value;
            this.weather.temperatureMood = res[0].WeatherText;
        }, err => alert(err.error.Message));
    }
    findTemperatureForFiveDays() {
        this.countryService.getTemperatureForFiveDaysByKey(this.apikey, this.weather.key).subscribe(res => {
            let weather = [];
            for (let index = 0; index < 5; index++) {
                let key = this.weather.key;
                let country = this.weather.country;
                let temperature = res.DailyForecasts[index].Temperature.Minimum.Value;
                let temperatureMood = res.DailyForecasts[index].Day.IconPhrase;
                let date = new Date(res.DailyForecasts[index].Date);
                let day = this.getDay(date);
                // Conver from fahrenheit to celsius
                if (this.isCelsius)
                    temperature = parseFloat(((temperature - 32) * 5 / 9).toFixed(1));
                weather[index] = new _shared_models_Weather__WEBPACK_IMPORTED_MODULE_2__["Weather"](key, country, temperature, temperatureMood, day);
            }
            this.weatherFiveDays = weather;
        }, err => alert(err.error.Message));
    }
    save() {
        let weather = new _shared_models_Weather__WEBPACK_IMPORTED_MODULE_2__["Weather"](this.weather.key, this.weather.country);
        if (localStorage.getItem(weather.country))
            localStorage.removeItem(weather.country);
        else
            localStorage.setItem(weather.country, JSON.stringify(weather));
    }
    isFavoriteExists() {
        if (localStorage.getItem(this.weather.country) != null)
            return true;
        return false;
    }
    // Conver from celsius to fahrenheit && fahrenheit to celsius (by this.isCelsius' value )
    switch() {
        if (this.weather && this.weatherFiveDays) {
            let newTemperature;
            this.isCelsius = !this.isCelsius;
            newTemperature = parseFloat((this.isCelsius ? ((this.weather.temperature - 32) * 5 / 9).toFixed(1) : (this.weather.temperature * 9 / 5 + 32).toFixed(1)));
            this.weather.temperature = newTemperature;
            for (let weather of this.weatherFiveDays) {
                newTemperature = parseFloat((this.isCelsius ? ((weather.temperature - 32) * 5 / 9).toFixed(1) : (weather.temperature * 9 / 5 + 32).toFixed(1)));
                weather.temperature = newTemperature;
            }
        }
        sessionStorage.setItem("isCelsius", JSON.stringify(this.isCelsius));
    }
    getDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let index = date.getDay();
        let day = days[index];
        return day;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/shared/models/Weather.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/Weather.ts ***!
  \******************************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Weather {
    constructor(key, country, temperature, temperatureMood, day) {
        this.key = key;
        this.country = country;
        this.temperature = temperature;
        this.temperatureMood = temperatureMood;
        this.day = day;
    }
}


/***/ }),

/***/ "./src/app/shared/services/country.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/country.service.ts ***!
  \****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CountryService = class CountryService {
    constructor(http) {
        this.http = http;
        sessionStorage.setItem("isCelsius", JSON.parse("true"));
    }
    getKeyByCountry(apiKey, country) {
        return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${country}`);
    }
    getTemperatureByKey(apiKey, key) {
        return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`);
    }
    getTemperatureForFiveDaysByKey(apiKey, key) {
        return this.http.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`);
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CountryService);



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

module.exports = __webpack_require__(/*! c:\Users\Lichay\gitStudio\AngularRepo\Weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map