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
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user$ | async as user\">\r\n\r\n    <div>\r\n\r\n        <button (click)=\"logout()\" class=\"text-primary m-1\"><i class=\"fas fa-sign-out-alt\"></i> Log\r\n            Out</button><br>\r\n        <button (click)=\"deleteAccount(user.id)\" class=\"text-danger m-1\"><i class=\"fas fa-minus-circle\"></i> Delete\r\n            Account</button>\r\n\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n\r\n        <div>\r\n\r\n            <h5 class=\"text-center\">Your user</h5>\r\n\r\n            <form #userForm=\"ngForm\" (ngSubmit)=\"updateUser(user,userForm)\">\r\n\r\n                <div class=\"row justify-content-center\">\r\n\r\n                    <label class=\"col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 p-0\">Username: </label>\r\n                    <span *ngIf=\"!editToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">{{user.username}}</span>\r\n                    <input *ngIf=\"editToggle && !usernameToggle\" type=\"button\" [disabled]=\"allowToEdit()\"\r\n                        value=\"&#xf4ff; Edit username\" (click)=\"nameToggle('username')\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas\">\r\n\r\n                    <div [class.d-none]=\"!editToggle || editToggle && !usernameToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <small class=\"text-danger\" [class.d-none]=\"username.untouched || username.valid\">\r\n                            Must to enter only three letters at least</small>\r\n\r\n                        <input type=\"text\" title=\"Enter an username\" placeholder=\"Enter an username\" name=\"username\"\r\n                            #username=\"ngModel\" [(ngModel)]=\"newUser.username\" required pattern=\"^[a-zA-Z]{3,}$\"\r\n                            [class.border-danger]=\"username.invalid && username.touched\"\r\n                            class=\"rounded-pill border border-primary text-center inputValue\">\r\n\r\n                        <div class=\"row justify-content-around p-1\">\r\n\r\n                            <input type=\"button\" value=\"&#xf410; Cancel\" (click)=\"cancelTogglesOff(username)\"\r\n                                class=\"far text-danger\">\r\n                            <input type=\"submit\" value=\"&#xf0c7; Save\" [disabled]=\"username.invalid || updateToggle\"\r\n                                class=\"btn far text-primary\">\r\n                            <i *ngIf=\"updateToggle && usernameToggle\" class=\"fas fa-check text-success\"></i>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row justify-content-center\">\r\n\r\n                    <label class=\"col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 p-0\">Password: </label>\r\n\r\n                    <div *ngIf=\"!editToggle\" class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <span *ngIf=\"!showPasswordToggle\" class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n                            <span>******** </span>\r\n                            <button (click)=\"showPasswordSwitch()\"><i class=\"fas fa-eye eye\"></i></button>\r\n                        </span>\r\n                        <span *ngIf=\"showPasswordToggle\" class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n                            <span>{{user.password}} </span>\r\n                            <button (click)=\"showPasswordSwitch()\"><i class=\"fas fa-eye-slash eye\"></i></button>\r\n                        </span>\r\n\r\n                    </div>\r\n\r\n                    <input *ngIf=\"editToggle && !passwordToggle\" type=\"button\" [disabled]=\"allowToEdit()\"\r\n                        value=\"&#xf4ff; Edit password\" (click)=\"nameToggle('password')\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas\">\r\n\r\n                    <div [class.d-none]=\"!editToggle || editToggle && !passwordToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <div class=\"text-danger\" [class.d-none]=\"password.untouched || password.valid\">\r\n                            <small>Must to enter eight letters at least.</small>\r\n                            <small>(one upper case one lower case and a number)</small>\r\n                        </div>\r\n\r\n                        <input type=\"password\" title=\"Enter a password\" placeholder=\"Enter a password\" name=\"password\"\r\n                            #password=\"ngModel\" [(ngModel)]=\"newUser.password\" required\r\n                            pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\"\r\n                            [class.border-danger]=\"password.invalid && password.touched\"\r\n                            class=\"rounded-pill border border-primary text-center inputValue\">\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row justify-content-center\" [class.d-none]=\"!editToggle || editToggle && !passwordToggle\">\r\n\r\n                    <label class=\"col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 p-0\">Confirm: </label>\r\n                    <span *ngIf=\"!editToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">{{user.confirmPassword}}</span>\r\n                    <span *ngIf=\"editToggle && !passwordToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\"></span>\r\n\r\n                    <div [class.d-none]=\"!editToggle || editToggle && !passwordToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <div class=\"text-danger\"\r\n                            [class.d-none]=\"confirmPassword.untouched || confirmPassword.valid && confirmPassword.value===password.value\">\r\n                            <small>Your passwords isn't match!</small>\r\n                            <small>Please try again.</small>\r\n                        </div>\r\n\r\n                        <input type=\"password\" title=\"Enter again a password to confirm\" placeholder=\"Enter a password\"\r\n                            name=\"confirmPassword\" #confirmPassword=\"ngModel\" [(ngModel)]=\"newUser.confirmPassword\"\r\n                            required pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\"\r\n                            [disabled]=\"password.invalid\"\r\n                            [class.border-danger]=\"(confirmPassword.touched && confirmPassword.value!==password.value)\"\r\n                            class=\"rounded-pill border border-primary text-center inputValue\">\r\n\r\n                        <div class=\"row justify-content-around p-1\">\r\n\r\n                            <input type=\"button\" value=\"&#xf410; Cancel\"\r\n                                (click)=\"cancelTogglesOff(password,confirmPassword)\" class=\"far text-danger\">\r\n                            <input type=\"submit\" value=\"&#xf0c7; Save\"\r\n                                [disabled]=\"confirmPassword.value!==password.value || password.invalid || updateToggle\"\r\n                                class=\"btn far text-primary\">\r\n                            <i *ngIf=\"updateToggle && passwordToggle\" class=\"fas fa-check text-success\"></i>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row justify-content-center\">\r\n\r\n                    <label class=\"col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 p-0\">Gender: </label>\r\n                    <span *ngIf=\"!editToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">{{user.gender}}</span>\r\n                    <input *ngIf=\"editToggle && !genderToggle\" type=\"button\" [disabled]=\"allowToEdit()\"\r\n                        value=\"&#xf4ff; Edit gender\" (click)=\"nameToggle('gender')\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas\">\r\n\r\n                    <div [class.d-none]=\"!editToggle || editToggle && !genderToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <label>\r\n                            <input type=\"radio\" name=\"male\" #male=\"ngModel\" value=\"Male\" required\r\n                                [(ngModel)]=\"newUser.gender\">\r\n                            <span class=\"rounded-pill text-center m-1 radioMale\"><i class=\"fas fa-male m-1\"></i></span>\r\n                        </label>\r\n\r\n                        <label>\r\n                            <input type=\"radio\" name=\"female\" #female=\"ngModel\" value=\"Female\" required\r\n                                [(ngModel)]=\"newUser.gender\">\r\n                            <span class=\"rounded-pill text-center m-1 radioFemale\"><i\r\n                                    class=\"fas fa-female m-1\"></i></span>\r\n                        </label>\r\n\r\n                        <div class=\"row justify-content-around p-1\">\r\n\r\n                            <input type=\"button\" value=\"&#xf410; Cancel\" (click)=\"cancelTogglesOff()\"\r\n                                class=\"far text-danger\">\r\n                            <input type=\"submit\" value=\"&#xf0c7; Save\"\r\n                                [disabled]=\"male.invalid && female.invalid || updateToggle\"\r\n                                class=\"btn far text-primary\">\r\n                            <i *ngIf=\"updateToggle && genderToggle\" class=\"fas fa-check text-success\"></i>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row justify-content-center\">\r\n\r\n                    <label class=\"col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 p-0\">Weight: </label>\r\n                    <span *ngIf=\"!editToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">{{user.weight}}</span>\r\n                    <input *ngIf=\"editToggle && !weightToggle\" type=\"button\" [disabled]=\"allowToEdit()\"\r\n                        value=\"&#xf4ff; Edit weight\" (click)=\"nameToggle('weight')\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas\">\r\n\r\n                    <div [class.d-none]=\"!editToggle || editToggle && !weightToggle\"\r\n                        class=\"col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0\">\r\n\r\n                        <small class=\"text-danger\" [class.d-none]=\"weight.untouched || weight.valid\">Your weight\r\n                            must be greater than zero .</small>\r\n\r\n                        <input type=\"number\" title=\"Enter your weight\" placeholder=\"Enter a weight\" name=\"weight\"\r\n                            #weight=\"ngModel\" [(ngModel)]=\"newUser.weight\" required pattern=\"^[1-9]\\d*$\"\r\n                            [class.border-danger]=\"weight.invalid && weight.touched\"\r\n                            class=\"rounded-pill border border-primary text-center inputValue\">\r\n\r\n                        <div class=\"row justify-content-around p-1\">\r\n\r\n                            <input type=\"button\" value=\"&#xf410; Cancel\" (click)=\"cancelTogglesOff(weight)\"\r\n                                class=\"far text-danger\">\r\n                            <input type=\"submit\" value=\"&#xf0c7; Save\" [disabled]=\"weight.invalid || updateToggle\"\r\n                                class=\"btn far text-primary\">\r\n                            <i *ngIf=\"updateToggle && weightToggle\" class=\"fas fa-check text-success\"></i>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n        <div class=\"text-center\">\r\n            <input type=\"button\" value=\"&#xf4ff; Edit account\" [class.d-none]=\"editToggle\" (click)=\"editToggleOn()\"\r\n                class=\"fas text-primary\">\r\n            <input type=\"button\" value=\"&#xf410; Cancel edit\"\r\n                [class.d-none]=\"!editToggle || editToggle && allowToEdit()\" (click)=\"editToggleOff()\"\r\n                class=\"far text-danger\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\r\n\r\n    <div *ngIf=\"!(user$ |async)\" class=\"disconnected\">\r\n\r\n        <p>You must login to see your favorite list.</p>\r\n        <p>You can click <button (click)=\"loginPage()\">here</button> to move login page</p>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"user$ | async as user\" class=\"connected text-center\">\r\n\r\n        <div class=\"header\">\r\n\r\n            <h2>Welcome Back - {{user.username}}</h2>\r\n            <h3>Your favorite lists</h3>\r\n\r\n        </div>\r\n\r\n        <div *ngFor=\"let protein of proteins$ | async ; index as i;\">\r\n            <div class=\"parallax1 m-0\">\r\n\r\n                <div class=\"row m-1 justify-content-center\">\r\n                    <div [class.d-none]=\"proteinKeyValue.key === 'id'\"\r\n                        *ngFor=\"let proteinKeyValue of protein | keyvalue\" class=\"col-12 col-sm-6 col-xl-4 p-2\">\r\n\r\n                        <div [class.eggCard]=\"proteinKeyValue.key === 'egg' && editToggle === i && !addToggle\"\r\n                            class=\"card\">\r\n\r\n                            <div [class.d-none]=\"editToggle !== i || addToggle\">\r\n                                <input type=\"button\" (click)=\"deleteOneProtein(user.id,protein.id,proteinKeyValue.key)\"\r\n                                    value=\"&#xf2ed;\" class=\"fas text-danger deleteOneProtein\">\r\n                            </div>\r\n\r\n                            <div *ngIf=\"proteinKeyValue.key !== 'egg'\" class=\"m-0\">\r\n\r\n                                <div class=\"row justify-content-center m-0\">\r\n\r\n                                    <label class=\"col-5 col-sm-4 box m-1\">{{proteinKeyValue.key}}</label>\r\n                                    <label class=\"col-1\"></label>\r\n                                    <label class=\"col-5 col-sm-4 box m-1\"> {{proteinKeyValue.value}}</label>\r\n\r\n                                    <div [class.d-none]=\"editToggle !== i || addToggle\" class=\"col-12 p-0\">\r\n\r\n                                        <span class=\"col-2\">{{proteinKeyValue.key}}</span>\r\n\r\n                                        <input type=\"number\" title=\"Enter a new value\" [id]=\"proteinKeyValue.key+i\"\r\n                                            (keyup)=\"proteinKeyValue.value\" [value]=\"proteinKeyValue.value\"\r\n                                            class=\"text-center rounded-pill border border-white inputEdit col-4\">\r\n\r\n                                        <div class=\"d-inline col-2\">\r\n\r\n                                            <label\r\n                                                *ngIf=\"proteinKeyValue.key === 'tuna'|| proteinKeyValue.key === 'meat' || proteinKeyValue.key === 'cheese' || proteinKeyValue.key === 'cottage' || proteinKeyValue.key === 'quinoa'\">grams</label>\r\n                                            <label *ngIf=\"proteinKeyValue.key === 'almonds'\">handful</label>\r\n                                            <label *ngIf=\"proteinKeyValue.key === 'bread'\">slices</label>\r\n                                            <label\r\n                                                *ngIf=\"proteinKeyValue.key === 'powder' || proteinKeyValue.key === 'gainer'\">portions</label>\r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div *ngIf=\"proteinKeyValue.key === 'egg'\">\r\n\r\n                                <div class=\"row justify-content-center m-0\">\r\n\r\n                                    <label class=\"col smallBox p-0 m-0\">{{proteinKeyValue.key}}</label>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"row justify-content-center m-0\">\r\n\r\n                                    <small class=\"col-5 col-sm-4 box\">amount</small>\r\n                                    <label class=\"col-1\"></label>\r\n                                    <small class=\"col-5 col-sm-4 box\">{{proteinKeyValue.value.amount}}</small>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"row justify-content-center m-0\">\r\n\r\n                                    <small class=\"col-5 col-sm-4 box\">size</small>\r\n                                    <small class=\"col-1\"></small>\r\n                                    <small class=\"col-5 col-sm-4 box\">{{proteinKeyValue.value.sizeEgg}}</small>\r\n\r\n                                </div>\r\n\r\n                                <div [class.d-none]=\"editToggle !== i || addToggle\">\r\n\r\n                                    <div class=\"row justify-content-center m-3\">\r\n\r\n                                        <small *ngIf=\"proteinKeyValue.value.sizeEgg === 'empty'\"\r\n                                            class=\"text-primary\">*Must enter an amount and size</small>\r\n\r\n                                        <div class=\"col-12\">\r\n\r\n                                            <small class=\"text-capitalize eggSize\">amount</small>\r\n\r\n                                            <input type=\"number\" title=\"Enter a new value\" [id]=\"'amount'+i\"\r\n                                                (keyup)=\"proteinKeyValue.value.amount\"\r\n                                                [value]=\"proteinKeyValue.value.amount\"\r\n                                                class=\"text-center col-4 rounded-pill border border-white inputEdit\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-12\">\r\n\r\n                                            <small class=\"text-capitalize eggSize\">size</small>\r\n\r\n                                            <select [id]=\"'sizeEgg'+i\" title=\"Select a new value from list\"\r\n                                                [value]=\"proteinKeyValue.value.sizeEgg\" class=\"text-capitalize col-4\">\r\n                                                <option value=\"S\">small</option>\r\n                                                <option value=\"M\">medium</option>\r\n                                                <option value=\"L\">large</option>\r\n                                            </select>\r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"card size\">\r\n\r\n                    <div class=\"row justify-content-center\">\r\n\r\n                        <div *ngIf=\"editToggle !== i\" class=\"col-12 p-0\">\r\n\r\n                            <input type=\"button\" value=\"&#xf06e; Show\" (click)=\"show(user,protein)\"\r\n                                class=\"btn btn-outline-primary rounded-pill far m-1 col-8 col-sm-6\">\r\n\r\n                            <div class=\"col-12 p-0\">\r\n                                <input type=\"button\" value=\"&#xf410; Delete\" (click)=\"deleteProtein(user.id,protein.id)\"\r\n                                    class=\"btn btn-outline-danger rounded-pill far m-1 col-4 col-sm-3\">\r\n                                <input type=\"button\" value=\"&#xf044; Edit\" (click)=\"editToggleSwitch(i)\"\r\n                                    class=\"btn btn-outline-secondary rounded-pill fas m-1 col-4 col-sm-3\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div *ngIf=\"editToggle === i && !addToggle\" class=\"col-12 p-0\">\r\n\r\n                            <input type=\"button\" value=\"&#xf0c7; Update\" (click)=\"saveNewUpdate(user.id,protein.id)\"\r\n                                class=\"btn btn-outline-primary rounded-pill fas m-1 col-8 col-sm-6\">\r\n                            <div class=\"col-12 p-0\">\r\n                                <input type=\"button\" value=\"&#xf410; Cancel\" (click)=\"cancelEdit()\"\r\n                                    class=\"btn btn-outline-danger rounded-pill far m-1 col-4 col-sm-3\">\r\n                                <input type=\"button\" value=\"&#xf0fe; Add\" (click)=\"addToggleSwitch(protein)\"\r\n                                    class=\"btn btn-outline-success rounded-pill fas m-1 col-4 col-sm-3\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div *ngIf=\"editToggle === i && addToggle\" class=\"col-12 p-0\">\r\n\r\n                            <select [(ngModel)]=\"add\" class=\"text-capitalize text-center col-8 col-sm-6\">\r\n                                <option *ngIf=\"addList?.length === 0\">Your list full</option>\r\n                                <option *ngFor=\"let proteinList of addList\">{{proteinList}}</option>\r\n                            </select>\r\n\r\n                            <div class=\"col-12 p-0\">\r\n                                <input type=\"button\" value=\"&#xf410; Cancel\" (click)=\"cancelEdit()\"\r\n                                    class=\"btn btn-outline-danger rounded-pill far m-1 col-4 col-sm-3\">\r\n                                <input type=\"button\" value=\"&#xf0fe; Add\" [disabled]=\"addList?.length === 0\"\r\n                                    (click)=\"addProtein(user.id,protein)\"\r\n                                    class=\"btn btn-outline-success rounded-pill fas m-1 col-4 col-sm-3\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"parallax2\"></div>\r\n\r\n        </div>\r\n\r\n        <div class=\"text-center\">\r\n\r\n            <div id=\"show\" class=\"invisible\">\r\n\r\n                <div class=\"card show\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <p>{{showMessage}}</p>\r\n                        <p *ngIf=\"user\">{{showMessageLogin}}</p>\r\n                        <input type=\"button\" value=\"&#xf164;\" (click)=\"cancelShow()\" class=\"fas showButton\">\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"updateToggle\">\r\n\r\n                <div class=\"card update\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <h4>Must enter a positive number</h4>\r\n                        <input type=\"button\" value=\"&#xf164;\" (click)=\"updateToggleSwitch()\" class=\"fas updateButton\">\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n  {{popupToggle}}\r\n  <div [class.opacity]=\"popupToggle\">\r\n    <h1 class=\"text-center\">Muscle is your life?</h1>\r\n    <h2 class=\"text-center\">Let's start to calculate your protein </h2>\r\n  </div>\r\n\r\n  <div [class.d-none]=\"!popupToggle\">\r\n    <div class=\"card popup\">\r\n      <img src=\"/assets/photos/popup.jpg\" class=\"cardImage\">\r\n      <button (click)=\"cancelPopup()\" class=\"text-right cancel m-2 ml-auto\">\r\n        <i class=\"fas fa-times \"></i>\r\n      </button>\r\n      <nav class=\"card-body text-center\">\r\n        <h5 class=\"card-title\">Don't have an account yet?</h5>\r\n        <span>Click </span>\r\n        <button (click)=\"register()\" class=\"navigate\">here</button>\r\n        <span> to register or </span>\r\n        <button (click)=\"loginPage()\" class=\"navigate\">here</button>\r\n        <span> to login</span>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn-lg btn-danger col-10\" *ngIf=\"!acccept\" (click)=\"isAcccept()\">Lets started</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"acccept\" [class.opacity]=\"popupToggle\">\r\n\r\n    <form #proteinForm=\"ngForm\" (change)=\"saveSwitch()\" (ngSubmit)=\"submit()\">\r\n\r\n      <div class=\"container\">\r\n\r\n        <div id=\"egg\" class=\"invisible\">\r\n\r\n          <div class=\"row justify-content-center\">\r\n            <small class=\"text-danger p-2 m-1\"\r\n              [class.d-none]=\"egg.untouched || !egg.value || egg.value && eggSize.dirty\">You must\r\n              choose a size <i class=\"fas fa-arrow-circle-right\"></i></small>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-center\">\r\n\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Egg</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Egg\" #egg=\"ngModel\" name=\"egg\" pattern=\"^[1-9][0-9]*$\" placeholder=\"amount\"\r\n              [(ngModel)]=\"protein.egg.amount\">\r\n\r\n            <select class=\"border border-danger p-1 m-1 space\" [required]=\"egg.value\" [(ngModel)]=\"protein.egg.sizeEgg\"\r\n              #eggSize=\"ngModel\" name=\"eggSize\">\r\n              <option [value]=\"size\" disabled>Size</option>\r\n              <option>S</option>\r\n              <option>M</option>\r\n              <option>L</option>\r\n            </select>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div id=\"bread\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Bread</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Bread\" name=\"bread\" pattern=\"^[1-9][0-9]*$\" placeholder=\"slices\" [(ngModel)]=\"protein.bread\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"tuna\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Tuna</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Tuna\" name=\"tuna\" pattern=\"^[1-9][0-9]*$\" placeholder=\"grams\" [(ngModel)]=\"protein.tuna\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"meat\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Meat</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Meat\" name=\"meat\" pattern=\"^[1-9][0-9]*$\" placeholder=\"grams\" [(ngModel)]=\"protein.meat\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"cheese\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Cheese</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Cheese\" name=\"cheese\" pattern=\"^[1-9][0-9]*$\" placeholder=\"grams\" [(ngModel)]=\"protein.cheese\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"cottage\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Cottage</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Cottage\" name=\"cottage\" pattern=\"^[1-9][0-9]*$\" placeholder=\"grams\" [(ngModel)]=\"protein.cottage\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"quinoa\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Quinoa</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Quinoa\" name=\"quinoa\" pattern=\"^[1-9][0-9]*$\" placeholder=\"grams\" [(ngModel)]=\"protein.quinoa\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"almonds\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Almonds</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Almonds\" name=\"almonds\" pattern=\"^[1-9][0-9]*$\" placeholder=\"handful\"\r\n              [(ngModel)]=\"protein.almonds\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"powder\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Powder</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Powder\" name=\"powder\" pattern=\"^[1-9][0-9]*$\" placeholder=\"portions\" [(ngModel)]=\"protein.powder\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"gainer\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <label class=\"p-1 m-1 col-2 col-sm-2 col-md-1\">Gainer</label>\r\n            <input class=\"text-center rounded-pill border border-danger p-1 m-1 col-5 col-md-3 col-lg-2\" type=\"number\"\r\n              title=\"Gainer\" name=\"gainer\" pattern=\"^[1-9][0-9]*$\" placeholder=\"portions\" [(ngModel)]=\"protein.gainer\">\r\n            <div class=\"space p-1 m-1\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"submit\" class=\"invisible\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-1\"></div>\r\n            <input type=\"button\" value=\"&#xf06e; Show\" (click)=\"show()\"\r\n              class=\"btn btn-secondary rounded-pill border far m-1 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 button\">\r\n\r\n            <input [disabled]=\"!user || !saveToggle || !proteinForm.valid\" type=\"submit\" value=\"&#xf0c7; Save\"\r\n              class=\"btn btn-secondary rounded-pill border far m-1 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 button\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <div id=\"show\" class=\"invisible\">\r\n\r\n      <div class=\"card show text-center\">\r\n\r\n        <div class=\"card-body\">\r\n          <p>{{showMessage}}</p>\r\n          <p *ngIf=\"user\">{{showMessageLogin}}</p>\r\n          <input type=\"button\" value=\"&#xf164;\" (click)=\"cancelShow()\" class=\"fas showButton\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"/assets/photos/body_building.jpg\" class=\"backgroundImage\">\r\n\r\n\r\n<div class=\"container\">\r\n\r\n    <h2 class=\"text-center\">Protein for healthy muscle and bone</h2>\r\n\r\n    <strong>Proteins in the diet contribute significantly to the production of energy for the body.</strong>\r\n\r\n    <p>Dietary proteins provide amino acids as building blocks for growth, repair and maintenance of proteins in the\r\n        body. The body does not have a mechanism for storing amino acids or protein, unlike carbohydrates which can be\r\n        stored as glycogen and fats that can be stored as triacylglycerides.</p>\r\n\r\n    <p>When we have sufficient protein and an adequate supply of energy in our diet, the excess amino acids that are not\r\n        used for growth or repair are either converted to glucose in the liver or are used to provide energy. Without\r\n        enough supply of dietary energy from carbohydrates and fats, the body preferentially uses amino acids for energy\r\n        production at the expense of growth, maintenance and repair. This means that it is particularly important as we\r\n        get older to provide enough energy in the diet from carbohydrates and fats so that dietary protein can be used\r\n        for repair and maintenance.</p>\r\n\r\n    <p>Dietary protein is a key nutrient for muscle and bone health. Adequate dietary protein during childhood and\r\n        adolescent years is essential in order to accumulate an adequate bone and muscle mass during growth. For muscles\r\n        to grow, they need both protein and exercise, and the same is true also for bone. Dietary protein can also help\r\n        slow down the rate of bone and muscle loss that occurs as we get older. Low and high protein diets can affect\r\n        bone metabolism in different ways.</p>\r\n\r\n    <p>Skeletal muscle represents a pool of protein that can be called upon as a source of energy when food is scarce or\r\n        when the body is stressed such as after injury. A lack of protein in the diet will lead to poor muscle strength\r\n        which can increase the risk of falling, especially in the elderly and contributes to poor recovery in patients\r\n        who have had fractures. Low protein diets are also associated with decreased intestinal calcium absorption and\r\n        an increase in the levels of the key bone regulatory hormone parathyroid hormone.</p>\r\n\r\n    <p>High protein diets can increase calcium absorption and lead to an increased excretion of calcium in urine. High\r\n        protein diets are also linked to increased production of an important bone growth factor - insulin-like growth\r\n        factor 1. High protein diets are associated with an increased bone mineral content, a decrease in the risk of\r\n        fractures, and improved fracture repair and recovery after injury.</p>\r\n\r\n    <p>Muscle contains about 30% protein by weight. You might be surprised to learn that bone contains a higher\r\n        percentage of protein than muscle weight for weight. This is because, in muscle, the proteins are mainly found\r\n        inside the muscle cells, which contain a lot of water, while in bone, much of the protein is found outside of\r\n        cells in densely packed fibres that contain little water.</p>\r\n\r\n    <h4 class=\"text-center\">Summary - all people must to eat food with protein.</h4>\r\n\r\n    <small>&copy; University of Liverpool/The University of Sheffield/Newcastle University</small>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n    <div class=\"card m-auto\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-8\">\r\n\r\n                <div class=\"card-body\">\r\n\r\n                    <h5 class=\"card-title \">Lets login to your user</h5>\r\n                    <form (ngSubmit)=\"userLogin()\" #userForm=\"ngForm\">\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter an username</p>\r\n                            <small class=\"text-danger\" [class.d-none]=\"username.untouched || username.valid\">\r\n                                Must to enter only three letters at least</small>\r\n                            <input type=\"text\" title=\"Enter an username\" name=\"username\" #username=\"ngModel\"\r\n                                [(ngModel)]=\"login.username\" required pattern=\"^[a-zA-Z]{3,}$\"\r\n                                [class.border-danger]=\"username.invalid && username.touched\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter a password</p>\r\n\r\n                            <div class=\"text-danger\" [class.d-none]=\"password.untouched || password.valid\">\r\n                                <small>Must to enter eight letters at least.</small><br>\r\n                                <small>(one upper case one lower case and a number)</small>\r\n                            </div>\r\n\r\n                            <input type=\"password\" title=\"Enter a password\" name=\"password\" #password=\"ngModel\"\r\n                                [(ngModel)]=\"login.password\" required\r\n                                pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\"\r\n                                [class.border-danger]=\"password.invalid && password.touched\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n\r\n                            <hr>\r\n                            <div class=\"text-center\">\r\n                                <input type=\"submit\" value=\"Login &#xf2f6;\"\r\n                                    [class.invalid]=\"userForm.form.invalid && username.touched && password.touched\"\r\n                                    [disabled]=\"userForm.form.invalid\"\r\n                                    class=\"btn btn-outline-primary rounded-pill m-1 fas\">\r\n                                <input type=\"button\" (click)=\"register()\" value=\"Create &#xf234;\"\r\n                                    class=\"btn btn-outline-primary rounded-pill m-1 fas\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n                <img src=\"/assets/photos/man_body_torso_muscles.jpg\" class=\"image\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n        <header class=\"fixed-top\" [class.opacity]=\"popupToggle\">\r\n\r\n                <nav class=\"navbar\">\r\n\r\n                        <button routerLink=\"product/home\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-secondary\"><span class=\"fas fa-home\">\r\n                                </span>\r\n                                Home</button>\r\n\r\n                        <button routerLink=\"product/{{login()}}\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-dark text-light\"><span\r\n                                        class=\"fas fa-user-circle\">\r\n                                </span>\r\n                                Account</button>\r\n\r\n                        <button routerLink=\"product/favorite\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-secondary\"><span\r\n                                        class=\"far fa-thumbs-up\"></span>\r\n                                Favorite</button>\r\n\r\n                        <button routerLink=\"product/info\" routerLinkActive=\"is-active\"\r\n                                class=\"btn btn-outline-light col-6 col-sm bg-dark text-light\"><span\r\n                                        class=\"fas fa-question-circle\"></span>\r\n                                Info</button>\r\n\r\n                        <!-- <button class=\"btn btn-outline-light col-2\"><span class=\"fas fa-toggle-on\"></span> Hebrew</button> -->\r\n                        <!-- <button class=\"btn btn-outline-light col-2\"><span class=\"fas fa-toggle-off\"></span> English</button> -->\r\n\r\n                </nav>\r\n\r\n                <div class=\"row\">\r\n                        <img src=\"/assets/photos/bodybuilding_weightlifting.jpg\"\r\n                                class=\"backgroundImage col-6 smartphone\">\r\n                        <img src=\"/assets/photos/sport_girl_fitness.jpg\"\r\n                                class=\"backgroundImage col-6 smartphone smallSreen\">\r\n                </div>\r\n\r\n        </header>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n        <footer [class.opacity]=\"popupToggle\" class=\"m-1 text-light bg-dark text-center\">\r\n                <small>&copy; Created by - Lichay Tiram -</small>\r\n        </footer>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n    <div class=\"card m-auto\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-8\">\r\n\r\n                <div class=\"card-body\">\r\n\r\n                    <h5 class=\"card-title \">Lets create an user</h5>\r\n                    <form (ngSubmit)=\"createUser()\" #userForm=\"ngForm\">\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter an username</p>\r\n                            <small class=\"text-danger\" [class.d-none]=\"username.untouched || username.valid\">\r\n                                Must to enter only three letters at least</small>\r\n\r\n                            <input type=\"text\" title=\"Enter an username\" name=\"username\" #username=\"ngModel\"\r\n                                [(ngModel)]=\"user.username\" required pattern=\"^[a-zA-Z]{3,}$\"\r\n                                [class.border-danger]=\"username.invalid && username.touched\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter a password</p>\r\n\r\n                            <div class=\"text-danger\" [class.d-none]=\"password.untouched || password.valid\">\r\n                                <small>Must to enter eight letters at least.</small>\r\n                                <small>(one upper case one lower case and a number)</small>\r\n                            </div>\r\n\r\n                            <input type=\"password\" title=\"Enter a password\" name=\"password\" #password=\"ngModel\"\r\n                                [(ngModel)]=\"user.password\" required\r\n                                pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\"\r\n                                [class.border-danger]=\"password.invalid && password.touched\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter again a password to confirm</p>\r\n\r\n                            <div class=\"text-danger\"\r\n                                [class.d-none]=\"confirmPassword.untouched || confirmPassword.valid && confirmPassword.value===password.value\">\r\n                                <small>Your passwords isn't match!</small>\r\n                                <small>Please try again.</small>\r\n                            </div>\r\n\r\n                            <input type=\"password\" title=\"Enter again a password to confirm\" name=\"confirmPassword\"\r\n                                #confirmPassword=\"ngModel\" [(ngModel)]=\"user.confirmPassword\" required\r\n                                pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$\" [disabled]=\"password.invalid\"\r\n                                [class.border-danger]=\"confirmPassword.touched && confirmPassword.value!==password.value\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">Enter your weight</p>\r\n                            <small class=\"text-danger\" [class.d-none]=\"weight.untouched || weight.valid\">Your weight\r\n                                must be greater than 0 .</small>\r\n\r\n                            <input type=\"number\" title=\"Enter your weight\" name=\"weight\" #weight=\"ngModel\"\r\n                                [(ngModel)]=\"user.weight\" required pattern=\"^[1-9]\\d*$\"\r\n                                [class.border-danger]=\"weight.invalid && weight.touched\"\r\n                                class=\"rounded-pill border border-primary\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <p class=\"m-0\">What is your gender ?</p>\r\n\r\n                            <div class=\"text-center\">\r\n                                <label>\r\n                                    <input type=\"radio\" name=\"male\" #male=\"ngModel\" value=\"Male\" required\r\n                                        [(ngModel)]=\"user.gender\">\r\n                                    <span class=\"rounded-pill text-center m-1 radioMale\"><i\r\n                                            class=\"fas fa-male m-1\"></i></span>\r\n                                </label>\r\n\r\n                                <label>\r\n                                    <input type=\"radio\" name=\"female\" #female=\"ngModel\" value=\"Female\" required\r\n                                        [(ngModel)]=\"user.gender\">\r\n                                    <span class=\"rounded-pill text-center m-1 radioFemale\"><i\r\n                                            class=\"fas fa-female m-1\"></i></span>\r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div>\r\n                            <small>\r\n                                <label class=\"width\">\r\n                                    <input type=\"checkbox\" name=\"accept\" #accept=\"ngModel\" ngModel required>\r\n                                    <span>\r\n                                        <i *ngIf=\"accept.valid\" class=\"fas fa-check-circle fa-lg checkbox\"></i>\r\n                                        <i *ngIf=\"accept.invalid\" class=\"fas fa-circle fa-lg checkbox\"></i>\r\n                                    </span>\r\n                                </label>\r\n                                <label>By clicking Sign Up, you</label><br>\r\n                                <label class=\"width\"></label>\r\n                                <span>agree to our </span>\r\n                                <input type=\"button\" value=\"Terms\" class=\"terms\" (click)=\"showTerms()\">\r\n\r\n                            </small>\r\n\r\n                            <div *ngIf=\"terms\">\r\n                                <p>By clicking Sign Up, you agree to our Data Policy and Cookies Policy</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <hr>\r\n                            <div class=\"text-center\">\r\n                                <input type=\"submit\" value=\"Sign Up &#xf234;\"\r\n                                    [class.invalid]=\"(username.touched && password.touched && confirmPassword.touched && weight.touched && accept.dirty && (male.dirty || female.dirty)) && (confirmPassword.value!==password.value || userForm.form.invalid)\"\r\n                                    [disabled]=\"userForm.form.invalid || confirmPassword.value!==password.value && confirmPassword.touched\"\r\n                                    class=\"btn btn-outline-primary rounded-pill fas m-1 w-75\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n                <img src=\"/assets/photos/bodybuilder_register.jpg\" class=\"image\">\r\n                <hr>\r\n                <p>Dreams come true sometimes</p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("p, label, span, h5 {\r\n    color: rgb(190, 231, 238);\r\n}\r\n\r\nbutton, input {\r\n    outline: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: initial;\r\n}\r\n\r\n.space {\r\n    width: 100%;\r\n}\r\n\r\n.fas {\r\n    text-align: start;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    display: none;\r\n}\r\n\r\n.radioMale, .radioFemale {\r\n    background-color: rgb(61, 55, 61);\r\n    display: inline-block;\r\n    width: 70px;\r\n}\r\n\r\n.radioMale:hover, .radioFemale:hover {\r\n    background-color: gray;\r\n    color: rgb(39, 29, 29);\r\n}\r\n\r\ninput[type=\"radio\"]:checked+.radioMale {\r\n    background-color: rgb(117, 194, 245);\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"]:checked+.radioFemale {\r\n    background-color: rgb(252, 218, 242);\r\n    color: rgb(252, 89, 184);\r\n}\r\n\r\n.inputValue:hover, .inputValue:focus {\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n    color: rgb(47, 120, 255);\r\n}\r\n\r\ninput:hover {\r\n    color: white;\r\n}\r\n\r\nsmall {\r\n    display: block;\r\n}\r\n\r\n.eye {\r\n    color: rgb(122, 130, 241);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCwgbGFiZWwsIHNwYW4sIGg1IHtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCAyMzEsIDIzOCk7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmFkaW9NYWxlLCAucmFkaW9GZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA1NSwgNjEpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5yYWRpb01hbGU6aG92ZXIsIC5yYWRpb0ZlbWFsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgY29sb3I6IHJnYigzOSwgMjksIDI5KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrLnJhZGlvTWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxOTQsIDI0NSk7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA2MCwgMjUzKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrLnJhZGlvRmVtYWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIxOCwgMjQyKTtcclxuICAgIGNvbG9yOiByZ2IoMjUyLCA4OSwgMTg0KTtcclxufVxyXG5cclxuLmlucHV0VmFsdWU6aG92ZXIsIC5pbnB1dFZhbHVlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2IoMTQ1LCAxNDAsIDE0NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQxLCAyMzIsIDAuNzg4KTtcclxuICAgIGNvbG9yOiByZ2IoNDcsIDEyMCwgMjU1KTtcclxufVxyXG5cclxuaW5wdXQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmV5ZSB7XHJcbiAgICBjb2xvcjogcmdiKDEyMiwgMTMwLCAyNDEpO1xyXG59Il19 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/index */ "./src/app/store/actions/index.ts");
/* harmony import */ var _store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors/user.selectors */ "./src/app/store/selectors/user.selectors.ts");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let AccountComponent = class AccountComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        // unSubscribe list
        this.unSubscribe = [];
        let isLogin = !!sessionStorage.getItem("login");
        if (!isLogin)
            this.router.navigate(["product/login"]);
    }
    ngOnInit() {
        this.newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"](undefined, undefined, undefined, undefined, undefined);
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_6__["getUser"]));
        this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_6__["getUserUpdated"])).subscribe(userUpdated => this.updateToggle = userUpdated, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(error)))));
    }
    ngOnDestroy() {
        this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());
    }
    logout() {
        this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["UserLogout"])());
        this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["ProteinLogout"])());
        this.router.navigate(["product/home"]);
    }
    deleteAccount(userId) {
        const isConfirm = confirm("You are try to delete your account!\nYou are sure?");
        // Should be one function , FireBase (data base) don't save proteins id as a foreign key.
        if (isConfirm) {
            this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["DeleteUser"])({ userId }));
            this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["DeleteAllProteins"])({ userId }));
        }
    }
    editToggleOn() {
        this.editToggle = true;
    }
    editToggleOff() {
        this.editToggle = false;
        this.allTogglesOff();
    }
    // check if one of Toggles is on
    allowToEdit() {
        if (this.editToggle && this.findAvailableToken())
            return true;
        return false;
    }
    // check if one of Toggles is on and return toggle name
    findAvailableToken() {
        if (this.usernameToggle)
            return "username";
        if (this.passwordToggle)
            return "password";
        if (this.genderToggle)
            return "gender";
        if (this.weightToggle)
            return "weight";
        return null;
    }
    showPasswordSwitch() {
        this.showPasswordToggle = !this.showPasswordToggle;
    }
    nameToggle(toggleName) {
        this.newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"](undefined, undefined, undefined, undefined, undefined);
        this.allTogglesOff();
        switch (toggleName) {
            case "username":
                this.usernameToggle = true;
                break;
            case "password":
                this.passwordToggle = true;
                break;
            case "gender":
                this.genderToggle = true;
                break;
            case "weight":
                this.weightToggle = true;
                break;
            default:
                alert("Something was wrong!\nPlease try again.");
        }
    }
    cancelTogglesOff(firstInput, secondInput) {
        if (firstInput)
            firstInput.reset();
        if (secondInput)
            secondInput.reset();
        this.allTogglesOff();
    }
    allTogglesOff() {
        this.usernameToggle = false;
        this.passwordToggle = false;
        this.genderToggle = false;
        this.weightToggle = false;
    }
    updateUser(oldUser, userForm) {
        const valueToUpdate = this.findAvailableToken();
        let user = Object.assign({}, oldUser);
        const userValue = Object.assign({}, this.newUser);
        // Update the user with new value
        switch (valueToUpdate) {
            case "username":
                user.username = userValue.username;
                break;
            case "password":
                user.password = userValue.password;
                user.confirmPassword = userValue.confirmPassword;
                break;
            case "gender":
                user.gender = userValue.gender;
                break;
            case "weight":
                user.weight = userValue.weight;
                break;
            default:
                alert("Something was wrong!\nPlease try again.");
        }
        this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["UpdateUser"])({ user }));
        setTimeout(() => {
            this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["UserUpdated"])());
            this.allTogglesOff();
            if (valueToUpdate != "gender")
                userForm.controls[valueToUpdate].reset();
        }, 2000);
    }
};
AccountComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    })
], AccountComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/modules/app-routing.module */ "./src/app/shared/modules/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _storeRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storeRouter */ "./src/app/storeRouter/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_16__["FavoriteComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_17__["InfoComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_18__["AccountComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot({
                routerState: 1 /* Minimal */,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_12__["effects"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_storeRouter__WEBPACK_IMPORTED_MODULE_11__["reducer"], {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                },
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('products', _store__WEBPACK_IMPORTED_MODULE_12__["reducers"]),
            // Only a tool for developers will delete on products
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
            }),
        ],
        providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["RouterStateSerializer"], useClass: _storeRouter__WEBPACK_IMPORTED_MODULE_11__["CustomSerializer"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".disconnected {\r\n    color: crimson;\r\n}\r\n\r\n.connected {\r\n    color: black;\r\n}\r\n\r\nbutton {\r\n    border: 0;\r\n    padding: 0;\r\n    outline: 0;\r\n    background-color: inherit;\r\n    color: white;\r\n}\r\n\r\n.card {\r\n    height: 80px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.eggCard {\r\n    height: 176px;\r\n    display: block;\r\n}\r\n\r\n.box {\r\n    text-transform: capitalize;\r\n    border: 1px solid rgb(194, 193, 193);\r\n    box-shadow: 0 0 2px 2px rgb(185, 235, 250);\r\n}\r\n\r\n.smallBox {\r\n    text-transform: capitalize;\r\n    border: 1px solid rgb(238, 193, 193);\r\n    box-shadow: 0 0 2px 2px rgb(243, 203, 195);\r\n    z-index: 1;\r\n}\r\n\r\nselect {\r\n    border-radius: 17px;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    outline: 0;\r\n    margin: 5px;\r\n    padding: 1px 15px;\r\n    border-top: 1px dotted rgb(146, 224, 248);\r\n    border-left: 1px solid rgb(161, 227, 247);\r\n    border-bottom: 1px solid rgb(144, 169, 252);\r\n    border-right: 1px solid rgb(96, 161, 236);\r\n}\r\n\r\nspan {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.eggSize {\r\n    display: inline-block;\r\n    text-align: start;\r\n    width: 70px;\r\n}\r\n\r\n.inputEdit {\r\n    outline: 0;\r\n    margin: 5px;\r\n    background: -webkit-gradient( linear, left top, right top, color-stop(20%, rgb(252, 217, 249)), to(rgb(158, 226, 247)));\r\n    background: linear-gradient( to right, rgb(252, 217, 249) 20%, rgb(158, 226, 247));\r\n    box-shadow: 0 0 1px 1px rgb(174, 175, 175);\r\n}\r\n\r\n.size {\r\n    width: 450px;\r\n    margin: auto;\r\n}\r\n\r\n.header {\r\n    background: -webkit-gradient(linear, left top, right top, from(black), to(white));\r\n    background: linear-gradient(to right, black, white);\r\n    text-shadow: 2px 2px rgb(88, 88, 87);\r\n    height: 130px;\r\n}\r\n\r\n.show {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 60%;\r\n    z-index: 3;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: rgb(39, 5, 61);\r\n    background: -webkit-gradient( linear, left top, left bottom, from(rgb(153, 183, 240)), to(rgb(97, 214, 243)));\r\n    background: linear-gradient( rgb(153, 183, 240), rgb(97, 214, 243));\r\n}\r\n\r\n.update {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 60%;\r\n    z-index: 3;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: rgb(58, 76, 240);\r\n    background: -webkit-gradient( linear, left top, left bottom, from(rgb(250, 176, 213)), to(rgb(240, 75, 124)));\r\n    background: linear-gradient( rgb(250, 176, 213), rgb(240, 75, 124));\r\n}\r\n\r\n.deleteOneProtein {\r\n    z-index: 2;\r\n    outline: 1px;\r\n    padding: 0;\r\n    border: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgb(198, 216, 221);\r\n    border-radius: 30%;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.deleteOneProteinEgg {\r\n    right: 1px;\r\n    top: 1px;\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n.showButton {\r\n    background-color: inherit;\r\n    color: rgb(77, 77, 77);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.updateButton {\r\n    background-color: inherit;\r\n    color: rgb(7, 3, 245);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.showButton:hover {\r\n    color: black;\r\n}\r\n\r\n.updateButton:hover {\r\n    color: rgb(111, 5, 182);\r\n}\r\n\r\n.parallax1 {\r\n    background: -webkit-gradient( linear, left top, left bottom, color-stop(40%, rgb(179, 145, 218)), color-stop(rgb(169, 235, 255)), to(rgb(43, 39, 255)));\r\n    background: linear-gradient( rgb(179, 145, 218) 40%, rgb(169, 235, 255), rgb(43, 39, 255));\r\n    height: 650px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.parallax2 {\r\n    background-image: url(\"/assets/photos/biceps_black_and_white_body.jpg\");\r\n    height: 300px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n@media(max-width :420px) {\r\n    .parallax1 {\r\n        height: auto;\r\n    }\r\n    .size {\r\n        width: 280px;\r\n    }\r\n}\r\n\r\n@media(max-height :420px) {\r\n    .parallax1 {\r\n        height: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNEJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUhBQWtGO0lBQWxGLGtGQUFrRjtJQUNsRiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlGQUFtRDtJQUFuRCxtREFBbUQ7SUFDbkQsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQiw2R0FBbUU7SUFBbkUsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsNkdBQW1FO0lBQW5FLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUpBQTBGO0lBQTFGLDBGQUEwRjtJQUMxRixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUVBQXVFO0lBQ3ZFLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjb25uZWN0ZWQge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5jb25uZWN0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVnZ0NhcmQge1xyXG4gICAgaGVpZ2h0OiAxNzZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NCwgMTkzLCAxOTMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmdiKDE4NSwgMjM1LCAyNTApO1xyXG59XHJcblxyXG4uc21hbGxCb3gge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM4LCAxOTMsIDE5Myk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZ2IoMjQzLCAyMDMsIDE5NSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYigxNDYsIDIyNCwgMjQ4KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE2MSwgMjI3LCAyNDcpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNDQsIDE2OSwgMjUyKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYig5NiwgMTYxLCAyMzYpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uZWdnU2l6ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uaW5wdXRFZGl0IHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsIHJnYigyNTIsIDIxNywgMjQ5KSAyMCUsIHJnYigxNTgsIDIyNiwgMjQ3KSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2IoMTc0LCAxNzUsIDE3NSk7XHJcbn1cclxuXHJcbi5zaXplIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrLCB3aGl0ZSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoODgsIDg4LCA4Nyk7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogcmdiKDM5LCA1LCA2MSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTMsIDE4MywgMjQwKSwgcmdiKDk3LCAyMTQsIDI0MykpO1xyXG59XHJcblxyXG4udXBkYXRlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiByZ2IoNTgsIDc2LCAyNDApO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAxNzYsIDIxMyksIHJnYigyNDAsIDc1LCAxMjQpKTtcclxufVxyXG5cclxuLmRlbGV0ZU9uZVByb3RlaW4ge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG91dGxpbmU6IDFweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIxNiwgMjIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uZGVsZXRlT25lUHJvdGVpbkVnZyB7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLnNob3dCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnVwZGF0ZUJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHJnYig3LCAzLCAyNDUpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaG93QnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwZGF0ZUJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDExMSwgNSwgMTgyKTtcclxufVxyXG5cclxuLnBhcmFsbGF4MSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNzksIDE0NSwgMjE4KSA0MCUsIHJnYigxNjksIDIzNSwgMjU1KSwgcmdiKDQzLCAzOSwgMjU1KSk7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGFyYWxsYXgyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGhvdG9zL2JpY2Vwc19ibGFja19hbmRfd2hpdGVfYm9keS5qcGdcIik7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDo0MjBweCkge1xyXG4gICAgLnBhcmFsbGF4MSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnNpemUge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC1oZWlnaHQgOjQyMHB4KSB7XHJcbiAgICAucGFyYWxsYXgxIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors */ "./src/app/store/selectors/index.ts");
/* harmony import */ var _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/protein.model */ "./src/app/shared/models/protein.model.ts");
/* harmony import */ var _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/showCalculator */ "./src/app/shared/services/showCalculator.ts");
/* harmony import */ var _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/models/egg.model */ "./src/app/shared/models/egg.model.ts");









