function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/actions/index */
    "./src/app/store/actions/index.ts");
    /* harmony import */


    var _store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/selectors/user.selectors */
    "./src/app/store/selectors/user.selectors.ts");
    /* harmony import */


    var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AccountComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You are try to delete your account!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please confirm!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_div_2_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.deleteAccount(user_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_div_2_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.deleteAccountSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_div_0_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.username);
      }
    }

    function AccountComponent_div_0_input_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_input_21_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.nameToggle("username");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.allowToEdit());
      }
    }

    function AccountComponent_div_0_i_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 47);
      }
    }

    function AccountComponent_div_0_div_34_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "******** ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_div_34_span_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r33.showPasswordSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_div_0_div_34_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_div_34_span_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r35.showPasswordSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r1.password, " ");
      }
    }

    function AccountComponent_div_0_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountComponent_div_0_div_34_span_1_Template, 5, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountComponent_div_0_div_34_span_2_Template, 5, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.showPasswordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showPasswordToggle);
      }
    }

    function AccountComponent_div_0_input_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_input_35_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r38.nameToggle("password");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.allowToEdit());
      }
    }

    function AccountComponent_div_0_span_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.confirmPassword);
      }
    }

    function AccountComponent_div_0_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
      }
    }

    function AccountComponent_div_0_i_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 47);
      }
    }

    function AccountComponent_div_0_span_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.gender);
      }
    }

    function AccountComponent_div_0_input_65_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_input_65_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.nameToggle("gender");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.allowToEdit());
      }
    }

    function AccountComponent_div_0_i_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 47);
      }
    }

    function AccountComponent_div_0_span_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.weight);
      }
    }

    function AccountComponent_div_0_input_85_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_input_85_Template_input_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r45.nameToggle("weight");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r21.allowToEdit());
      }
    }

    function AccountComponent_div_0_i_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 47);
      }
    }

    function AccountComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountComponent_div_0_div_2_Template, 9, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.deleteAccountSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your user");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccountComponent_div_0_Template_form_ngSubmit_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var user_r1 = ctx.ngIf;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.updateUser(user_r1, _r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Username: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccountComponent_div_0_span_20_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccountComponent_div_0_input_21_Template, 1, 1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Must to enter only three letters at least");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.newUser.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.cancelTogglesOff(_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccountComponent_div_0_i_30_Template, 1, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AccountComponent_div_0_div_34_Template, 3, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AccountComponent_div_0_input_35_Template, 1, 1, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Must to enter eight letters at least.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(one upper case one lower case and a number)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.newUser.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Confirm: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AccountComponent_div_0_span_47_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AccountComponent_div_0_span_48_Template, 1, 0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Your passwords isn't match!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Please try again.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.newUser.confirmPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.cancelTogglesOff(_r10, _r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AccountComponent_div_0_i_60_Template, 1, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Gender: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AccountComponent_div_0_span_64_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AccountComponent_div_0_input_65_Template, 1, 1, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.newUser.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.newUser.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.cancelTogglesOff();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AccountComponent_div_0_i_80_Template, 1, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Weight: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AccountComponent_div_0_span_84_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, AccountComponent_div_0_input_85_Template, 1, 1, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Your weight must be greater than zero .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_89_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.newUser.weight = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_92_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.cancelTogglesOff(_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AccountComponent_div_0_i_94_Template, 1, 0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_96_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.editToggleOn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_0_Template_input_click_97_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.editToggleOff();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.deleteToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editToggle && !ctx_r0.usernameToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.usernameToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r6.untouched || _r6.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r6.invalid && _r6.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r6.invalid || ctx_r0.updateToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateToggle && ctx_r0.usernameToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editToggle && !ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r10.untouched || _r10.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r10.invalid && _r10.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editToggle && !ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r13.untouched || _r13.valid && _r13.value === _r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r13.touched && _r13.value !== _r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.confirmPassword)("disabled", _r10.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r13.value !== _r10.value || _r10.invalid || ctx_r0.updateToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateToggle && ctx_r0.passwordToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editToggle && !ctx_r0.genderToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.genderToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r17.invalid && _r18.invalid || ctx_r0.updateToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateToggle && ctx_r0.genderToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editToggle && !ctx_r0.weightToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && !ctx_r0.weightToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r22.untouched || _r22.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r22.invalid && _r22.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.newUser.weight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r22.invalid || ctx_r0.updateToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateToggle && ctx_r0.weightToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r0.editToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx_r0.editToggle || ctx_r0.editToggle && ctx_r0.allowToEdit());
      }
    }

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(store, router) {
        _classCallCheck(this, AccountComponent);

        this.store = store;
        this.router = router; // unSubscribe list

        this.unSubscribe = [];
        var isLogin = !!sessionStorage.getItem("login");
        if (!isLogin) this.router.navigate(["product/login"]);
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](undefined, undefined, undefined, undefined, undefined);
          this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__["getUser"]));
          this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__["getUserUpdated"])).subscribe(function (userUpdated) {
            return _this.updateToggle = userUpdated;
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(console.log(error));
          })));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unSubscribe.forEach(function (subscribe) {
            return subscribe.unsubscribe();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["UserLogout"])());
          this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["ProteinLogout"])());
          this.router.navigate(["product/home"]);
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(userId) {
          // Should be one function , FireBase (data base) doesn't save proteins id as a foreign key.
          this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"])({
            userId: userId
          }));
          this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["DeleteAllProteins"])({
            userId: userId
          }));
        }
      }, {
        key: "editToggleOn",
        value: function editToggleOn() {
          this.editToggle = true;
        }
      }, {
        key: "editToggleOff",
        value: function editToggleOff() {
          this.editToggle = false;
          this.allTogglesOff();
        } // check if one of Toggles is on

      }, {
        key: "allowToEdit",
        value: function allowToEdit() {
          if (this.editToggle && this.findAvailableToken()) return true;
          return false;
        } // check if one of Toggles is on and return toggle name

      }, {
        key: "findAvailableToken",
        value: function findAvailableToken() {
          if (this.usernameToggle) return "username";
          if (this.passwordToggle) return "password";
          if (this.genderToggle) return "gender";
          if (this.weightToggle) return "weight";
          return null;
        }
      }, {
        key: "deleteAccountSwitch",
        value: function deleteAccountSwitch() {
          this.deleteToggle = !this.deleteToggle;
        }
      }, {
        key: "showPasswordSwitch",
        value: function showPasswordSwitch() {
          this.showPasswordToggle = !this.showPasswordToggle;
        }
      }, {
        key: "nameToggle",
        value: function nameToggle(toggleName) {
          this.newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](undefined, undefined, undefined, undefined, undefined);
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
      }, {
        key: "cancelTogglesOff",
        value: function cancelTogglesOff(firstInput, secondInput) {
          if (firstInput) firstInput.reset();
          if (secondInput) secondInput.reset();
          this.allTogglesOff();
        }
      }, {
        key: "allTogglesOff",
        value: function allTogglesOff() {
          this.usernameToggle = false;
          this.passwordToggle = false;
          this.genderToggle = false;
          this.weightToggle = false;
        }
      }, {
        key: "updateUser",
        value: function updateUser(oldUser, userForm) {
          var _this2 = this;

          var valueToUpdate = this.findAvailableToken();
          var user = Object.assign({}, oldUser);
          var userValue = Object.assign({}, this.newUser); // Update the user with new value

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

          this.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"])({
            user: user
          }));
          setTimeout(function () {
            _this2.store.dispatch(Object(_store_actions_index__WEBPACK_IMPORTED_MODULE_3__["UserUpdated"])());

            _this2.allTogglesOff();

            if (valueToUpdate != "gender") userForm.controls[valueToUpdate].reset();
          }, 2000);
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "text-center"], [1, "text-primary", "m-1", 3, "click"], [1, "fas", "fa-sign-out-alt"], [1, "text-danger", "m-1", 3, "disabled", "click"], [1, "fas", "fa-minus-circle"], [1, "container"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "row", "justify-content-center"], [1, "col-4", "col-sm-3", "col-md-2", "col-lg-1", "col-xl-1", "p-0"], ["class", "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0", 4, "ngIf"], ["type", "button", "value", "\uF4FF Edit username", "class", "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas", 3, "disabled", "click", 4, "ngIf"], [1, "col-5", "col-sm-4", "col-md-3", "col-lg-2", "col-xl-2", "p-0"], [1, "text-danger"], ["type", "text", "title", "Enter an username", "placeholder", "Enter an username", "name", "username", "required", "", "pattern", "^[a-zA-Z]{3,}$", 1, "rounded-pill", "border", "border-primary", "text-center", "inputValue", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [1, "row", "justify-content-around", "p-1"], ["type", "button", "value", "\uF410 Cancel", 1, "far", "text-danger", 3, "click"], ["type", "submit", "value", "\uF0C7 Save", 1, "btn", "far", "text-primary", 3, "disabled"], ["class", "fas fa-check text-success", 4, "ngIf"], ["type", "button", "value", "\uF4FF Edit password", "class", "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas", 3, "disabled", "click", 4, "ngIf"], ["type", "password", "title", "Enter a password", "placeholder", "Enter a password", "name", "password", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", 1, "rounded-pill", "border", "border-primary", "text-center", "inputValue", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "password", "title", "Enter again a password to confirm", "placeholder", "Enter a password", "name", "confirmPassword", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", 1, "rounded-pill", "border", "border-primary", "text-center", "inputValue", 3, "ngModel", "disabled", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "button", "value", "\uF4FF Edit gender", "class", "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas", 3, "disabled", "click", 4, "ngIf"], ["type", "radio", "name", "male", "value", "Male", "required", "", 3, "ngModel", "ngModelChange"], ["male", "ngModel"], [1, "rounded-pill", "text-center", "m-1", "radioMale"], [1, "fas", "fa-male", "m-1"], ["type", "radio", "name", "female", "value", "Female", "required", "", 3, "ngModel", "ngModelChange"], ["female", "ngModel"], [1, "rounded-pill", "text-center", "m-1", "radioFemale"], [1, "fas", "fa-female", "m-1"], ["type", "button", "value", "\uF4FF Edit weight", "class", "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0 fas", 3, "disabled", "click", 4, "ngIf"], ["type", "number", "title", "Enter your weight", "placeholder", "Enter a weight", "name", "weight", "required", "", "pattern", "^[1-9]\\d*$", 1, "rounded-pill", "border", "border-primary", "text-center", "inputValue", 3, "ngModel", "ngModelChange"], ["weight", "ngModel"], ["type", "button", "value", "\uF4FF Edit account", 1, "fas", "text-primary", 3, "click"], ["type", "button", "value", "\uF410 Cancel edit", 1, "far", "text-danger", 3, "click"], [1, "row", "justify-content-center", "m-0", "img"], ["src", "../../assets/photos/person-holding-black-and-silver-steel.jpg", 1, "col-11", "col-md-9", "col-lg-8", "col-xl-6"], [1, "card", "show"], [1, "card-body"], ["type", "button", "value", "\uF2ED Delete", 1, "fas", "p-1", "btn", "text-danger", 3, "click"], ["type", "button", "value", "\uF0E2 Cancel", 1, "fas", "p-1", "btn", "text-primary", 3, "click"], ["type", "button", "value", "\uF4FF Edit username", 1, "col-5", "col-sm-4", "col-md-3", "col-lg-2", "col-xl-2", "p-0", "fas", 3, "disabled", "click"], [1, "fas", "fa-check", "text-success"], [3, "click"], [1, "fas", "fa-eye", "eye"], [1, "fas", "fa-eye-slash", "eye"], ["type", "button", "value", "\uF4FF Edit password", 1, "col-5", "col-sm-4", "col-md-3", "col-lg-2", "col-xl-2", "p-0", "fas", 3, "disabled", "click"], ["type", "button", "value", "\uF4FF Edit gender", 1, "col-5", "col-sm-4", "col-md-3", "col-lg-2", "col-xl-2", "p-0", "fas", 3, "disabled", "click"], ["type", "button", "value", "\uF4FF Edit weight", 1, "col-5", "col-sm-4", "col-md-3", "col-lg-2", "col-xl-2", "p-0", "fas", 3, "disabled", "click"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountComponent_div_0_Template, 100, 59, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\r\n\r\np[_ngcontent-%COMP%], label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    color: rgb(190, 231, 238);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    background-color: initial;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.radioMale[_ngcontent-%COMP%], .radioFemale[_ngcontent-%COMP%] {\r\n    background-color: rgb(61, 55, 61);\r\n    display: inline-block;\r\n    width: 70px;\r\n}\r\n\r\n.radioMale[_ngcontent-%COMP%]:hover, .radioFemale[_ngcontent-%COMP%]:hover {\r\n    background-color: gray;\r\n    color: rgb(39, 29, 29);\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked + .radioMale[_ngcontent-%COMP%] {\r\n    background-color: rgb(117, 194, 245);\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked + .radioFemale[_ngcontent-%COMP%] {\r\n    background-color: rgb(252, 218, 242);\r\n    color: rgb(252, 89, 184);\r\n}\r\n\r\n.inputValue[_ngcontent-%COMP%]:hover, .inputValue[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n    color: rgb(47, 120, 255);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n}\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.eye[_ngcontent-%COMP%] {\r\n    color: rgb(122, 130, 241);\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 1;\r\n    transform: translate(-50%, -50%);\r\n    color: seashell;\r\n    background-color: rgb(88, 81, 81);\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    padding: 30px;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    opacity: 0.1;\r\n    -webkit-animation: img 3s forwards ease-in-out;\r\n            animation: img 3s forwards ease-in-out;\r\n}\r\n\r\n@-webkit-keyframes img {\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes img {\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@media(max-width :420px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        margin-top: 15%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUpBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5wLCBsYWJlbCwgc3BhbiwgaDUge1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDIzMSwgMjM4KTtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYWRpb01hbGUsIC5yYWRpb0ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDU1LCA2MSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLnJhZGlvTWFsZTpob3ZlciwgLnJhZGlvRmVtYWxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjogcmdiKDM5LCAyOSwgMjkpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCsucmFkaW9NYWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDE5NCwgMjQ1KTtcclxuICAgIGNvbG9yOiByZ2IoNTYsIDYwLCAyNTMpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCsucmFkaW9GZW1hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjE4LCAyNDIpO1xyXG4gICAgY29sb3I6IHJnYigyNTIsIDg5LCAxODQpO1xyXG59XHJcblxyXG4uaW5wdXRWYWx1ZTpob3ZlciwgLmlucHV0VmFsdWU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDEsIDIzMiwgMC43ODgpO1xyXG4gICAgY29sb3I6IHJnYig0NywgMTIwLCAyNTUpO1xyXG59XHJcblxyXG5pbnB1dDpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZXllIHtcclxuICAgIGNvbG9yOiByZ2IoMTIyLCAxMzAsIDI0MSk7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgODEsIDgxKTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaW1nIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgYW5pbWF0aW9uOiBpbWcgM3MgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW1nIHtcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDo0MjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/favorite/favorite.component.ts":
  /*!************************************************!*\
    !*** ./src/app/favorite/favorite.component.ts ***!
    \************************************************/

  /*! exports provided: FavoriteComponent */

  /***/
  function srcAppFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
      return FavoriteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/actions/protein.action */
    "./src/app/store/actions/protein.action.ts");
    /* harmony import */


    var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/selectors */
    "./src/app/store/selectors/index.ts");
    /* harmony import */


    var _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/models/protein.model */
    "./src/app/shared/models/protein.model.ts");
    /* harmony import */


    var _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/models/egg.model */
    "./src/app/shared/models/egg.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/services/showCalculator */
    "./src/app/shared/services/showCalculator.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function FavoriteComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You must login to see your favorite list.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You can click ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.loginPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " to move login page");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_3_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "grams");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_3_label_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "handful");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_3_label_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "slices");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_3_label_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "portions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FavoriteComponent_div_3_div_6_div_3_div_3_Template_input_keyup_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var proteinKeyValue_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return proteinKeyValue_r15.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FavoriteComponent_div_3_div_6_div_3_div_3_label_12_Template, 2, 0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FavoriteComponent_div_3_div_6_div_3_div_3_label_13_Template, 2, 0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FavoriteComponent_div_3_div_6_div_3_div_3_label_14_Template, 2, 0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FavoriteComponent_div_3_div_6_div_3_div_3_label_15_Template, 2, 0, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proteinKeyValue_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinKeyValue_r15.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", proteinKeyValue_r15.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r16.editToggle !== i_r9 || ctx_r16.addToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinKeyValue_r15.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", proteinKeyValue_r15.key + i_r9)("value", proteinKeyValue_r15.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key === "tuna" || proteinKeyValue_r15.key === "meat" || proteinKeyValue_r15.key === "cheese" || proteinKeyValue_r15.key === "cottage" || proteinKeyValue_r15.key === "quinoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key === "almonds");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key === "bread");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key === "powder" || proteinKeyValue_r15.key === "gainer");
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_4_small_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Must enter an amount and size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FavoriteComponent_div_3_div_6_div_3_div_4_small_18_Template, 2, 0, "small", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FavoriteComponent_div_3_div_6_div_3_div_4_Template_input_keyup_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var proteinKeyValue_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return proteinKeyValue_r15.value.amount;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "large");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proteinKeyValue_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinKeyValue_r15.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinKeyValue_r15.value.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinKeyValue_r15.value.sizeEgg);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r17.editToggle !== i_r9 || ctx_r17.addToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.value.sizeEgg === "empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "amount" + i_r9)("value", proteinKeyValue_r15.value.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "sizeEgg" + i_r9)("value", proteinKeyValue_r15.value.sizeEgg);
      }
    }

    function FavoriteComponent_div_3_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_3_Template_input_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var proteinKeyValue_r15 = ctx.$implicit;

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.deleteOneProtein(user_r4.id, protein_r8.id, proteinKeyValue_r15.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoriteComponent_div_3_div_6_div_3_div_3_Template, 16, 11, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FavoriteComponent_div_3_div_6_div_3_div_4_Template, 33, 10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proteinKeyValue_r15 = ctx.$implicit;

        var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("eggCard", proteinKeyValue_r15.key === "egg" && ctx_r10.editToggle === i_r9 && !ctx_r10.addToggle)("d-none", proteinKeyValue_r15.key === "id");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r10.editToggle !== i_r9 || ctx_r10.addToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key !== "egg");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proteinKeyValue_r15.key === "egg");
      }
    }

    function FavoriteComponent_div_3_div_6_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_6_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r38.show(user_r4, protein_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_6_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r42.deleteProteinSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_6_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r43.editToggleSwitch(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_7_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r45.saveNewUpdate(user_r4.id, protein_r8.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_7_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r49.cancelEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_7_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r50.addToggleSwitch(protein_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_8_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Your list full");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_div_8_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var proteinList_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proteinList_r54);
      }
    }

    function FavoriteComponent_div_3_div_6_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FavoriteComponent_div_3_div_6_div_8_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r55.add = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FavoriteComponent_div_3_div_6_div_8_option_2_Template, 2, 0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoriteComponent_div_3_div_6_div_8_option_3_Template, 2, 1, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_8_Template_input_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r57.cancelEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_8_Template_input_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r58.addProtein(user_r4.id, protein_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.add);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.addList == null ? null : ctx_r13.addList.length) === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.addList);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r13.addList == null ? null : ctx_r13.addList.length) === 0);
      }
    }

    function FavoriteComponent_div_3_div_6_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You try to delete a protein!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please confirm!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_10_Template_input_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var protein_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r61.deleteProteinConfirmed(user_r4.id, protein_r8.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_6_div_10_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r65.deleteProteinSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoriteComponent_div_3_div_6_div_3_Template, 5, 8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FavoriteComponent_div_3_div_6_div_6_Template, 5, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FavoriteComponent_div_3_div_6_div_7_Template, 5, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FavoriteComponent_div_3_div_6_div_8_Template, 7, 4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FavoriteComponent_div_3_div_6_div_10_Template, 9, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var protein_r8 = ctx.$implicit;
        var i_r9 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, protein_r8));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("animationBlock", ctx_r5.animationBlockToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.editToggle !== i_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.editToggle === i_r9 && !ctx_r5.addToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.editToggle === i_r9 && ctx_r5.addToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.deleteToggle);
      }
    }

    function FavoriteComponent_div_3_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.showMessageLogin);
      }
    }

    function FavoriteComponent_div_3_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Must enter a positive numbers");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_div_16_Template_input_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r66.updateToggleSwitch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FavoriteComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Your favorite lists");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FavoriteComponent_div_3_div_6_Template, 11, 9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FavoriteComponent_div_3_p_14_Template, 2, 1, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteComponent_div_3_Template_input_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r68.cancelShow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FavoriteComponent_div_3_div_16_Template, 6, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r4 = ctx.ngIf;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome Back - ", user_r4.username, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx_r1.proteins$));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.updateToggle);
      }
    }

    var FavoriteComponent = /*#__PURE__*/function () {
      function FavoriteComponent(store, router, showCalculator) {
        _classCallCheck(this, FavoriteComponent);

        this.store = store;
        this.router = router;
        this.showCalculator = showCalculator; // Messages to user

        this.showMessage = "";
        this.showMessageLogin = "";
      }

      _createClass(FavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addList = [];
          this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["getUser"]));
          this.proteins$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllProteins"]));
        } // Add one element inside existing protein

      }, {
        key: "addProtein",
        value: function addProtein(userId, protein) {
          var valueToAdd = this.add;
          if (valueToAdd === undefined) return;

          if (valueToAdd === 'egg') {
            var egg = new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_6__["Egg"](0, 'empty');
            protein.egg = egg;
          } else protein[valueToAdd] = 0;

          this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProtein"])({
            userId: userId,
            protein: protein
          }));
          this.addToggle = false;
        }
      }, {
        key: "saveNewUpdate",
        value: function saveNewUpdate(userId, proteinId) {
          var _this3 = this;

          var index = this.editToggle;
          var protein = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_5__["Protein"]();
          Object.keys(protein).filter(function (key) {
            return key !== 'id' && key !== 'egg';
          }).forEach(function (key) {
            var value = _this3.getInputValue(key, index);

            if (value) protein[key] = value;
          });

          if (this.getInputValue('amount', index) && this.getInputValue('sizeEgg', index)) {
            var amount = Number(this.getInputValue('amount', index));
            var sizeEgg = this.getInputValue('sizeEgg', index);
            var egg = new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_6__["Egg"](amount, sizeEgg);
            protein.egg = egg;
          } // Send clean Object without undefined properties to Store


          Object.keys(protein).forEach(function (key) {
            return !protein[key] && delete protein[key];
          });
          if (!protein.egg || !protein.egg.sizeEgg) delete protein.egg;

          if (this.checkUpdateValidation(protein)) {
            protein.id = proteinId;
            this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["UpdateProtein"])({
              userId: userId,
              protein: protein
            }));
            this.cancelEdit();
          } else this.updateToggle = true;
        }
      }, {
        key: "loginPage",
        value: function loginPage() {
          this.router.navigate(['/product/account/login']);
        }
      }, {
        key: "show",
        value: function show(user, tempProtein) {
          var id = tempProtein.id,
              egg = tempProtein.egg,
              protein = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(tempProtein, ["id", "egg"]);
          var sum = this.showCalculator.calculateProtein(protein, egg);
          var value = user.weight * 2 - sum;
          this.showMessage = "You eat ".concat(sum, " protein approximately.");
          this.showMessageLogin = value > 0 ? "You need more ".concat(value) : 'You Eat enough protein for today good job!';
          this.visibilityOn('show');
        }
      }, {
        key: "cancelShow",
        value: function cancelShow() {
          this.visibilityOff('show');
        }
      }, {
        key: "editToggleSwitch",
        value: function editToggleSwitch(editToggle) {
          this.animationBlockToggle = true;
          this.editToggle = editToggle;
          this.addToggle = undefined;
        }
      }, {
        key: "updateToggleSwitch",
        value: function updateToggleSwitch() {
          this.updateToggle = undefined;
        }
      }, {
        key: "deleteProteinSwitch",
        value: function deleteProteinSwitch() {
          this.deleteToggle = !this.deleteToggle;
        }
      }, {
        key: "addToggleSwitch",
        value: function addToggleSwitch(protein) {
          var tempList = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_5__["Protein"]();
          var addList = [];
          Object.keys(protein).forEach(function (key) {
            return delete tempList[key];
          });
          Object.keys(tempList).forEach(function (key) {
            return addList.push(key);
          });
          this.addToggle = true;
          this.addList = addList;
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          this.editToggle = undefined;
          this.addToggle = undefined;
        }
      }, {
        key: "deleteProteinConfirmed",
        value: function deleteProteinConfirmed(userId, proteinId) {
          this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_3__["DeleteProtein"])({
            userId: userId,
            proteinId: proteinId
          }));
          this.deleteProteinSwitch();
        }
      }, {
        key: "deleteOneProtein",
        value: function deleteOneProtein(userId, proteinId, key) {
          var index = this.editToggle;

          if (key === 'egg') {
            this.deleteElement('amount', index);
            this.deleteElement('sizeEgg', index);
          } else this.deleteElement(key, index);

          this.saveNewUpdate(userId, proteinId);
        }
      }, {
        key: "checkUpdateValidation",
        value: function checkUpdateValidation(protein) {
          var egg = protein.egg,
              pro = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(protein, ["egg"]);
          if (egg && egg.amount < 0) return false;
          var validation = true;
          Object.values(pro).some(function (value) {
            return value < 0 && (validation = false) && true;
          });
          return validation;
        } // Get element value by his id ( id is contain key and index of array -HTML Template- ).

      }, {
        key: "getInputValue",
        value: function getInputValue(key, index) {
          var elementId = key + index;
          var inputElement = document.getElementById(elementId);
          return inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
        }
      }, {
        key: "deleteElement",
        value: function deleteElement(key, index) {
          var elementId = key + index;
          document.getElementById(elementId).remove();
        }
      }, {
        key: "visibilityOn",
        value: function visibilityOn(name) {
          document.getElementById(name).className = "visibility: visible";
        }
      }, {
        key: "visibilityOff",
        value: function visibilityOff(name) {
          document.getElementById(name).className = "visibility: invisible";
        }
      }]);

      return FavoriteComponent;
    }();

    FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) {
      return new (t || FavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_8__["showCalculator"]));
    };

    FavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FavoriteComponent,
      selectors: [["app-favorite"]],
      decls: 5,
      vars: 6,
      consts: [[1, "text-center"], ["class", "disconnected", 4, "ngIf"], ["class", "connected text-center", 4, "ngIf"], [1, "disconnected"], [3, "click"], [1, "connected", "text-center"], [1, "header"], [4, "ngFor", "ngForOf"], ["id", "show", 1, "invisible"], [1, "card", "show"], [1, "card-body"], [4, "ngIf"], ["type", "button", "value", "\uF164", 1, "fas", "showButton", 3, "click"], [1, "inner", "m-0"], [1, "grid", "p-2"], ["class", "card", 3, "eggCard", "d-none", 4, "ngFor", "ngForOf"], [1, "card", "size", "animation"], ["class", "col-12 p-0", 4, "ngIf"], [1, "parallax"], [1, "card"], ["type", "button", "value", "\uF2ED", 1, "fas", "text-danger", "deleteOneProtein", 3, "click"], ["class", "m-0", 4, "ngIf"], [1, "m-0"], [1, "row", "justify-content-center", "m-0"], [1, "col-5", "col-sm-4", "box", "m-1"], [1, "col-1"], [1, "col-12", "p-0"], [1, "col-2"], ["type", "number", "title", "Enter a new value", 1, "text-center", "rounded-pill", "border", "border-white", "inputEdit", "col-4", 3, "id", "value", "keyup"], [1, "d-inline", "col-2"], [1, "col", "smallBox", "p-0", "m-2"], [1, "col-5", "col-sm-4", "box"], [1, "row", "justify-content-center", "m-3"], ["class", "text-primary", 4, "ngIf"], [1, "col-12"], [1, "text-capitalize", "eggSize"], ["type", "number", "title", "Enter a new value", 1, "text-center", "col-4", "rounded-pill", "border", "border-white", "inputEdit", 3, "id", "value", "keyup"], ["title", "Select a new value from list", 1, "text-capitalize", "col-4", 3, "id", "value"], ["value", "S"], ["value", "M"], ["value", "L"], [1, "text-primary"], ["type", "button", "value", "\uF06E Show", 1, "btn", "btn-outline-primary", "rounded-pill", "far", "m-1", "col-8", "col-sm-6", 3, "click"], ["type", "button", "value", "\uF410 Delete", 1, "btn", "btn-outline-danger", "rounded-pill", "far", "m-1", "col-4", "col-sm-3", 3, "click"], ["type", "button", "value", "\uF044 Edit", 1, "btn", "btn-outline-secondary", "rounded-pill", "fas", "m-1", "col-4", "col-sm-3", 3, "click"], ["type", "button", "value", "\uF0C7 Update", 1, "btn", "btn-outline-primary", "rounded-pill", "fas", "m-1", "col-8", "col-sm-6", 3, "click"], ["type", "button", "value", "\uF410 Cancel", 1, "btn", "btn-outline-danger", "rounded-pill", "far", "m-1", "col-4", "col-sm-3", 3, "click"], ["type", "button", "value", "\uF0FE Add", 1, "btn", "btn-outline-success", "rounded-pill", "fas", "m-1", "col-4", "col-sm-3", 3, "click"], [1, "text-capitalize", "text-center", "col-8", "col-sm-6", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "\uF0FE Add", 1, "btn", "btn-outline-success", "rounded-pill", "fas", "m-1", "col-4", "col-sm-3", 3, "disabled", "click"], ["type", "button", "value", "\uF2ED Delete", 1, "fas", "p-1", "btn", "text-danger", 3, "click"], ["type", "button", "value", "\uF0E2 Cancel", 1, "fas", "p-1", "btn", "text-primary", 3, "click"], [1, "card", "update"], ["type", "button", "value", "\uF164", 1, "fas", "updateButton", 3, "click"]],
      template: function FavoriteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavoriteComponent_div_1_Template, 8, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoriteComponent_div_3_Template, 17, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.user$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.user$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"]],
      styles: [".disconnected[_ngcontent-%COMP%] {\r\n    color: crimson;\r\n    padding-top: 80px;\r\n}\r\n\r\n.disconnected[_ngcontent-%COMP%]:hover {\r\n    -webkit-animation: large 3s forwards;\r\n            animation: large 3s forwards;\r\n}\r\n\r\n.connected[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 0.5em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 0;\r\n    outline: 0;\r\n    background-color: inherit;\r\n    color: white;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    min-height: 95px;\r\n    justify-content: center;\r\n}\r\n\r\n.eggCard[_ngcontent-%COMP%] {\r\n    grid-row: 1/3;\r\n    grid-column: 2/3;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n    border: 1px solid rgb(194, 193, 193);\r\n    box-shadow: 0 0 2px 2px rgb(185, 235, 250);\r\n    position: relative;\r\n    cursor: auto;\r\n    z-index: 1;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 0%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    background: linear-gradient(to right, rgb(234, 243, 208), rgb(210, 238, 219));\r\n    transition-duration: 1.5s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]:hover::before {\r\n    width: 100%;\r\n}\r\n\r\n.smallBox[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n    border: 1px solid rgb(238, 193, 193);\r\n    box-shadow: 0 0 2px 2px rgb(243, 203, 195);\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border-radius: 17px;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    outline: 0;\r\n    margin: 5px;\r\n    padding: 1px 15px;\r\n    border-top: 1px dotted rgb(146, 224, 248);\r\n    border-left: 1px solid rgb(161, 227, 247);\r\n    border-bottom: 1px solid rgb(144, 169, 252);\r\n    border-right: 1px solid rgb(96, 161, 236);\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.eggSize[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: start;\r\n    \r\n}\r\n\r\n.inputEdit[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n    margin: 5px;\r\n    background: linear-gradient( to right, rgb(252, 217, 249) 20%, rgb(158, 226, 247));\r\n    box-shadow: 0 0 1px 1px rgb(174, 175, 175);\r\n}\r\n\r\n.size[_ngcontent-%COMP%] {\r\n    width: 450px;\r\n    margin: auto;\r\n}\r\n\r\n.animation[_ngcontent-%COMP%] {\r\n    transform: translateY(450px);\r\n    -webkit-animation: showUp 1.5s forwards;\r\n            animation: showUp 1.5s forwards;\r\n}\r\n\r\n.animationBlock[_ngcontent-%COMP%] {\r\n    transform: translateY(0);\r\n    -webkit-animation: none;\r\n            animation: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, black, white);\r\n    text-shadow: 2px 2px rgb(88, 88, 87);\r\n    height: 130px;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 3;\r\n    transform: translate(-50%, -50%);\r\n    color: rgb(39, 5, 61);\r\n    background: linear-gradient( rgb(153, 183, 240), rgb(97, 214, 243));\r\n}\r\n\r\n.update[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 3;\r\n    transform: translate(-50%, -50%);\r\n    color: rgb(58, 76, 240);\r\n    background: linear-gradient( rgb(250, 176, 213), rgb(240, 75, 124));\r\n}\r\n\r\n.deleteOneProtein[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    outline: 1px;\r\n    padding: 0;\r\n    border: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgb(198, 216, 221);\r\n    border-radius: 30%;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.deleteOneProteinEgg[_ngcontent-%COMP%] {\r\n    right: 1px;\r\n    top: 1px;\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n.showButton[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: rgb(77, 77, 77);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.updateButton[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: rgb(7, 3, 245);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.showButton[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n}\r\n\r\n.updateButton[_ngcontent-%COMP%]:hover {\r\n    color: rgb(111, 5, 182);\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n    background: linear-gradient( rgb(179, 145, 218) 40%, rgb(169, 235, 255), rgb(43, 39, 255));\r\n    min-height: calc(100vh - 230px);\r\n    position: relative;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    position: relative;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: fixed;\r\n    background: url(\"/assets/photos/biceps_black_and_white_body.jpg\") center no-repeat;\r\n    background-size: cover;\r\n    z-index: -1;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n@-webkit-keyframes large {\r\n    to {\r\n        font-size: large;\r\n    }\r\n}\r\n\r\n@keyframes large {\r\n    to {\r\n        font-size: large;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes showUp {\r\n    to {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@keyframes showUp {\r\n    to {\r\n        transform: translateY(0)\r\n    }\r\n}\r\n\r\n@media(max-width:1300px) {\r\n    .grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n}\r\n\r\n@media(max-width:850px) {\r\n    .grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .eggCard[_ngcontent-%COMP%] {\r\n        grid-column: initial;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .inner[_ngcontent-%COMP%] {\r\n        min-height: calc(100vh - 185px);\r\n    }\r\n}\r\n\r\n@media(max-width :420px) {\r\n    .parallax1[_ngcontent-%COMP%] {\r\n        height: auto;\r\n    }\r\n    .size[_ngcontent-%COMP%] {\r\n        width: 290px;\r\n    }\r\n}\r\n\r\n@media(max-width :350px) {\r\n    .size[_ngcontent-%COMP%] {\r\n        width: 310px;\r\n    }\r\n}\r\n\r\n@media(max-height :420px) {\r\n    .parallax1[_ngcontent-%COMP%] {\r\n        height: auto;\r\n    }\r\n    .disconnected[_ngcontent-%COMP%] {\r\n        min-height: 210px;\r\n    }\r\n    .inner[_ngcontent-%COMP%] {\r\n        min-height: calc(100vh - 115px);\r\n    }\r\n}\r\n\r\n@media (max-height: 350px) {\r\n    .inner[_ngcontent-%COMP%] {\r\n        min-height: calc(100vh - 150px);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLDZFQUE2RTtJQUM3RSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrRkFBa0Y7SUFDbEYsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBZTtZQUFmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwRkFBMEY7SUFDMUYsK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtGQUFrRjtJQUNsRixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBSkE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtJQUNuQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO0lBQ25DO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2Nvbm5lY3RlZCB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uZGlzY29ubmVjdGVkOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogbGFyZ2UgM3MgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jb25uZWN0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAwLjVlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogOTVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZWdnQ2FyZCB7XHJcbiAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTQsIDE5MywgMTkzKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJnYigxODUsIDIzNSwgMjUwKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5ib3g6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjM0LCAyNDMsIDIwOCksIHJnYigyMTAsIDIzOCwgMjE5KSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG59XHJcblxyXG4uYm94OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbWFsbEJveCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzgsIDE5MywgMTkzKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHJnYigyNDMsIDIwMywgMTk1KTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDFweCAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2IoMTQ2LCAyMjQsIDI0OCk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNjEsIDIyNywgMjQ3KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTQ0LCAxNjksIDI1Mik7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoOTYsIDE2MSwgMjM2KTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmVnZ1NpemUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAvKiB3aWR0aDogNzBweDsgKi9cclxufVxyXG5cclxuLmlucHV0RWRpdCB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCByZ2IoMjUyLCAyMTcsIDI0OSkgMjAlLCByZ2IoMTU4LCAyMjYsIDI0NykpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiKDE3NCwgMTc1LCAxNzUpO1xyXG59XHJcblxyXG4uc2l6ZSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hbmltYXRpb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ1MHB4KTtcclxuICAgIGFuaW1hdGlvbjogc2hvd1VwIDEuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5hbmltYXRpb25CbG9jayB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibGFjaywgd2hpdGUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiKDg4LCA4OCwgODcpO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IHJnYigzOSwgNSwgNjEpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2IoMTUzLCAxODMsIDI0MCksIHJnYig5NywgMjE0LCAyNDMpKTtcclxufVxyXG5cclxuLnVwZGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogcmdiKDU4LCA3NiwgMjQwKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggcmdiKDI1MCwgMTc2LCAyMTMpLCByZ2IoMjQwLCA3NSwgMTI0KSk7XHJcbn1cclxuXHJcbi5kZWxldGVPbmVQcm90ZWluIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBvdXRsaW5lOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMTYsIDIyMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLmRlbGV0ZU9uZVByb3RlaW5FZ2cge1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuXHJcbi5zaG93QnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi51cGRhdGVCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiByZ2IoNywgMywgMjQ1KTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2hvd0J1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51cGRhdGVCdXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMTEsIDUsIDE4Mik7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNzksIDE0NSwgMjE4KSA0MCUsIHJnYigxNjksIDIzNSwgMjU1KSwgcmdiKDQzLCAzOSwgMjU1KSk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBhcmFsbGF4OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3Bob3Rvcy9iaWNlcHNfYmxhY2tfYW5kX3doaXRlX2JvZHkuanBnXCIpIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGFyZ2Uge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvd1VwIHtcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMzAwcHgpIHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KSB7XHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICAuZWdnQ2FyZCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmlubmVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTg1cHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDo0MjBweCkge1xyXG4gICAgLnBhcmFsbGF4MSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnNpemUge1xyXG4gICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aCA6MzUwcHgpIHtcclxuICAgIC5zaXplIHtcclxuICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtaGVpZ2h0IDo0MjBweCkge1xyXG4gICAgLnBhcmFsbGF4MSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmRpc2Nvbm5lY3RlZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5uZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogMzUwcHgpIHtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FavoriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-favorite',
          templateUrl: './favorite.component.html',
          styleUrls: ['./favorite.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_8__["showCalculator"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/models/login.model */
    "./src/app/shared/models/login.model.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/actions/user.action */
    "./src/app/store/actions/user.action.ts");
    /* harmony import */


    var _store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/selectors/user.selectors */
    "./src/app/store/selectors/user.selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your username and password don't match!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.tryAgain();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please try again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(store, route) {
        _classCallCheck(this, LoginComponent);

        this.store = store;
        this.route = route;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.login = new _shared_models_login_model__WEBPACK_IMPORTED_MODULE_1__["Login"](undefined, undefined);
          this.loginFail$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__["getLoginFail"]));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["UserLoginFailOff"])());
        }
      }, {
        key: "tryAgain",
        value: function tryAgain() {
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["UserLoginFailOff"])());
        }
      }, {
        key: "userLogin",
        value: function userLogin() {
          var login = this.login;
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["LoginUser"])({
            login: login
          }));
        }
      }, {
        key: "register",
        value: function register() {
          this.route.navigate(['/product/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 35,
      vars: 16,
      consts: [[1, "card"], ["class", "loginFail", 4, "ngIf"], [1, "p-0", "row"], [1, "col-8"], [1, "card-body"], [1, "card-title"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "m-0"], [1, "text-danger"], ["type", "text", "title", "Enter an username", "name", "username", "required", "", "pattern", "^[a-zA-Z]{3,}$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "password", "title", "Enter a password", "name", "password", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-center"], ["type", "submit", "value", "Login \uF2F6", 1, "btn", "btn-outline-primary", "rounded-pill", "m-1", "fas", 3, "disabled"], ["type", "button", "value", "Create \uF234", 1, "btn", "btn-outline-primary", "rounded-pill", "m-1", "fas", 3, "click"], [1, "col-4"], ["src", "/assets/photos/man_body_torso_muscles.jpg", 1, "image"], [1, "loginFail"], [1, "loginFailButton", 3, "click"], [1, "fas", "fa-undo"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 7, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lets login to your user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            return ctx.userLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter an username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Must to enter only three letters at least.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.login.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter a password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Must to enter eight letters at least.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "(one upper case one lower case and a number)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.login.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_32_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 14, ctx.loginFail$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r2.untouched || _r2.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r2.invalid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r3.untouched || _r3.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", _r1.form.invalid && _r2.touched && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.form.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 35rem;\r\n    background-color: rgb(175, 171, 169);\r\n    margin: 5% auto;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    padding-left: 6px;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 300px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    background-color: paleturquoise;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%] {\r\n    background-color: pink;\r\n    color: black;\r\n    border-color: red;\r\n    box-shadow: 0 0 0 3px rgb(240, 135, 135);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\n.loginFail[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    text-align: center;\r\n    height: 60%;\r\n    padding: 15px;\r\n    width: 80%;\r\n    background-color: rgba(179, 169, 185, 0.938);\r\n    color: rgb(235, 36, 79);\r\n    z-index: 1;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 5px;\r\n    left: 50%;\r\n    top: 50%;\r\n}\r\n\r\n.loginFailButton[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: rgb(63, 104, 240);\r\n    border-radius: 20px;\r\n    border-style: solid;\r\n    padding: 5px;\r\n    outline: inherit;\r\n}\r\n\r\n.loginFailButton[_ngcontent-%COMP%]:hover {\r\n    background-color: ivory;\r\n    box-shadow: 0 0 0 2px rgb(66, 65, 65);\r\n    border: 0.1px solid rgb(29, 28, 28);\r\n}\r\n\r\n@media (max-width: 415px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        margin: 25% auto;\r\n        max-width: 24rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 390px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        margin: 20% auto;\r\n        max-width: 21rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        margin: 10% auto;\r\n        max-width: 18rem;\r\n    }\r\n}\r\n\r\n@media (max-height: 350px) {\r\n    .loginFail[_ngcontent-%COMP%] {\r\n        transform: translate(-50%, -85%);\r\n        height: 50%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4Qyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMTcxLCAxNjkpO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMjQwLCAxMzUsIDEzNSk7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmUtc3R5bGU6IGluaGVyaXQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiKDE0NSwgMTQwLCAxNDUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI0MSwgMjMyLCAwLjc4OCk7XHJcbn1cclxuXHJcbi5sb2dpbkZhaWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCAxNjksIDE4NSwgMC45MzgpO1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDM2LCA3OSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG5cclxuLmxvZ2luRmFpbEJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHJnYig2MywgMTA0LCAyNDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubG9naW5GYWlsQnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig2NiwgNjUsIDY1KTtcclxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDI5LCAyOCwgMjgpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDI1JSBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMjRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDM1MHB4KSB7XHJcbiAgICAubG9naW5GYWlsIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtODUlKTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/login.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/models/login.model.ts ***!
    \**********************************************/

  /*! exports provided: Login */

  /***/
  function srcAppSharedModelsLoginModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });

    var Login = function Login(username, password) {
      _classCallCheck(this, Login);

      this.username = username;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/shared/modules/account/account.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/modules/account/account.module.ts ***!
    \**********************************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppSharedModulesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared/modules/shared.module.ts");
    /* harmony import */


    var src_app_store_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/guards */
    "./src/app/store/guards/index.ts");
    /* harmony import */


    var src_app_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/favorite/favorite.component */
    "./src/app/favorite/favorite.component.ts");
    /* harmony import */


    var src_app_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/login/login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      component: src_app_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
      canActivate: src_app_store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"]
    }, {
      path: 'favorite',
      component: src_app_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"],
      canActivate: src_app_store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"]
    }, {
      path: 'login',
      component: src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }];

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountModule
    });
    AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountModule_Factory(t) {
        return new (t || AccountModule)();
      },
      imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, {
        declarations: [src_app_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"], src_app_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [src_app_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"], src_app_account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], src_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map