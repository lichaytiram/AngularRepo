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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");



class AppComponent {
    constructor() {
        this.title = 'ProteinNutrition';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/modules/app-routing.module */ "./src/app/shared/modules/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _storeRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeRouter */ "./src/app/storeRouter/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
















// Only a tool for developers will delete on products
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from 'src/environments/environment';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _storeRouter__WEBPACK_IMPORTED_MODULE_8__["CustomSerializer"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot({
                routerState: 1 /* Minimal */,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_9__["effects"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_storeRouter__WEBPACK_IMPORTED_MODULE_8__["reducer"], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                },
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('products', _store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot({
                        routerState: 1 /* Minimal */,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_9__["effects"]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_storeRouter__WEBPACK_IMPORTED_MODULE_8__["reducer"], {
                        runtimeChecks: {
                            strictStateImmutability: false,
                            strictActionImmutability: false,
                            strictStateSerializability: false,
                            strictActionSerializability: false,
                        },
                    }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('products', _store__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                ],
                providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _storeRouter__WEBPACK_IMPORTED_MODULE_8__["CustomSerializer"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class NavbarComponent {
    constructor(store) {
        this.store = store;
        this.unSubscribe = [];
    }
    ngOnInit() {
        this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getPopup"])).subscribe(popupToggle => this.popupToggle = popupToggle, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(console.log(error)))));
    }
    ngOnDestroy() {
        this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());
    }
    login() {
        return !!sessionStorage.getItem('login') ? "" : "login";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 5, consts: [[1, "fixed-top"], [1, "navbar"], ["routerLink", "product/home", "routerLinkActive", "is-active", 1, "btn", "btn-outline-light", "col-6", "col-sm-3", "bg-secondary"], [1, "fas", "fa-home"], ["routerLinkActive", "is-active", 1, "btn", "btn-outline-light", "col-6", "col-sm-3", "bg-dark", "text-light", 3, "routerLink"], [1, "fas", "fa-user-circle"], ["routerLink", "product/account/favorite", "routerLinkActive", "is-active", 1, "btn", "btn-outline-light", "col-6", "col-sm-3", "bg-secondary"], [1, "far", "fa-thumbs-up"], ["routerLink", "product/info", "routerLinkActive", "is-active", 1, "btn", "btn-outline-light", "col-6", "col-sm-3", "bg-dark", "text-light"], [1, "fas", "fa-question-circle"], [1, "row"], [1, "p-0", "m-0", "col-1", "sideImage"], ["src", "/assets/photos/bodybuilding_weightlifting.jpg", 1, "backgroundImage", "col-5", "smartphone"], ["src", "/assets/photos/sport_girl_fitness.jpg", 1, "backgroundImage", "col-4", "smartphone"], ["src", "/assets/photos/sport_girl_fitness_right.jpg", 1, "backgroundImage", "col-1", "smartphone"], [1, "text-light", "bg-dark", "text-center"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A9 Created by - Lichay Tiram -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity", ctx.popupToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/account/", ctx.login(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity", ctx.popupToggle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".backgroundImage[_ngcontent-%COMP%] {\r\n    opacity: 0.9;\r\n    position: relative;\r\n    padding: 0;\r\n    top: 0;\r\n    z-index: -2;\r\n    height: 170px;\r\n}\r\n\r\n.sideImage[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(to top, rgb(5, 5, 5), rgb(48, 47, 47));\r\n}\r\n\r\n.opacity[_ngcontent-%COMP%] {\r\n    opacity: 0.3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .smartphone[_ngcontent-%COMP%] {\r\n        height: 90px;\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .smartphone[_ngcontent-%COMP%] {\r\n        height: 60px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG59XHJcblxyXG4uc2lkZUltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYig1LCA1LCA1KSwgcmdiKDQ4LCA0NywgNDcpKTtcclxufVxyXG5cclxuLm9wYWNpdHkge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnNtYXJ0cGhvbmUge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0MjBweCkge1xyXG4gICAgLnNtYXJ0cGhvbmUge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/modules/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: 'product', loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/shared/modules/product/product.module.ts")).then(m => m.ProductModule) },
    { path: '**', redirectTo: 'product/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/protein.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/protein.service.ts ***!
  \****************************************************/
/*! exports provided: ProteinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinService", function() { return ProteinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProteinService {
    constructor(http) {
        this.http = http;
        this.URL = "https://protein-757b1.firebaseio.com/proteins/";
        this.endURL = ".json";
    }
    createProtein(userId, protein) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.post(url, protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    // Firebase database request, don't have any straight way (api)
    getProteins(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            let proteins = [];
            Object.entries(result).map(value => {
                value[1].id = value[0];
                proteins.push(value[1]);
            });
            return proteins;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    updateProtein(userId, protein) {
        const { id } = protein, proteinToUpdate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(protein, ["id"]);
        const url = `${this.URL}/${userId}/${id}${this.endURL}`;
        return this.http.put(url, proteinToUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    deleteProtein(userId, proteinId) {
        const url = `${this.URL}/${userId}/${proteinId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    deleteAllProteins(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
}
ProteinService.ɵfac = function ProteinService_Factory(t) { return new (t || ProteinService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProteinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProteinService, factory: ProteinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProteinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class UserService {
    constructor(http) {
        this.http = http;
        this.URL = "https://protein-757b1.firebaseio.com/users";
        this.endURL = ".json";
    }
    createUser(user) {
        const url = this.URL + this.endURL;
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    getAllUsers() {
        const url = this.URL + this.endURL;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    // Firebase database request, don't have any straight way (api)
    login(login) {
        const url = this.URL + this.endURL;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            let register = null;
            Object.entries(result).some(value => {
                if (value[1].username === login.username && value[1].password === login.password) {
                    value[1].id = value[0];
                    register = value[1];
                    return true;
                }
                ;
            });
            return register;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    getUser(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    updateUser(user) {
        const { id } = user, userToUpdate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(user, ["id"]);
        const url = `${this.URL}/${id}${this.endURL}`;
        return this.http.put(url, userToUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    deleteUser(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout, ProteinSavedOff, CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff, UserCreatedOff, UserLoginFailOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _protein_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["LoadProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["LoadProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["LoadProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["AddProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["AddProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["AddProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["UpdateProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["UpdateProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["UpdateProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteins", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinLogout", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["ProteinLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinSavedOff", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_0__["ProteinSavedOff"]; });

/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.action */ "./src/app/store/actions/user.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["CreateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["CreateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoadUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoginUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["LoginUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UpdateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["DeleteUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["DeleteUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdated", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOn", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserPopupOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOff", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserPopupOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCreatedOff", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserCreatedOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLoginFailOff", function() { return _user_action__WEBPACK_IMPORTED_MODULE_1__["UserLoginFailOff"]; });





/***/ }),

/***/ "./src/app/store/actions/protein.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/protein.action.ts ***!
  \*************************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout, ProteinSavedOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return LoadProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return LoadProteinsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return LoadProteinsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return AddProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return AddProteinFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return AddProteinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProtein", function() { return UpdateProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinFail", function() { return UpdateProteinFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinSuccess", function() { return UpdateProteinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return DeleteProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return DeleteProteinFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return DeleteProteinSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteins", function() { return DeleteAllProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsFail", function() { return DeleteAllProteinsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsSuccess", function() { return DeleteAllProteinsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinLogout", function() { return ProteinLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinSavedOff", function() { return ProteinSavedOff; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const LoadProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load Proteins', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadProteinsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load Proteins Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadProteinsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load Proteins Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AddProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Add Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AddProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Add Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AddProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Add Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteAllProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete All Proteins', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteAllProteinsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete All Proteins Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteAllProteinsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete All Proteins Success');
const ProteinLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Protein Logout');
const ProteinSavedOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Protein Saved Off');


/***/ }),

/***/ "./src/app/store/actions/user.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/user.action.ts ***!
  \**********************************************/
/*! exports provided: CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff, UserCreatedOff, UserLoginFailOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return CreateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return CreateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return LoadUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return LoadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserFail", function() { return LoginUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserSuccess", function() { return LoginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return UpdateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return UpdateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserFail", function() { return DeleteUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserSuccess", function() { return DeleteUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdated", function() { return UserUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return UserLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPopupOn", function() { return UserPopupOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPopupOff", function() { return UserPopupOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreatedOff", function() { return UserCreatedOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginFailOff", function() { return UserLoginFailOff; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const CreateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Create User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const CreateUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Create User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const CreateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Create User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoadUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Load User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Login User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoginUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Login User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const LoginUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Login User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const UpdateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Update User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const DeleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] Delete User Success');
const UserUpdated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Updated');
const UserLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Logout');
const UserPopupOn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Popup On');
const UserPopupOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Popup Off');
const UserCreatedOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Created Off');
const UserLoginFailOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Products] User Login Fail Off');


/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _protein_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein.effect */ "./src/app/store/effects/protein.effect.ts");


const effects = [_user_effects__WEBPACK_IMPORTED_MODULE_0__["UserEffects"], _protein_effect__WEBPACK_IMPORTED_MODULE_1__["ProteinEffect"]];


/***/ }),

/***/ "./src/app/store/effects/protein.effect.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/protein.effect.ts ***!
  \*************************************************/
/*! exports provided: ProteinEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinEffect", function() { return ProteinEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var src_app_shared_services_protein_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/protein.service */ "./src/app/shared/services/protein.service.ts");








class ProteinEffect {
    constructor(actions$, proteinService) {
        this.actions$ = actions$;
        this.proteinService = proteinService;
        this.loadProteins$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["LoadProteins"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.getProteins(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(proteins => _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["LoadProteinsSuccess"]({ proteins })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["LoadProteinsFail"](error)))))));
        this.createProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["AddProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.createProtein(action.userId, action.protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userId) => {
            const protein = action.protein;
            protein.id = userId.name;
            return _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["AddProteinSuccess"]({ protein });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["AddProteinFail"](error)))))));
        this.updateProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.updateProtein(action.userId, action.protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProteinSuccess"]({ protein: action.protein })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProteinFail"](error)))))));
        this.deleteProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.deleteProtein(action.userId, action.proteinId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteProteinSuccess"]({ proteinId: action.proteinId })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteProteinFail"](error)))))));
        this.deleteAllproteins$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteAllProteins"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.deleteAllProteins(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteAllProteinsSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteAllProteinsFail"](error)))))));
    }
}
ProteinEffect.ɵfac = function ProteinEffect_Factory(t) { return new (t || ProteinEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_protein_service__WEBPACK_IMPORTED_MODULE_5__["ProteinService"])); };
ProteinEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProteinEffect, factory: ProteinEffect.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProteinEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: src_app_shared_services_protein_service__WEBPACK_IMPORTED_MODULE_5__["ProteinService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/effects/user.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class UserEffects {
    constructor(actions$, userService, router) {
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        this.loadUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.userService.getUser(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            user.id = action.userId;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserSuccess"]({ user: user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoadUserFail"](error)))))));
        this.createUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.userService.createUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((userId) => {
            const { user } = action;
            user.id = userId.name;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserSuccess"]({ user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["CreateUserFail"](error)))))));
        this.loginUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.userService.login(action.login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            this.router.navigate(['product/account']);
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoginUserSuccess"]({ user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["LoginUserFail"](error)))))));
        this.updateUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.userService.updateUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            user.id = action.user.id;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserSuccess"]({ user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["UpdateUserFail"](error)))))));
        this.deleteUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_4__["DeleteUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(action => this.userService.deleteUser(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            this.router.navigate(["product/home"]);
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_4__["DeleteUserSuccess"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_5__["DeleteProteinFail"](error)))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout, ProteinSavedOff, CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff, UserCreatedOff, UserLoginFailOff, reducers, getProductsState, getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getProteinSaved, getSelectedProtein, getUserState, getUser, getUserCreated, getLoginFail, getUserLoaded, getUserUpdated, getPopup, effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteins", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProteinsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["AddProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["AddProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["AddProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteins", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteAllProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinLogout", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ProteinLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinSavedOff", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ProteinSavedOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoginUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeleteUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdated", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOn", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserPopupOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOff", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserPopupOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCreatedOff", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserCreatedOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLoginFailOff", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UserLoginFailOff"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getProductsState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getProteinState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getProteinLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getProteinsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinSaved", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getProteinSaved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserCreated", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getUserCreated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginFail", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getLoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getUserLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getUserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["getPopup"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"]; });







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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _protein_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein.reducer */ "./src/app/store/reducers/protein.reducer.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/reducers/user.reducer.ts");



;
const reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
    protein: _protein_reducer__WEBPACK_IMPORTED_MODULE_1__["proteinReducer"]
};
const getProductsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("products");


/***/ }),

/***/ "./src/app/store/reducers/protein.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/protein.reducer.ts ***!
  \***************************************************/
/*! exports provided: adapter, initialState, proteinReducer, getAllProteins, getProteinsEntities, getProteinLoaded, getProteinSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proteinReducer", function() { return proteinReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return getAllProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return getProteinsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return getProteinLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinSaved", function() { return getProteinSaved; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");




const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    loaded: false,
    saved: false
});
const proteinReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["LoadProteinsSuccess"], (state, action) => {
    const { proteins } = action;
    return Object.assign(Object.assign({}, adapter.addAll(proteins, state)), { loaded: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["ProteinLogout"], () => {
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["AddProteinSuccess"], (state, action) => {
    const { protein } = action;
    const newState = Object.assign(Object.assign({}, state), { saved: true });
    return adapter.addOne(protein, newState);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProteinSuccess"], (state, action) => {
    const { protein } = action;
    const { id } = protein, newProtein = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(protein, ["id"]);
    const changes = Object.assign({ id }, state.entities[id] = newProtein);
    const update = { id, changes };
    return adapter.updateOne(update, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProteinSuccess"], (state, action) => {
    const { proteinId } = action;
    return adapter.removeOne(proteinId, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteAllProteinsSuccess"], () => {
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["ProteinSavedOff"], state => {
    return Object.assign(Object.assign({}, state), { saved: false });
}));
const { selectEntities, selectAll } = adapter.getSelectors();
const getAllProteins = selectAll;
const getProteinsEntities = selectEntities;
const getProteinLoaded = (state) => state.loaded;
const getProteinSaved = (state) => state.saved;


/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, userReducer, getUser, getCreated, getLoginFail, getUserLoaded, getUserUpdated, getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreated", function() { return getCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginFail", function() { return getLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return getUserLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return getUserUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");


const initialState = {
    user: null,
    created: false,
    loginFail: false,
    loaded: false,
    updated: false,
    popup: false
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LoadUserSuccess"], (state, action) => {
    const { user } = action;
    return Object.assign(Object.assign({}, state), { loaded: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LoginUserFail"], (state) => {
    return Object.assign(Object.assign({}, state), { loginFail: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserLogout"], () => {
    sessionStorage.removeItem("login");
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserPopupOn"], (state) => {
    return Object.assign(Object.assign({}, state), { popup: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserPopupOff"], (state) => {
    return Object.assign(Object.assign({}, state), { popup: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["CreateUserSuccess"], (state) => {
    return Object.assign(Object.assign({}, state), { created: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserCreatedOff"], (state) => {
    return Object.assign(Object.assign({}, state), { created: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserLoginFailOff"], (state) => {
    return Object.assign(Object.assign({}, state), { loginFail: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["LoginUserSuccess"], (state, action) => {
    const { user } = action;
    sessionStorage.setItem("login", user.id);
    return Object.assign(Object.assign({}, state), { loaded: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UpdateUserSuccess"], (state, action) => {
    const { user } = action;
    return Object.assign(Object.assign({}, state), { updated: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["DeleteUserSuccess"], () => {
    sessionStorage.removeItem("login");
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["UserUpdated"], (state) => {
    return Object.assign(Object.assign({}, state), { updated: false });
}));
const getUser = (state) => state.user;
const getCreated = (state) => state.created;
const getLoginFail = (state) => state.loginFail;
const getUserLoaded = (state) => state.loaded;
const getUserUpdated = (state) => state.updated;
const getPopup = (state) => state.popup;


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getProteinSaved, getSelectedProtein, getUserState, getUser, getUserCreated, getLoginFail, getUserLoaded, getUserUpdated, getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _protein_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protein.selectors */ "./src/app/store/selectors/protein.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getProteinState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getProteinLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getProteinsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinSaved", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getProteinSaved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return _protein_selectors__WEBPACK_IMPORTED_MODULE_0__["getSelectedProtein"]; });