let FavoriteComponent = class FavoriteComponent {
    constructor(store, router, showCalculator) {
        this.store = store;
        this.router = router;
        this.showCalculator = showCalculator;
        // Messages to user
        this.showMessage = "";
        this.showMessageLogin = "";
    }
    ngOnInit() {
        this.addList = [];
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]));
        this.proteins$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllProteins"]));
    }
    // Add one element inside existing protein
    addProtein(userId, protein) {
        const valueToAdd = this.add;
        if (valueToAdd === undefined)
            return;
        if (valueToAdd === 'egg') {
            const egg = new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_8__["Egg"](0, 'empty');
            protein.egg = egg;
        }
        else
            protein[valueToAdd] = 0;
        this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProtein"])({ userId, protein }));
        this.addToggle = false;
    }
    saveNewUpdate(userId, proteinId) {
        const index = this.editToggle;
        const protein = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_6__["Protein"]();
        Object.keys(protein).filter(key => key !== 'id' && key !== 'egg').forEach(key => {
            const value = this.getInputValue(key, index);
            if (value)
                protein[key] = value;
        });
        if (this.getInputValue('amount', index) && this.getInputValue('sizeEgg', index)) {
            const amount = Number(this.getInputValue('amount', index));
            const sizeEgg = this.getInputValue('sizeEgg', index);
            const egg = new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_8__["Egg"](amount, sizeEgg);
            protein.egg = egg;
        }
        // Send clean Object without undefined properties to Store
        Object.keys(protein).forEach(key => !protein[key] && delete protein[key]);
        if (!protein.egg || !protein.egg.sizeEgg)
            delete protein.egg;
        if (this.checkUpdateValidation(protein)) {
            protein.id = proteinId;
            this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["UpdateProtein"])({ userId, protein }));
            this.cancelEdit();
        }
        else
            this.updateToggle = true;
    }
    loginPage() {
        this.router.navigate(['/product/login']);
    }
    show(user, tempProtein) {
        const { id, egg } = tempProtein, protein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](tempProtein, ["id", "egg"]);
        const sum = this.showCalculator.calculateProtein(protein, egg);
        const value = user.weight * 2 - sum;
        this.showMessage = `You eat ${sum} protein approximately.`;
        this.showMessageLogin = value > 0 ? `You need more ${value}` : 'You Eat enough protein for today good job!';
        this.visibilityOn('show');
    }
    cancelShow() {
        this.visibilityOff('show');
    }
    editToggleSwitch(editToggle) {
        this.editToggle = editToggle;
        this.addToggle = undefined;
    }
    updateToggleSwitch() {
        this.updateToggle = undefined;
    }
    addToggleSwitch(protein) {
        const tempList = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_6__["Protein"]();
        const addList = [];
        Object.keys(protein).forEach(key => delete tempList[key]);
        Object.keys(tempList).forEach(key => addList.push(key));
        this.addToggle = true;
        this.addList = addList;
    }
    cancelEdit() {
        this.editToggle = undefined;
        this.addToggle = undefined;
    }
    deleteProtein(userId, proteinId) {
        const isConfirm = window.confirm('You going to delete that protein.\nPlease confirm!');
        if (isConfirm)
            this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_4__["DeleteProtein"])({ userId, proteinId }));
    }
    deleteOneProtein(userId, proteinId, key) {
        const index = this.editToggle;
        if (key === 'egg') {
            this.deleteElement('amount', index);
            this.deleteElement('sizeEgg', index);
        }
        else
            this.deleteElement(key, index);
        this.saveNewUpdate(userId, proteinId);
    }
    checkUpdateValidation(protein) {
        const { egg } = protein, pro = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](protein, ["egg"]);
        if (egg && egg.amount < 0)
            return false;
        let validation = true;
        Object.values(pro).some(value => value < 0 && (validation = false) && true);
        return validation;
    }
    // Get element value by his id ( id is contain key and index of array -HTML Template- ).
    getInputValue(key, index) {
        const elementId = key + index;
        const inputElement = document.getElementById(elementId);
        return inputElement && inputElement.value;
    }
    deleteElement(key, index) {
        const elementId = key + index;
        document.getElementById(elementId).remove();
    }
    visibilityOn(name) {
        document.getElementById(name).className = "visibility: visible";
    }
    visibilityOff(name) {
        document.getElementById(name).className = "visibility: invisible";
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_7__["showCalculator"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("small {\r\n    left: 30px;\r\n}\r\n\r\nh1, h2 {\r\n    color: white;\r\n}\r\n\r\n.opacity {\r\n    opacity: 0.3;\r\n}\r\n\r\nlabel {\r\n    position: relative;\r\n    color: oldlace;\r\n    width: 70px;\r\n}\r\n\r\nlabel:hover {\r\n    color: black;\r\n    -webkit-transition-duration: 2s;\r\n            transition-duration: 2s;\r\n    background-color: rgb(255, 199, 199);\r\n}\r\n\r\nlabel::before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    -webkit-transition-duration: 2s;\r\n            transition-duration: 2s;\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(201, 169, 169)), to(rgb(196, 111, 111)));\r\n    background: linear-gradient(to right, rgb(201, 169, 169), rgb(196, 111, 111));\r\n}\r\n\r\nlabel:hover::before {\r\n    width: 100%;\r\n}\r\n\r\nselect {\r\n    border-radius: 17px;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n}\r\n\r\nselect:focus {\r\n    color: white;\r\n    background-color: rgb(34, 34, 32);\r\n}\r\n\r\ninput {\r\n    -webkit-animation-name: input;\r\n            animation-name: input;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n}\r\n\r\ninput:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\ninput:hover {\r\n    background-color: inherit;\r\n    color: white;\r\n}\r\n\r\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::-moz-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n::placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n.space {\r\n    width: 70px;\r\n}\r\n\r\n.button {\r\n    right: 3%;\r\n    max-width: 160px;\r\n}\r\n\r\n.cancel {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    color: red;\r\n    text-shadow: red;\r\n    background-color: rgb(59, 63, 57);\r\n}\r\n\r\n.navigate {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    color: rgb(179, 5, 5);\r\n    background-color: inherit;\r\n    font-weight: bold;\r\n    font-style: oblique;\r\n}\r\n\r\n.popup {\r\n    position: fixed;\r\n    z-index: 1;\r\n    width: 50%;\r\n    height: 40%;\r\n    margin: -5% auto;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: pink;\r\n    color: seashell;\r\n}\r\n\r\n.show {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 60%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: seashell;\r\n    background-color: rgb(88, 81, 81);\r\n}\r\n\r\n.showButton {\r\n    background-color: inherit;\r\n    color: rgb(127, 255, 110);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.showButton:hover {\r\n    color: rgb(87, 241, 67);\r\n}\r\n\r\n.cardImage {\r\n    opacity: 0.9;\r\n    width: 100%;\r\n    position: absolute;\r\n    height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n@-webkit-keyframes input {\r\n    from {\r\n        -webkit-transform: rotate(180deg) translateX(250px);\r\n                transform: rotate(180deg) translateX(250px);\r\n        background-color: rgb(7, 7, 7);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes input {\r\n    from {\r\n        -webkit-transform: rotate(180deg) translateX(250px);\r\n                transform: rotate(180deg) translateX(250px);\r\n        background-color: rgb(7, 7, 7);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .popup {\r\n        margin: -12% auto;\r\n        height: 50%;\r\n    }\r\n    .show {\r\n        top: 65%;\r\n    }\r\n}\r\n\r\n@media (max-height: 330px) {\r\n    .show {\r\n        z-index: 9999;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJHQUE2RTtJQUE3RSw2RUFBNkU7QUFDakY7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBSEE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUhBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFIQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxtREFBMkM7Z0JBQTNDLDJDQUEyQztRQUMzQyw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBUkE7SUFDSTtRQUNJLG1EQUEyQztnQkFBM0MsMkNBQTJDO1FBQzNDLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic21hbGwge1xyXG4gICAgbGVmdDogMzBweDtcclxufVxyXG5cclxuaDEsIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9wYWNpdHkge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogb2xkbGFjZTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG5sYWJlbDpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5OSwgMTk5KTtcclxufVxyXG5cclxubGFiZWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyMDEsIDE2OSwgMTY5KSwgcmdiKDE5NiwgMTExLCAxMTEpKTtcclxufVxyXG5cclxubGFiZWw6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxufVxyXG5cclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDMyKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGlucHV0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZS1zdHlsZTogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2IoMTQ1LCAxNDAsIDE0NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQxLCAyMzIsIDAuNzg4KTtcclxufVxyXG5cclxuaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1zaGFkb3c6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNjMsIDU3KTtcclxufVxyXG5cclxuLm5hdmlnYXRlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY29sb3I6IHJnYigxNzksIDUsIDUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBtYXJnaW46IC01JSBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogc2Vhc2hlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDgxLCA4MSk7XHJcbn1cclxuXHJcbi5zaG93QnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogcmdiKDEyNywgMjU1LCAxMTApO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaG93QnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoODcsIDI0MSwgNjcpO1xyXG59XHJcblxyXG4uY2FyZEltYWdlIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5wdXQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVYKDI1MHB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNywgNyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0MjBweCkge1xyXG4gICAgLnBvcHVwIHtcclxuICAgICAgICBtYXJnaW46IC0xMiUgYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIC5zaG93IHtcclxuICAgICAgICB0b3A6IDY1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiAzMzBweCkge1xyXG4gICAgLnNob3cge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/protein.model */ "./src/app/shared/models/protein.model.ts");
/* harmony import */ var _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/egg.model */ "./src/app/shared/models/egg.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_protein_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/showCalculator */ "./src/app/shared/services/showCalculator.ts");












let HomeComponent = class HomeComponent {
    constructor(store, router, showCalculator) {
        this.store = store;
        this.router = router;
        this.showCalculator = showCalculator;
        // Messages to user
        this.showMessage = "";
        this.showMessageLogin = "";
        this.clearInterval = [];
        this.unSubscribe = [];
    }
    ngOnInit() {
        this.protein = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_5__["Protein"](new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_6__["Egg"]());
        if (!!localStorage.getItem("acccept")) {
            this.acccept = true;
            this.visibility();
        }
        this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store__WEBPACK_IMPORTED_MODULE_9__["getUser"])).subscribe(user => {
            const userId = !!sessionStorage.getItem('login');
            if (!user && !userId)
                this.popup();
            this.user = user;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(error)))));
    }
    ngOnDestroy() {
        this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__["UserPopupOff"])());
        this.clearInterval.forEach(id => clearInterval(id));
        this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());
    }
    popup() {
        this.clearInterval.push(setTimeout(() => {
            if (!this.user)
                this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__["UserPopupOn"])());
            this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store__WEBPACK_IMPORTED_MODULE_9__["getPopup"])).subscribe(popupToggle => this.popupToggle = popupToggle, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(error)))));
        }, 8000));
    }
    cancelPopup() {
        this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_10__["UserPopupOff"])());
    }
    cancelShow() {
        this.visibilityOff('show');
    }
    isAcccept() {
        this.acccept = true;
        this.visibility();
        localStorage.setItem('acccept', "true");
    }
    submit() {
        const userId = this.user.id;
        // Create a new reference
        const protein = Object.assign({}, this.protein);
        const { egg } = protein;
        protein.egg = Object.assign({}, egg);
        // Send clean Object without undefined properties to Store
        Object.keys(protein).forEach(key => !protein[key] && delete protein[key]);
        if (!protein.egg || !protein.egg.sizeEgg || !protein.egg.amount)
            delete protein.egg;
        this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_8__["AddProtein"])({ userId, protein }));
    }
    show() {
        const _a = this.protein, { id, egg } = _a, protein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id", "egg"]);
        const sum = this.showCalculator.calculateProtein(protein, egg);
        this.showMessage = `You eat ${sum} protein approximately.`;
        if (this.user) {
            const value = this.user.weight * 2 - sum;
            this.showMessageLogin = value > 0 ? `You need more ${value}` : 'You Eat enough protein for today good job!';
        }
        this.visibilityOn('show');
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
    visibilityOff(name) {
        document.getElementById(name).className = "visibility: invisible";
    }
    register() {
        this.router.navigate(['product/register']);
    }
    loginPage() {
        this.router.navigate(['/product/login']);
    }
    // Check if form is valid ( one of input must be with value )
    saveSwitch() {
        const _a = this.protein, { id, egg } = _a, protein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["id", "egg"]);
        let updateToggle = false;
        Object.values(protein).some(value => value && (updateToggle = true) && true);
        egg.amount && egg.sizeEgg && (updateToggle = true);
        this.saveToggle = updateToggle;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_11__["showCalculator"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".backgroundImage {\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 72%;\r\n    top: 264px;\r\n}\r\n\r\n.container {\r\n    color: oldlace;\r\n}\r\n\r\nstrong {\r\n    position: relative;\r\n    -webkit-transform: translateX(140%);\r\n            transform: translateX(140%);\r\n    display: block;\r\n    -webkit-animation-name: moveLeft;\r\n            animation-name: moveLeft;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\nh2 {\r\n    position: relative;\r\n    -webkit-transform: translateY(-200px);\r\n            transform: translateY(-200px);\r\n    -webkit-animation-name: movieBottom;\r\n            animation-name: movieBottom;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\nh4 {\r\n    position: relative;\r\n    -webkit-transform: translateY(100px);\r\n            transform: translateY(100px);\r\n    -webkit-animation-name: moveTop;\r\n            animation-name: moveTop;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\np {\r\n    position: relative;\r\n    -webkit-transform: translateX(-140%);\r\n            transform: translateX(-140%);\r\n    -webkit-animation-name: moveRight;\r\n            animation-name: moveRight;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\np:nth-child(4) {\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n}\r\n\r\np:nth-child(5) {\r\n    -webkit-animation-delay: 0.8s;\r\n            animation-delay: 0.8s;\r\n}\r\n\r\np:nth-child(6) {\r\n    -webkit-animation-delay: 1.2s;\r\n            animation-delay: 1.2s;\r\n}\r\n\r\np:nth-child(7) {\r\n    -webkit-animation-delay: 1.6s;\r\n            animation-delay: 1.6s;\r\n}\r\n\r\np:nth-child(8) {\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n\r\n@-webkit-keyframes moveTop {\r\n    from {\r\n        -webkit-transform: translateY(100px);\r\n                transform: translateY(100px);\r\n    }\r\n    to {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes moveTop {\r\n    from {\r\n        -webkit-transform: translateY(100px);\r\n                transform: translateY(100px);\r\n    }\r\n    to {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes movieBottom {\r\n    0% {\r\n        -webkit-transform: translateY(-200px);\r\n                transform: translateY(-200px);\r\n    }\r\n    90% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n    91% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    92% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    93% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    94% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    95% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    96% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    97% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    98% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0);\r\n    }\r\n}\r\n\r\n@keyframes movieBottom {\r\n    0% {\r\n        -webkit-transform: translateY(-200px);\r\n                transform: translateY(-200px);\r\n    }\r\n    90% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n    91% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    92% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    93% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    94% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    95% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    96% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    97% {\r\n        -webkit-transform: rotate(2deg);\r\n                transform: rotate(2deg);\r\n    }\r\n    98% {\r\n        -webkit-transform: rotate(-2deg);\r\n                transform: rotate(-2deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n        -webkit-transform: rotate(0);\r\n                transform: rotate(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moveRight {\r\n    from {\r\n        -webkit-transform: translateX(-140%);\r\n                transform: translateX(-140%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes moveRight {\r\n    from {\r\n        -webkit-transform: translateX(-140%);\r\n                transform: translateX(-140%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moveLeft {\r\n    from {\r\n        -webkit-transform: translateX(140%);\r\n                transform: translateX(140%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes moveLeft {\r\n    from {\r\n        -webkit-transform: translateX(140%);\r\n                transform: translateX(140%);\r\n    }\r\n    to {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n    .backgroundImage {\r\n        top: 180px;\r\n        height: 75%;\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .backgroundImage {\r\n        top: 134px;\r\n        height: 67%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFDQUE2QjtnQkFBN0IsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtRQUN4Qiw0QkFBb0I7Z0JBQXBCLG9CQUFvQjtJQUN4QjtBQUNKOztBQW5DQTtJQUNJO1FBQ0kscUNBQTZCO2dCQUE3Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO1FBQ3hCLDRCQUFvQjtnQkFBcEIsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQVBBO0lBQ0k7UUFDSSxvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUNBQTJCO2dCQUEzQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLG1DQUEyQjtnQkFBM0IsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MiU7XHJcbiAgICB0b3A6IDI2NHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiBvbGRsYWNlO1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0MCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUxlZnQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbW92aWVCb3R0b207XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxuaDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlVG9wO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNDAlKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlUmlnaHQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxucDpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG5wOm50aC1jaGlsZCg1KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDYpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxufVxyXG5cclxucDpudGgtY2hpbGQoNykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG59XHJcblxyXG5wOm50aC1jaGlsZCg4KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVUb3Age1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92aWVCb3R0b20ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xyXG4gICAgfVxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA5MSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgfVxyXG4gICAgOTIlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5MyUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgfVxyXG4gICAgOTQlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgfVxyXG4gICAgOTYlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5NyUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgfVxyXG4gICAgOTglIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTQwJSk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVMZWZ0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNDAlKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICAgICAgdG9wOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA0MjBweCkge1xyXG4gICAgLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICAgICAgdG9wOiAxMzRweDtcclxuICAgICAgICBoZWlnaHQ6IDY3JTtcclxuICAgIH1cclxufSJdfQ== */");

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
    constructor() {
        this.audio = new Audio();
    }
    ngOnInit() {
        this.play();
    }
    ngOnDestroy() {
        this.audio.pause();
    }
    play() {
        this.audio.src = "assets/audio/music.mp3";
        this.audio.play();
        this.audio.volume = 0.05;
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    max-width: 30rem;\r\n    background-color: rgb(175, 171, 169);\r\n}\r\n\r\n.image {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 300px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhr {\r\n    background-color: paleturquoise;\r\n}\r\n\r\n.invalid {\r\n    background-color: pink;\r\n    color: black;\r\n    border-color: red;\r\n    box-shadow: 0 0 0 3px rgb(240, 135, 135);\r\n}\r\n\r\ninput:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4Qyw0Q0FBNEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDE3MSwgMTY5KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDI0MCwgMTM1LCAxMzUpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDEsIDIzMiwgMC43ODgpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_models_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/login.model */ "./src/app/shared/models/login.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/user.action */ "./src/app/store/actions/user.action.ts");






let LoginComponent = class LoginComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.login = new _shared_models_login_model__WEBPACK_IMPORTED_MODULE_3__["Login"](undefined, undefined);
    }
    userLogin() {
        const login = this.login;
        this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["LoginUser"])({ login }));
    }
    register() {
        this.route.navigate(['/product/register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backgroundImage {\r\n    opacity: 0.9;\r\n    position: relative;\r\n    padding: 0;\r\n    z-index: -2;\r\n    left: 15px;\r\n    max-height: 210px;\r\n    min-height: 165px;\r\n}\r\n\r\n.opacity {\r\n    opacity: 0.3;\r\n}\r\n\r\n@media (max-width: 420px) {\r\n    .smartphone {\r\n        max-height: 90px;\r\n        min-height: 50px;\r\n    }\r\n    .smallSreen {\r\n        content: url(\"/assets/photos/sport_girl_fitness_small_screen.jpg\");\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .smartphone {\r\n        max-height: 80px;\r\n        min-height: 50px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0VBQWtFO0lBQ3RFO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kSW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTY1cHg7XHJcbn1cclxuXHJcbi5vcGFjaXR5IHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuc21hcnRwaG9uZSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNtYWxsU3JlZW4ge1xyXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvcGhvdG9zL3Nwb3J0X2dpcmxfZml0bmVzc19zbWFsbF9zY3JlZW4uanBnXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XHJcbiAgICAuc21hcnRwaG9uZSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */");

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let NavbarComponent = class NavbarComponent {
    constructor(store) {
        this.store = store;
        this.unSubscribe = [];
    }
    ngOnInit() {
        this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getPopup"])).subscribe(popupToggle => this.popupToggle = popupToggle, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(console.log(error)))));
    }
    ngOnDestroy() {
        this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());
    }
    login() {
        return !!sessionStorage.getItem('login') ? "account" : "login";
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    max-width: 23rem;\r\n    background-color: rgb(175, 171, 169);\r\n}\r\n\r\n.image {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 250px;\r\n    padding: 0;\r\n    margin: 0;\r\n    opacity: 0.9;\r\n}\r\n\r\nhr {\r\n    background-color: paleturquoise;\r\n}\r\n\r\n.invalid {\r\n    background-color: pink;\r\n    color: black;\r\n    border-color: red;\r\n    box-shadow: 0 0 0 3px rgb(240, 135, 135);\r\n}\r\n\r\ninput:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\n.terms, .terms:focus {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: inherit;\r\n    background-color: inherit;\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    display: none;\r\n}\r\n\r\n.radioMale, .radioFemale {\r\n    background-color: gray;\r\n    display: inline-block;\r\n    width: 70px;\r\n}\r\n\r\n.radioMale:hover, .radioFemale:hover {\r\n    background-color: rgb(61, 55, 61);\r\n    color: darkgrey;\r\n}\r\n\r\ninput[type=\"radio\"]:checked+.radioMale {\r\n    background-color: rgb(117, 194, 245);\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"]:checked+.radioFemale {\r\n    background-color: rgb(252, 218, 242);\r\n    color: rgb(252, 89, 184);\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    display: none;\r\n}\r\n\r\n.checkbox {\r\n    color: rgb(0, 60, 255);\r\n}\r\n\r\nsmall {\r\n    display: block;\r\n}\r\n\r\n.width{\r\n    width: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDE3MSwgMTY5KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDI0MCwgMTM1LCAxMzUpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDEsIDIzMiwgMC43ODgpO1xyXG59XHJcblxyXG4udGVybXMsIC50ZXJtczpmb2N1cyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA2MCwgMjUzKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYWRpb01hbGUsIC5yYWRpb0ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5yYWRpb01hbGU6aG92ZXIsIC5yYWRpb0ZlbWFsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDU1LCA2MSk7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKy5yYWRpb01hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTk0LCAyNDUpO1xyXG4gICAgY29sb3I6IHJnYig1NiwgNjAsIDI1Myk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKy5yYWRpb0ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTgsIDI0Mik7XHJcbiAgICBjb2xvcjogcmdiKDI1MiwgODksIDE4NCk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gICAgY29sb3I6IHJnYigwLCA2MCwgMjU1KTtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53aWR0aHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let RegisterComponent = class RegisterComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](undefined, undefined, undefined, undefined, undefined);
    }
    createUser() {
        const user = this.user;
        this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["CreateUser"])({ user }));
    }
    showTerms() {
        this.terms = !this.terms;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



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

/***/ "./src/app/shared/models/login.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/login.model.ts ***!
  \**********************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
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
    constructor(egg, bread, tuna, meat, cheese, cottage, quinoa, almonds, powder, gainer, id) {
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
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(username, password, confirmPassword, gender, weight, id) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.gender = gender;
        this.weight = weight;
        this.id = id;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/guards */ "./src/app/store/guards/index.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../register/register.component */ "./src/app/register/register.component.ts");










// const routes: Routes = [
//   { path: '', component: HomeComponent, canActivate: guards },
//   { path: 'product', loadChildren: () => import('./product.module').then(m => m.ProductModule) },
//   { path: '**', redirectTo: 'product/home', pathMatch: 'full' }
// ];
const routes = [
    {
        path: 'product', children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: _store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"] },
            { path: 'favorite', component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteComponent"], canActivate: _store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"] },
            { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"], canActivate: _store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
            { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"] }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProteinService = class ProteinService {
    constructor(http) {
        this.http = http;
        this.URL = "https://protein-757b1.firebaseio.com/proteins/";
        this.endURL = ".json";
    }
    createProtein(userId, protein) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.post(url, protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
    // Firebase database request, don't have any straight way (api)
    getProteins(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
            let proteins = [];
            Object.entries(result).map(value => {
                value[1].id = value[0];
                proteins.push(value[1]);
            });
            return proteins;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
    updateProtein(userId, protein) {
        const { id } = protein, proteinToUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](protein, ["id"]);
        const url = `${this.URL}/${userId}/${id}${this.endURL}`;
        return this.http.put(url, proteinToUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
    deleteProtein(userId, proteinId) {
        const url = `${this.URL}/${userId}/${proteinId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
    deleteAllProteins(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
};
ProteinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProteinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProteinService);



/***/ }),

/***/ "./src/app/shared/services/showCalculator.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/showCalculator.ts ***!
  \***************************************************/
/*! exports provided: showCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCalculator", function() { return showCalculator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let showCalculator = class showCalculator {
    constructor() { }
    calculateProtein(protein, egg) {
        let sum = 0;
        if (egg && egg.amount && egg.sizeEgg) {
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
        return Number.parseFloat(sum.toFixed(4));
    }
};
showCalculator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], showCalculator);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URL = "https://protein-757b1.firebaseio.com/users";
        this.endURL = ".json";
    }
    createUser(user) {
        const url = this.URL + this.endURL;
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    getAllUsers() {
        const url = this.URL + this.endURL;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    // Firebase database request, don't have any straight way (api)
    login(login) {
        const url = this.URL + this.endURL;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    getUser(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    updateUser(user) {
        const { id } = user, userToUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](user, ["id"]);
        const url = `${this.URL}/${id}${this.endURL}`;
        return this.http.put(url, userToUpdate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
    deleteUser(userId) {
        const url = `${this.URL}/${userId}${this.endURL}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json())));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout, CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["UpdateProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["UpdateProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["UpdateProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteins", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsFail", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsSuccess", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinLogout", function() { return _protein_action__WEBPACK_IMPORTED_MODULE_1__["ProteinLogout"]; });

/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.action */ "./src/app/store/actions/user.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["CreateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["CreateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoadUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoginUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["LoginUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UpdateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserFail", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["DeleteUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserSuccess", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["DeleteUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdated", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UserLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOn", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UserPopupOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOff", function() { return _user_action__WEBPACK_IMPORTED_MODULE_2__["UserPopupOff"]; });






/***/ }),

/***/ "./src/app/store/actions/protein.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/protein.action.ts ***!
  \*************************************************/
/*! exports provided: LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout */
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const LoadProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadProteinsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadProteinsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load Proteins Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const AddProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Add Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProtein = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProteinFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteProteinSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete Protein Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteAllProteins = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete All Proteins', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteAllProteinsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete All Proteins Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteAllProteinsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete All Proteins Success');
const ProteinLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Protein Logout');


/***/ }),

/***/ "./src/app/store/actions/user.action.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/user.action.ts ***!
  \**********************************************/
/*! exports provided: CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff */
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const CreateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Create User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const CreateUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Create User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const CreateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Create User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoadUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Load User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Login User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoginUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Login User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const LoginUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Login User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const UpdateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Update User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const DeleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] Delete User Success');
const UserUpdated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] User Updated');
const UserLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] User Logout');
const UserPopupOn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] User Popup On');
const UserPopupOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Products] User Popup Off');


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _protein_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protein.effect */ "./src/app/store/effects/protein.effect.ts");



const effects = [_user_effects__WEBPACK_IMPORTED_MODULE_1__["UserEffects"], _protein_effect__WEBPACK_IMPORTED_MODULE_2__["ProteinEffect"]];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_protein_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/protein.service */ "./src/app/shared/services/protein.service.ts");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");







let ProteinEffect = class ProteinEffect {
    constructor(actions$, proteinService) {
        this.actions$ = actions$;
        this.proteinService = proteinService;
        this.loadProteins$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["LoadProteins"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.getProteins(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(proteins => _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["LoadProteinsSuccess"]({ proteins })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["LoadProteinsFail"](error)))))));
        this.createProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["AddProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.createProtein(action.userId, action.protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userId) => {
            const protein = action.protein;
            protein.id = userId.name;
            return _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["AddProteinSuccess"]({ protein });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["AddProteinFail"](error)))))));
        this.updateProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["UpdateProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.updateProtein(action.userId, action.protein).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["UpdateProteinSuccess"]({ protein: action.protein })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["UpdateProteinFail"](error)))))));
        this.deleteProtein$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteProtein"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.deleteProtein(action.userId, action.proteinId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteProteinSuccess"]({ proteinId: action.proteinId })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteProteinFail"](error)))))));
        this.deleteAllproteins$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteAllProteins"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.proteinService.deleteAllProteins(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteAllProteinsSuccess"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_6__["DeleteAllProteinsFail"](error)))))));
    }
};
ProteinEffect.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: src_app_shared_services_protein_service__WEBPACK_IMPORTED_MODULE_5__["ProteinService"] }
];
ProteinEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProteinEffect);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");
/* harmony import */ var _actions_protein_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/protein.action */ "./src/app/store/actions/protein.action.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");