/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.selectors */ "./src/app/store/selectors/user.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserCreated", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getUserCreated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoginFail", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getLoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getUserLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getUserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getPopup"]; });





/***/ }),

/***/ "./src/app/store/selectors/protein.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/store/selectors/protein.selectors.ts ***!
  \******************************************************/
/*! exports provided: getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getProteinSaved, getSelectedProtein */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return getProteinState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return getAllProteins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return getProteinLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return getProteinsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProteinSaved", function() { return getProteinSaved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return getSelectedProtein; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/protein.reducer */ "./src/app/store/reducers/protein.reducer.ts");
/* harmony import */ var src_app_storeRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/storeRouter */ "./src/app/storeRouter/index.ts");




const getProteinState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["getProductsState"], (proteinState) => proteinState.protein);
const getAllProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_2__["getAllProteins"]);
const getProteinLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_2__["getProteinLoaded"]);
const getProteinsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_2__["getProteinsEntities"]);
const getProteinSaved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProteinState, _reducers_protein_reducer__WEBPACK_IMPORTED_MODULE_2__["getProteinSaved"]);
const getSelectedProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProteinsEntities, src_app_storeRouter__WEBPACK_IMPORTED_MODULE_3__["getRouterState"], (entities, router) => router.state && entities[parseInt(router.state.params.proteinId)]);


/***/ }),

/***/ "./src/app/store/selectors/user.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/user.selectors.ts ***!
  \***************************************************/
/*! exports provided: getUserState, getUser, getUserCreated, getLoginFail, getUserLoaded, getUserUpdated, getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCreated", function() { return getUserCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginFail", function() { return getLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return getUserLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return getUserUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");



const getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["getProductsState"], (userState) => userState.user);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
const getUserCreated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getCreated"]);
const getLoginFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getLoginFail"]);
const getUserLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUserLoaded"]);
const getUserUpdated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUserUpdated"]);
const getPopup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getPopup"]);


/***/ }),

/***/ "./src/app/storeRouter/index.ts":
/*!**************************************!*\
  !*** ./src/app/storeRouter/index.ts ***!
  \**************************************/
/*! exports provided: reducer, getRouterState, CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/storeRouter/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getRouterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["CustomSerializer"]; });




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
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const reducer = {
    routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
};
const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("routerReducer");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lichay\gitStudio\AngularRepo\Projects\ProteinNutrition\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map