let UserEffects = class UserEffects {
    constructor(actions$, userService, router) {
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        this.loadUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoadUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.getUser(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            user.id = action.userId;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoadUserSuccess"]({ user: user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoadUserFail"](error)))))));
        this.createUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["CreateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.createUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((userId) => {
            this.router.navigate(['product/login']);
            const { user } = action;
            user.id = userId.name;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_6__["CreateUserSuccess"]({ user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["CreateUserFail"](error)))))));
        this.loginUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.login(action.login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            const userId = user.id;
            this.router.navigate(['product/account']);
            return [_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoginUserSuccess"]({ user }), _actions_protein_action__WEBPACK_IMPORTED_MODULE_7__["LoadProteins"]({ userId })];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["LoginUserFail"](error)))))));
        this.updateUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["UpdateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.updateUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            user.id = action.user.id;
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_6__["UpdateUserSuccess"]({ user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["UpdateUserFail"](error)))))));
        this.deleteUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["DeleteUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(action => this.userService.deleteUser(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            this.router.navigate(["product/home"]);
            return _actions_user_action__WEBPACK_IMPORTED_MODULE_6__["DeleteUserSuccess"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_7__["DeleteProteinFail"](error)))))));
    }
};
UserEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserEffects);



/***/ }),

/***/ "./src/app/store/guards/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/guards/index.ts ***!
  \***************************************/
/*! exports provided: guards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.guard */ "./src/app/store/guards/users.guard.ts");
/* harmony import */ var _proteins_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proteins.guard */ "./src/app/store/guards/proteins.guard.ts");



const guards = [_users_guard__WEBPACK_IMPORTED_MODULE_1__["UsersGuard"], _proteins_guard__WEBPACK_IMPORTED_MODULE_2__["ProteinsGuard"]];


/***/ }),

/***/ "./src/app/store/guards/proteins.guard.ts":
/*!************************************************!*\
  !*** ./src/app/store/guards/proteins.guard.ts ***!
  \************************************************/
/*! exports provided: ProteinsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinsGuard", function() { return ProteinsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/app/store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProteinsGuard = class ProteinsGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        return this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false)));
    }
    checkStore() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_index__WEBPACK_IMPORTED_MODULE_4__["getProteinLoaded"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(loaded => {
            const userId = sessionStorage.getItem('login');
            if (!loaded && userId)
                this.store.dispatch(_index__WEBPACK_IMPORTED_MODULE_4__["LoadProteins"]({ userId }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    }
};
ProteinsGuard.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ProteinsGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProteinsGuard);



/***/ }),

/***/ "./src/app/store/guards/users.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/store/guards/users.guard.ts ***!
  \*********************************************/
/*! exports provided: UsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersGuard", function() { return UsersGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/app/store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UsersGuard = class UsersGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        return this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false)));
    }
    checkStore() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_index__WEBPACK_IMPORTED_MODULE_4__["getUserLoaded"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(loaded => {
            const userId = sessionStorage.getItem('login');
            if (!loaded && userId)
                this.store.dispatch(_index__WEBPACK_IMPORTED_MODULE_4__["LoadUser"]({ userId }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    }
};
UsersGuard.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UsersGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersGuard);



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, getProductsState, LoadProteins, LoadProteinsFail, LoadProteinsSuccess, AddProtein, AddProteinFail, AddProteinSuccess, UpdateProtein, UpdateProteinFail, UpdateProteinSuccess, DeleteProtein, DeleteProteinFail, DeleteProteinSuccess, DeleteAllProteins, DeleteAllProteinsFail, DeleteAllProteinsSuccess, ProteinLogout, CreateUser, CreateUserFail, CreateUserSuccess, LoadUser, LoadUserFail, LoadUserSuccess, LoginUser, LoginUserFail, LoginUserSuccess, UpdateUser, UpdateUserFail, UpdateUserSuccess, DeleteUser, DeleteUserFail, DeleteUserSuccess, UserUpdated, UserLogout, UserPopupOn, UserPopupOff, getUserState, getUser, getUserLoaded, getUserUpdated, getPopup, effects, getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getSelectedProtein */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProtein", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProtein"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteProteinSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteProteinSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteins", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteinsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteAllProteinsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteAllProteinsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProteinLogout", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ProteinLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CreateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["CreateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoginUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoginUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DeleteUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserUpdated", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLogout", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UserLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOn", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UserPopupOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPopupOff", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UserPopupOff"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["getProductsState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getUserLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getUserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProteins", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAllProteins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProteinsEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProteinsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedProtein", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedProtein"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_4__["effects"]; });








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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _protein_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protein.reducer */ "./src/app/store/reducers/protein.reducer.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/reducers/user.reducer.ts");




;
const reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"],
    protein: _protein_reducer__WEBPACK_IMPORTED_MODULE_2__["proteinReducer"]
};
const getProductsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("products");


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
const proteinReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["LoadProteinsSuccess"], (state, action) => {
    const { proteins } = action;
    return Object.assign({}, adapter.addAll(proteins, state), { loaded: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["ProteinLogout"], () => {
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["AddProteinSuccess"], (state, action) => {
    const { protein } = action;
    return adapter.addOne(protein, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProteinSuccess"], (state, action) => {
    const { protein } = action;
    const { id } = protein, newProtein = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](protein, ["id"]);
    const changes = Object.assign({ id }, state.entities[id] = newProtein);
    const update = { id, changes };
    return adapter.updateOne(update, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProteinSuccess"], (state, action) => {
    const { proteinId } = action;
    return adapter.removeOne(proteinId, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteAllProteinsSuccess"], () => {
    return initialState;
}));
const { selectEntities, selectAll } = adapter.getSelectors();
const getAllProteins = selectAll;
const getProteinsEntities = selectEntities;
const getProteinLoaded = (state) => state.loaded;


/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, userReducer, getUser, getUserLoaded, getUserUpdated, getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return getUserLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return getUserUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/store/actions/user.action.ts");



const initialState = {
    user: null,
    loaded: false,
    updated: false,
    popup: false
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["LoadUserSuccess"], (state, action) => {
    const { user } = action;
    return Object.assign({}, state, { loaded: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["LoginUserFail"], (state) => {
    alert("Your username and password don't match!\nPlease try again.");
    return state;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UserLogout"], () => {
    sessionStorage.removeItem("login");
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UserPopupOn"], (state) => {
    return Object.assign({}, state, { popup: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UserPopupOff"], (state) => {
    return Object.assign({}, state, { popup: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["CreateUserSuccess"], (state) => {
    alert("Your user has been created success!");
    return state;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["LoginUserSuccess"], (state, action) => {
    const { user } = action;
    sessionStorage.setItem("login", user.id);
    return Object.assign({}, state, { loaded: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UpdateUserSuccess"], (state, action) => {
    const { user } = action;
    return Object.assign({}, state, { updated: true, user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["DeleteUserSuccess"], () => {
    sessionStorage.removeItem("login");
    return initialState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UserUpdated"], (state) => {
    return Object.assign({}, state, { updated: false });
}));
const getUser = (state) => state.user;
const getUserLoaded = (state) => state.loaded;
const getUserUpdated = (state) => state.updated;
const getPopup = (state) => state.popup;


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: getUserState, getUser, getUserLoaded, getUserUpdated, getPopup, getProteinState, getAllProteins, getProteinLoaded, getProteinsEntities, getSelectedProtein */
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

/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.selectors */ "./src/app/store/selectors/user.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_2__["getPopup"]; });






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

/***/ "./src/app/store/selectors/user.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/user.selectors.ts ***!
  \***************************************************/
/*! exports provided: getUserState, getUser, getUserLoaded, getUserUpdated, getPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLoaded", function() { return getUserLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserUpdated", function() { return getUserUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return getPopup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");




const getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getProductsState"], (userState) => userState.user);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["getUser"]);
const getUserLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["getUserLoaded"]);
const getUserUpdated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["getUserUpdated"]);
const getPopup = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["getPopup"]);


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

module.exports = __webpack_require__(/*! C:\Users\Lichay\gitStudio\AngularRepo\Projects\ProteinNutrition\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map