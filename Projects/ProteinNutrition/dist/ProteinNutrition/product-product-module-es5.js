function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/models/protein.model */
    "./src/app/shared/models/protein.model.ts");
    /* harmony import */


    var _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/models/egg.model */
    "./src/app/shared/models/egg.model.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_protein_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../store/actions/protein.action */
    "./src/app/store/actions/protein.action.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../store */
    "./src/app/store/index.ts");
    /* harmony import */


    var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../store/actions/user.action */
    "./src/app/store/actions/user.action.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/services/showCalculator */
    "./src/app/shared/services/showCalculator.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HomeComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "- more information -");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You need to fill everyting you eat from the list , and will see how much protein you gain.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You can create a lot of mixes and save it inside your favorite list ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "( username is required )");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_28_Template_input_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.info();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_button_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_button_30_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.isAcccept();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Lets started");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_31_small_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "* You must to enter a positive values");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_31_p_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.showMessageLogin);
      }
    }

    function HomeComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeComponent_div_31_Template_form_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.saveSwitch();
        })("ngSubmit", function HomeComponent_div_31_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "You must choose a size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Egg");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.protein.egg.amount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_select_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.protein.egg.sizeEgg = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "M");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "L");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Bread");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.protein.bread = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tuna");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.protein.tuna = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Meat");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.protein.meat = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cheese");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.protein.cheese = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cottage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.protein.cottage = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Quinoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.protein.quinoa = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Almonds");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.protein.almonds = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Powder");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.protein.powder = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Gainer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_31_Template_input_ngModelChange_76_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.protein.gainer = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, HomeComponent_div_31_small_79_Template, 2, 0, "small", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_31_Template_input_click_83_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.show();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, HomeComponent_div_31_p_91_Template, 2, 1, "p", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_31_Template_input_click_92_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.cancelShow();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opacity", ctx_r2.popupToggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", _r8.untouched || !_r8.value || _r8.value && _r9.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.egg.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("required", _r8.value)("ngModel", ctx_r2.protein.egg.sizeEgg);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.disabledValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.bread);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.tuna);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.meat);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.cheese);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.cottage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.quinoa);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.almonds);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.powder);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.protein.gainer);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r7.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.user || !ctx_r2.saveToggle || !_r7.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.showMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.user);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(store, router, showCalculator) {
        _classCallCheck(this, HomeComponent);

        this.store = store;
        this.router = router;
        this.showCalculator = showCalculator; // Messages to user

        this.showMessage = "";
        this.showMessageLogin = "";
        this.clearInterval = [];
        this.unSubscribe = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.protein = new _shared_models_protein_model__WEBPACK_IMPORTED_MODULE_4__["Protein"](new _shared_models_egg_model__WEBPACK_IMPORTED_MODULE_5__["Egg"]());

          if (!!localStorage.getItem("acccept")) {
            this.acccept = true;
            this.visibility();
          }

          this.unSubscribe.push(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store__WEBPACK_IMPORTED_MODULE_8__["getUser"])).subscribe(function (user) {
            var userId = !!sessionStorage.getItem('login');
            if (!user && !userId) _this.popup();
            _this.user = user;
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(console.log(error));
          })));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_9__["UserPopupOff"])());
          this.clearInterval.forEach(function (id) {
            return clearInterval(id);
          });
          this.unSubscribe.forEach(function (subscribe) {
            return subscribe.unsubscribe();
          });
        }
      }, {
        key: "popup",
        value: function popup() {
          var _this2 = this;

          this.clearInterval.push(setTimeout(function () {
            if (!_this2.user) _this2.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_9__["UserPopupOn"])());

            _this2.unSubscribe.push(_this2.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store__WEBPACK_IMPORTED_MODULE_8__["getPopup"])).subscribe(function (popupToggle) {
              return _this2.popupToggle = popupToggle;
            }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(console.log(error));
            })));
          }, 8000));
        }
      }, {
        key: "cancelPopup",
        value: function cancelPopup() {
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_9__["UserPopupOff"])());
        }
      }, {
        key: "cancelShow",
        value: function cancelShow() {
          this.visibilityOff('show');
        }
      }, {
        key: "info",
        value: function info() {
          this.infoToggle = !this.infoToggle;
        }
      }, {
        key: "isAcccept",
        value: function isAcccept() {
          this.acccept = true;
          this.visibility();
          localStorage.setItem('acccept', "true");
        }
      }, {
        key: "submit",
        value: function submit() {
          var userId = this.user.id; // Create a new reference

          var protein = Object.assign({}, this.protein);
          var egg = protein.egg;
          protein.egg = Object.assign({}, egg); // Send clean Object without undefined properties to Store

          Object.keys(protein).forEach(function (key) {
            return !protein[key] && delete protein[key];
          });
          if (!protein.egg || !protein.egg.sizeEgg || !protein.egg.amount) delete protein.egg;
          this.store.dispatch(Object(_store_actions_protein_action__WEBPACK_IMPORTED_MODULE_7__["AddProtein"])({
            userId: userId,
            protein: protein
          }));
        }
      }, {
        key: "show",
        value: function show() {
          var _a = this.protein,
              id = _a.id,
              egg = _a.egg,
              protein = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id", "egg"]);
          var sum = this.showCalculator.calculateProtein(protein, egg);
          this.showMessage = "You eat ".concat(sum, " protein approximately.");

          if (this.user) {
            var value = this.user.weight * 2 - sum;
            this.showMessageLogin = value > 0 ? "You need more ".concat(value) : 'You Eat enough protein for today good job!';
          }

          this.visibilityOn('show');
        }
      }, {
        key: "visibility",
        value: function visibility() {
          var _this3 = this;

          var timeToShow = 100;
          var _a = this.protein,
              id = _a.id,
              protein = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id"]);
          Object.keys(protein).forEach(function (key) {
            _this3.clearInterval.push(setTimeout(function () {
              return _this3.visibilityOn(key);
            }, timeToShow));

            timeToShow += 250;
          });
          this.clearInterval.push(setTimeout(function () {
            return _this3.visibilityOn("submit");
          }, timeToShow));
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
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['product/register']);
        }
      }, {
        key: "loginPage",
        value: function loginPage() {
          this.router.navigate(['/product/account/login']);
        } // Check if form is valid ( one of input must be with value )

      }, {
        key: "saveSwitch",
        value: function saveSwitch() {
          var _a = this.protein,
              id = _a.id,
              egg = _a.egg,
              protein = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id", "egg"]);
          var updateToggle = false;
          Object.values(protein).some(function (value) {
            return value && (updateToggle = true) && true;
          });
          egg.amount && egg.sizeEgg && (updateToggle = true);
          this.saveToggle = updateToggle;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_11__["showCalculator"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 32,
      vars: 7,
      consts: [[1, "card", "popup"], ["src", "/assets/photos/popup.jpg", 1, "cardImage"], [1, "text-right", "cancel", "m-2", "ml-auto", 3, "click"], [1, "fas", "fa-times"], [1, "card-body", "text-center"], [1, "card-title"], [1, "navigate", 3, "click"], [1, "text-center", "p-3"], [1, "d-inline"], ["type", "button", "value", "\uF059", 1, "far", "fa-lg", "questionMark", 3, "click"], [1, "row", "justify-content-center", "mb-3", "m-0"], [1, "arrow", 3, "click"], [1, "fas", "fa-arrow-down", "fa-3x", "position-relative"], ["class", "col-12 text-center info", 4, "ngIf"], [1, "text-center"], ["class", "btn-lg btn-danger col-10", 3, "click", 4, "ngIf"], [3, "opacity", 4, "ngIf"], [1, "col-12", "text-center", "info"], ["type", "button", "value", "\uF00C  O.k", 1, "fas", 3, "click"], [1, "btn-lg", "btn-danger", "col-10", 3, "click"], [3, "change", "ngSubmit"], ["proteinForm", "ngForm"], [1, "container"], ["id", "egg", 1, "invisible"], [1, "row", "justify-content-center"], [1, "text-danger", "p-2", "m-1"], [1, "fas", "fa-arrow-circle-right"], [1, "p-1", "m-1", "col-2", "col-sm-2", "col-md-1"], ["type", "number", "title", "Egg", "name", "egg", "pattern", "^[1-9][0-9]*$", "placeholder", "amount", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["egg", "ngModel"], ["name", "eggSize", 1, "border", "border-danger", "p-1", "m-1", "space", 3, "required", "ngModel", "ngModelChange"], ["eggSize", "ngModel"], ["disabled", "", 3, "value"], ["value", "S"], ["value", "M"], ["value", "L"], ["id", "bread", 1, "invisible"], ["type", "number", "title", "Bread", "name", "bread", "pattern", "^[1-9][0-9]*$", "placeholder", "slices", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], [1, "space", "p-1", "m-1"], ["id", "tuna", 1, "invisible"], ["type", "number", "title", "Tuna", "name", "tuna", "pattern", "^[1-9][0-9]*$", "placeholder", "grams", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "meat", 1, "invisible"], ["type", "number", "title", "Meat", "name", "meat", "pattern", "^[1-9][0-9]*$", "placeholder", "grams", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "cheese", 1, "invisible"], ["type", "number", "title", "Cheese", "name", "cheese", "pattern", "^[1-9][0-9]*$", "placeholder", "grams", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "cottage", 1, "invisible"], ["type", "number", "title", "Cottage", "name", "cottage", "pattern", "^[1-9][0-9]*$", "placeholder", "grams", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "quinoa", 1, "invisible"], ["type", "number", "title", "Quinoa", "name", "quinoa", "pattern", "^[1-9][0-9]*$", "placeholder", "grams", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "almonds", 1, "invisible"], ["type", "number", "title", "Almonds", "name", "almonds", "pattern", "^[1-9][0-9]*$", "placeholder", "handful", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "powder", 1, "invisible"], ["type", "number", "title", "Powder", "name", "powder", "pattern", "^[1-9][0-9]*$", "placeholder", "portions", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "gainer", 1, "invisible"], ["type", "number", "title", "Gainer", "name", "gainer", "pattern", "^[1-9][0-9]*$", "placeholder", "portions", 1, "text-center", "rounded-pill", "border", "border-danger", "p-1", "m-1", "col-5", "col-md-3", "col-lg-2", 3, "ngModel", "ngModelChange"], ["id", "submit", 1, "invisible"], ["class", "text-center text-danger d-block m-1", 4, "ngIf"], [1, "col-1"], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-3", "col-3", "button", "p-0", "m-1"], ["type", "button", "value", "\uF06E Show", 1, "btn", "btn-secondary", "border", "far", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-3", "col-3", "innerButton", "radius", 3, "disabled", "click"], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-3", "col-3", "p-0", "m-1", "button"], ["type", "submit", "value", "\uF0C7 Save", 1, "btn", "btn-secondary", "radius", "border", "far", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-3", "col-3", "innerButton", 3, "disabled"], ["id", "show", 1, "invisible"], [1, "card", "show", "text-center"], [1, "card-body"], [4, "ngIf"], ["type", "button", "value", "\uF164", 1, "fas", "showButton", 3, "click"], [1, "text-center", "text-danger", "d-block", "m-1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() {
            return ctx.cancelPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Don't have an account yet?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " to register or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
            return ctx.loginPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " to login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Muscle is your life?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Let's start to calculate your protein ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_24_listener() {
            return ctx.info();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_26_listener() {
            return ctx.info();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HomeComponent_div_28_Template, 10, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_button_30_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 93, 22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.popupToggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opacity", ctx.popupToggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoToggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acccept);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.acccept);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_x"]],
      styles: ["small[_ngcontent-%COMP%] {\r\n    left: 30px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.opacity[_ngcontent-%COMP%] {\r\n    opacity: 0.3;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    padding-bottom: 2px solid red;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    color: oldlace;\r\n    min-width: 70px;\r\n    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgb(199, 137, 137), rgb(212, 100, 100));\r\n    background-size: 300%;\r\n    background-position: left;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]:hover {\r\n    -webkit-animation: label 3s forwards;\r\n            animation: label 3s forwards;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    color: rgb(212, 197, 197);\r\n    transition-duration: 2s;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: rgb(231, 203, 177);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 0%;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    transition-duration: 1s;\r\n    background: linear-gradient( rgb(10, 12, 14), rgb(4, 101, 112), rgb(10, 12, 14));\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover::after {\r\n    height: 100%;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    color: rgb(143, 189, 226);\r\n    padding-top: 10px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: rgb(224, 83, 83);\r\n    font-weight: bold;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 8px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    padding: 0;\r\n    border: 0;\r\n    color: lawngreen;\r\n}\r\n\r\n.questionMark[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: lightgoldenrodyellow;\r\n    padding: 3px;\r\n    border: 0;\r\n    outline: 0;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border-radius: 17px;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n}\r\n\r\nselect[_ngcontent-%COMP%]:focus {\r\n    color: white;\r\n    background-color: rgb(34, 34, 32);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .rounded-pill[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: input;\r\n            animation-name: input;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\r\n    background-color: inherit;\r\n    color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    text-align: center;\r\n    color: lightcoral;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    right: 3%;\r\n    max-width: 160px;\r\n}\r\n\r\n.innerButton[_ngcontent-%COMP%] {\r\n    max-width: 160px;\r\n    transition-duration: 3s;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    color: red;\r\n    text-shadow: red;\r\n    background-color: rgb(59, 63, 57);\r\n}\r\n\r\n.navigate[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    color: rgb(179, 5, 5);\r\n    background-color: inherit;\r\n    font-weight: bold;\r\n    font-style: oblique;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 1;\r\n    width: 50%;\r\n    height: 40%;\r\n    margin: 5% auto;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: pink;\r\n    color: seashell;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: seashell;\r\n    background-color: rgb(88, 81, 81);\r\n}\r\n\r\n.showButton[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: rgb(127, 255, 110);\r\n    outline: 0;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.showButton[_ngcontent-%COMP%]:hover {\r\n    color: rgb(87, 241, 67);\r\n}\r\n\r\n.cardImage[_ngcontent-%COMP%] {\r\n    opacity: 0.9;\r\n    width: 100%;\r\n    position: absolute;\r\n    height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.radius[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n}\r\n\r\n.radius[_ngcontent-%COMP%]:hover, .radius[_ngcontent-%COMP%]:focus {\r\n    background: linear-gradient(180deg, rgb(158, 223, 243) 2px, rgba(0, 0, 0, 0) 2px), linear-gradient(0deg, rgb(158, 223, 243) 2px, rgba(0, 0, 0, 0) 2px), linear-gradient(90deg, rgb(158, 223, 243) 2px, rgba(0, 0, 0, 0) 2px), linear-gradient(270deg, rgb(158, 223, 243) 2px, rgba(0, 0, 0, 0) 2px);\r\n    background-repeat: no-repeat;\r\n    background-position: 200px, -200px, 0px -30px, 0px 30px;\r\n    -webkit-animation: slide 2s infinite;\r\n            animation: slide 2s infinite;\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n    from {\r\n        background-position: 200px, -200px, 0px -30px, 0px 30px;\r\n    }\r\n    to {\r\n        background-position: -200px, 200px, 0px 0px, 0px 0px;\r\n    }\r\n}\r\n\r\n@keyframes slide {\r\n    from {\r\n        background-position: 200px, -200px, 0px -30px, 0px 30px;\r\n    }\r\n    to {\r\n        background-position: -200px, 200px, 0px 0px, 0px 0px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes input {\r\n    from {\r\n        transform: rotate(180deg) translateX(250px);\r\n        background-color: rgb(7, 7, 7);\r\n        pointer-events: none;\r\n    }\r\n    to {\r\n        pointer-events: none;\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes input {\r\n    from {\r\n        transform: rotate(180deg) translateX(250px);\r\n        background-color: rgb(7, 7, 7);\r\n        pointer-events: none;\r\n    }\r\n    to {\r\n        pointer-events: none;\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes label {\r\n    90% {\r\n        color: black;\r\n    }\r\n    100% {\r\n        background-position: right;\r\n        color: black;\r\n    }\r\n}\r\n\r\n@keyframes label {\r\n    90% {\r\n        color: black;\r\n    }\r\n    100% {\r\n        background-position: right;\r\n        color: black;\r\n    }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n    .popup[_ngcontent-%COMP%] {\r\n        top: 250px;\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .popup[_ngcontent-%COMP%] {\r\n        top: 230px;\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .popup[_ngcontent-%COMP%] {\r\n        height: 50%;\r\n    }\r\n    .show[_ngcontent-%COMP%] {\r\n        top: 65%;\r\n    }\r\n}\r\n\r\n@media (max-height: 330px) {\r\n    .show[_ngcontent-%COMP%] {\r\n        z-index: 9999;\r\n    }\r\n    .popup[_ngcontent-%COMP%] {\r\n        margin: -11% auto;\r\n        top: 230px;\r\n        width: 55%;\r\n        height: 44%;\r\n    }\r\n    .card-body[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlIQUFpSDtJQUNqSCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0ZBQWdGO0FBQ3BGOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFIQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBSEE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1TQUFtUztJQUNuUyw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLHVEQUF1RDtJQUMzRDtJQUNBO1FBQ0ksb0RBQW9EO0lBQ3hEO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLHVEQUF1RDtJQUMzRDtJQUNBO1FBQ0ksb0RBQW9EO0lBQ3hEO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztRQUMzQyw4QkFBOEI7UUFDOUIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBVkE7SUFDSTtRQUNJLDJDQUEyQztRQUMzQyw4QkFBOEI7UUFDOUIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixZQUFZO0lBQ2hCO0FBQ0o7O0FBUkE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5oMSwgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3BhY2l0eSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgY29sb3I6IG9sZGxhY2U7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMCksIHJnYigxOTksIDEzNywgMTM3KSwgcmdiKDIxMiwgMTAwLCAxMDApKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbn1cclxuXHJcbmxhYmVsOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogbGFiZWwgM3MgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5hcnJvdyBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiByZ2IoMjEyLCAxOTcsIDE5Nyk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG5cclxuLmFycm93IGk6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyMzEsIDIwMywgMTc3KTtcclxufVxyXG5cclxuLmFycm93IGk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxMCwgMTIsIDE0KSwgcmdiKDQsIDEwMSwgMTEyKSwgcmdiKDEwLCAxMiwgMTQpKTtcclxufVxyXG5cclxuLmFycm93IGk6aG92ZXI6OmFmdGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgY29sb3I6IHJnYigxNDMsIDE4OSwgMjI2KTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mbyBzcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMjI0LCA4MywgODMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5pbmZvIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGxhd25ncmVlbjtcclxufVxyXG5cclxuLnF1ZXN0aW9uTWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxufVxyXG5cclxuc2VsZWN0OmZvY3VzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDMyKTtcclxufVxyXG5cclxuZm9ybSAucm91bmRlZC1waWxsIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbnB1dDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZS1zdHlsZTogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2IoMTQ1LCAxNDAsIDE0NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQxLCAyMzIsIDAuNzg4KTtcclxufVxyXG5cclxuZm9ybSBpbnB1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLmlubmVyQnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuLmNhbmNlbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA2MywgNTcpO1xyXG59XHJcblxyXG4ubmF2aWdhdGUge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjb2xvcjogcmdiKDE3OSwgNSwgNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBjb2xvcjogc2Vhc2hlbGw7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IHNlYXNoZWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCA4MSwgODEpO1xyXG59XHJcblxyXG4uc2hvd0J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IHJnYigxMjcsIDI1NSwgMTEwKTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2hvd0J1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDg3LCAyNDEsIDY3KTtcclxufVxyXG5cclxuLmNhcmRJbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ucmFkaXVzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5yYWRpdXM6aG92ZXIsIC5yYWRpdXM6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDE1OCwgMjIzLCAyNDMpIDJweCwgcmdiYSgwLCAwLCAwLCAwKSAycHgpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDE1OCwgMjIzLCAyNDMpIDJweCwgcmdiYSgwLCAwLCAwLCAwKSAycHgpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNTgsIDIyMywgMjQzKSAycHgsIHJnYmEoMCwgMCwgMCwgMCkgMnB4KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiKDE1OCwgMjIzLCAyNDMpIDJweCwgcmdiYSgwLCAwLCAwLCAwKSAycHgpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMHB4LCAtMjAwcHgsIDBweCAtMzBweCwgMHB4IDMwcHg7XHJcbiAgICBhbmltYXRpb246IHNsaWRlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMHB4LCAtMjAwcHgsIDBweCAtMzBweCwgMHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMHB4LCAyMDBweCwgMHB4IDBweCwgMHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnB1dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVgoMjUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3LCA3KTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxhYmVsIHtcclxuICAgIDkwJSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIC5wb3B1cCB7XHJcbiAgICAgICAgdG9wOiAyNTBweDtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgIC5wb3B1cCB7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XHJcbiAgICAucG9wdXAge1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnNob3cge1xyXG4gICAgICAgIHRvcDogNjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDMzMHB4KSB7XHJcbiAgICAuc2hvdyB7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgIH1cclxuICAgIC5wb3B1cCB7XHJcbiAgICAgICAgbWFyZ2luOiAtMTElIGF1dG87XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgIGhlaWdodDogNDQlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _shared_services_showCalculator__WEBPACK_IMPORTED_MODULE_11__["showCalculator"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.audio = new Audio();
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.play();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.audio.pause();
        }
      }, {
        key: "play",
        value: function play() {
          this.audio.src = "assets/audio/music.mp3";
          this.audio.play();
          this.audio.volume = 0.05;
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 23,
      vars: 0,
      consts: [["src", "/assets/photos/body_building.jpg", 1, "backgroundImage"], [1, "container"], [1, "text-center"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Protein for healthy muscle and bone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Proteins in the diet contribute significantly to the production of energy for the body.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dietary proteins provide amino acids as building blocks for growth, repair and maintenance of proteins in the body. The body does not have a mechanism for storing amino acids or protein, unlike carbohydrates which can be stored as glycogen and fats that can be stored as triacylglycerides.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "When we have sufficient protein and an adequate supply of energy in our diet, the excess amino acids that are not used for growth or repair are either converted to glucose in the liver or are used to provide energy. Without enough supply of dietary energy from carbohydrates and fats, the body preferentially uses amino acids for energy production at the expense of growth, maintenance and repair. This means that it is particularly important as we get older to provide enough energy in the diet from carbohydrates and fats so that dietary protein can be used for repair and maintenance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dietary protein is a key nutrient for muscle and bone health. Adequate dietary protein during childhood and adolescent years is essential in order to accumulate an adequate bone and muscle mass during growth. For muscles to grow, they need both protein and exercise, and the same is true also for bone. Dietary protein can also help slow down the rate of bone and muscle loss that occurs as we get older. Low and high protein diets can affect bone metabolism in different ways.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Skeletal muscle represents a pool of protein that can be called upon as a source of energy when food is scarce or when the body is stressed such as after injury. A lack of protein in the diet will lead to poor muscle strength which can increase the risk of falling, especially in the elderly and contributes to poor recovery in patients who have had fractures. Low protein diets are also associated with decreased intestinal calcium absorption and an increase in the levels of the key bone regulatory hormone parathyroid hormone.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "High protein diets can increase calcium absorption and lead to an increased excretion of calcium in urine. High protein diets are also linked to increased production of an important bone growth factor - insulin-like growth factor 1. High protein diets are associated with an increased bone mineral content, a decrease in the risk of fractures, and improved fracture repair and recovery after injury.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Muscle contains about 30% protein by weight. You might be surprised to learn that bone contains a higher percentage of protein than muscle weight for weight. This is because, in muscle, the proteins are mainly found inside the muscle cells, which contain a lot of water, while in bone, much of the protein is found outside of cells in densely packed fibres that contain little water.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Summary - all people must to eat food with protein.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xA9 University of Liverpool/The University of Sheffield/Newcastle University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".backgroundImage[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 76%;\r\n    top: 228px;\r\n    opacity: 0.1;\r\n    -webkit-animation-name: opacity;\r\n            animation-name: opacity;\r\n    -webkit-animation-duration: 7s;\r\n            animation-duration: 7s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    color: oldlace;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    transform: translateX(140%);\r\n    display: block;\r\n    -webkit-animation-name: moveLeft;\r\n            animation-name: moveLeft;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    transform: translateY(-200px);\r\n    -webkit-animation-name: movieBottom;\r\n            animation-name: movieBottom;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    transform: translateY(100px);\r\n    -webkit-animation-name: moveTop;\r\n            animation-name: moveTop;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    transform: translateX(-140%);\r\n    -webkit-animation-name: moveRight;\r\n            animation-name: moveRight;\r\n    -webkit-animation-duration: 1.8s;\r\n            animation-duration: 1.8s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\np[_ngcontent-%COMP%]:nth-child(4) {\r\n    -webkit-animation-delay: 0.4s;\r\n            animation-delay: 0.4s;\r\n}\r\n\r\np[_ngcontent-%COMP%]:nth-child(5) {\r\n    -webkit-animation-delay: 0.8s;\r\n            animation-delay: 0.8s;\r\n}\r\n\r\np[_ngcontent-%COMP%]:nth-child(6) {\r\n    -webkit-animation-delay: 1.2s;\r\n            animation-delay: 1.2s;\r\n}\r\n\r\np[_ngcontent-%COMP%]:nth-child(7) {\r\n    -webkit-animation-delay: 1.6s;\r\n            animation-delay: 1.6s;\r\n}\r\n\r\np[_ngcontent-%COMP%]:nth-child(8) {\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n\r\n@-webkit-keyframes moveTop {\r\n    from {\r\n        transform: translateY(100px);\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes moveTop {\r\n    from {\r\n        transform: translateY(100px);\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes movieBottom {\r\n    0% {\r\n        transform: translateY(-200px);\r\n    }\r\n    90% {\r\n        transform: translateY(0);\r\n    }\r\n    91% {\r\n        transform: rotate(2deg);\r\n    }\r\n    92% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    93% {\r\n        transform: rotate(2deg);\r\n    }\r\n    94% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    95% {\r\n        transform: rotate(2deg);\r\n    }\r\n    96% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    97% {\r\n        transform: rotate(2deg);\r\n    }\r\n    98% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    100% {\r\n        transform: translateY(0);\r\n        transform: rotate(0);\r\n    }\r\n}\r\n\r\n@keyframes movieBottom {\r\n    0% {\r\n        transform: translateY(-200px);\r\n    }\r\n    90% {\r\n        transform: translateY(0);\r\n    }\r\n    91% {\r\n        transform: rotate(2deg);\r\n    }\r\n    92% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    93% {\r\n        transform: rotate(2deg);\r\n    }\r\n    94% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    95% {\r\n        transform: rotate(2deg);\r\n    }\r\n    96% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    97% {\r\n        transform: rotate(2deg);\r\n    }\r\n    98% {\r\n        transform: rotate(-2deg);\r\n    }\r\n    100% {\r\n        transform: translateY(0);\r\n        transform: rotate(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moveRight {\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes moveRight {\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes moveLeft {\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes moveLeft {\r\n    to {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes opacity {\r\n    to {\r\n        opacity: 0.5;\r\n    }\r\n}\r\n\r\n@keyframes opacity {\r\n    to {\r\n        opacity: 0.5;\r\n    }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n    .backgroundImage[_ngcontent-%COMP%] {\r\n        top: 180px;\r\n        height: 78%;\r\n    }\r\n}\r\n\r\n@media (max-height: 420px) {\r\n    .backgroundImage[_ngcontent-%COMP%] {\r\n        top: 115px;\r\n        height: 73%;\r\n    }\r\n}\r\n\r\n@media (max-height: 350px) {\r\n    .backgroundImage[_ngcontent-%COMP%] {\r\n        top: 156px;\r\n        height: 55%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLG9CQUFvQjtJQUN4QjtBQUNKOztBQW5DQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUpBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3NiU7XHJcbiAgICB0b3A6IDIyOHB4O1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgY29sb3I6IG9sZGxhY2U7XHJcbn1cclxuXHJcbnN0cm9uZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTQwJSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlTGVmdDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZpZUJvdHRvbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVUb3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE0MCUpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVSaWdodDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG5wOm50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxucDpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG59XHJcblxyXG5wOm50aC1jaGlsZCg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbn1cclxuXHJcbnA6bnRoLWNoaWxkKDgpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZVRvcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZpZUJvdHRvbSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICB9XHJcbiAgICA5MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDkxJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5MiUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICAgIH1cclxuICAgIDkzJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5NCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICAgIH1cclxuICAgIDk1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5NiUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICAgIH1cclxuICAgIDk3JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgICB9XHJcbiAgICA5OCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlUmlnaHQge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlTGVmdCB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZEltYWdlIHtcclxuICAgICAgICB0b3A6IDE4MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzglO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQyMHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZEltYWdlIHtcclxuICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgIGhlaWdodDogNzMlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDM1MHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZEltYWdlIHtcclxuICAgICAgICB0b3A6IDE1NnB4O1xyXG4gICAgICAgIGhlaWdodDogNTUlO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/models/user.model */
    "./src/app/shared/models/user.model.ts");
    /* harmony import */


    var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/actions/user.action */
    "./src/app/store/actions/user.action.ts");
    /* harmony import */


    var _store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/selectors/user.selectors */
    "./src/app/store/selectors/user.selectors.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
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

    function RegisterComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your user has been created successfully!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.createUserNavigate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_i_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function RegisterComponent_i_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 41);
      }
    }

    function RegisterComponent_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "By clicking Sign Up, you agree to our Data Policy and Cookies Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(store, router) {
        _classCallCheck(this, RegisterComponent);

        this.store = store;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](undefined, undefined, undefined, undefined, undefined);
          this.userCreated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserCreated"]));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["UserCreatedOff"])());
        }
      }, {
        key: "createUserNavigate",
        value: function createUserNavigate() {
          this.router.navigate(['product/account/login']);
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var user = this.user;
          this.store.dispatch(Object(_store_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["CreateUser"])({
            user: user
          }));
        }
      }, {
        key: "showTerms",
        value: function showTerms() {
          this.terms = !this.terms;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 85,
      vars: 36,
      consts: [["class", "text-center", 4, "ngIf"], [1, "card"], [1, "row"], [1, "col-8"], [1, "card-body"], [1, "card-title"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "m-0"], [1, "text-danger"], ["type", "text", "title", "Enter an username", "name", "username", "required", "", "pattern", "^[a-zA-Z]{3,}$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "password", "title", "Enter a password", "name", "password", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "password", "title", "Enter again a password to confirm", "name", "confirmPassword", "required", "", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "disabled", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "number", "title", "Enter your weight", "name", "weight", "required", "", "pattern", "^[1-9]\\d*$", 1, "rounded-pill", "border", "border-primary", 3, "ngModel", "ngModelChange"], ["weight", "ngModel"], [1, "text-center"], ["type", "radio", "name", "male", "value", "Male", "required", "", 3, "ngModel", "ngModelChange"], ["male", "ngModel"], [1, "rounded-pill", "text-center", "m-1", "radioMale"], [1, "fas", "fa-male", "m-1"], ["type", "radio", "name", "female", "value", "Female", "required", "", 3, "ngModel", "ngModelChange"], ["female", "ngModel"], [1, "rounded-pill", "text-center", "m-1", "radioFemale"], [1, "fas", "fa-female", "m-1"], [1, "width"], ["type", "checkbox", "name", "accept", "ngModel", "", "required", ""], ["accept", "ngModel"], ["class", "fas fa-check-circle fa-lg checkbox", 4, "ngIf"], ["class", "fas fa-circle fa-lg checkbox", 4, "ngIf"], ["type", "button", "value", "Terms", 1, "terms", 3, "click"], [4, "ngIf"], ["type", "submit", "value", "Sign Up \uF234", 1, "btn", "btn-outline-primary", "rounded-pill", "fas", "m-1", "w-75", 3, "disabled"], [1, "col-4"], ["src", "/assets/photos/bodybuilder_register.jpg", 1, "image"], [1, "userCreated"], [1, "userCreatedButton", 3, "click"], [1, "fas", "fa-sign-in-alt"], [1, "fas", "fa-check-circle", "fa-lg", "checkbox"], [1, "fas", "fa-circle", "fa-lg", "checkbox"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_1_Template, 7, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lets create an user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() {
            return ctx.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter an username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Must to enter only three letters at least");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter a password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Must to enter eight letters at least.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(one upper case one lower case and a number)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Enter again a password to confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Your passwords isn't match!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Please try again.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.user.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enter your weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Your weight must be greater than 0.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.user.weight = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "What is your gender ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.user.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.user.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RegisterComponent_i_66_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RegisterComponent_i_67_Template, 1, 0, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "By clicking Sign Up, you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "agree to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_input_click_74_listener() {
            return ctx.showTerms();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, RegisterComponent_div_75_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Dreams come true sometimes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 32, ctx.userCreated$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 34, ctx.userCreated$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r2.untouched || _r2.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r2.invalid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r3.untouched || _r3.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r4.untouched || _r4.valid && _r4.value === _r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r4.touched && _r4.value !== _r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.confirmPassword)("disabled", _r3.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", _r5.untouched || _r5.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.terms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", _r2.touched && _r3.touched && _r4.touched && _r5.touched && _r8.dirty && (_r6.dirty || _r7.dirty) && (_r4.value !== _r3.value || _r1.form.invalid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.form.invalid || _r4.value !== _r3.value && _r4.touched);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxRequiredValidator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    max-width: 28rem;\r\n    background-color: rgb(175, 171, 169);\r\n    margin: 5% auto;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 250px;\r\n    padding: 0;\r\n    margin: 0;\r\n    opacity: 0.9;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    background-color: paleturquoise;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    padding-left: 6px;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%] {\r\n    background-color: pink;\r\n    color: black;\r\n    border-color: red;\r\n    box-shadow: 0 0 0 3px rgb(240, 135, 135);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n    outline-style: inherit;\r\n    box-shadow: 0 0 0 1px rgb(145, 140, 145);\r\n    background-color: rgba(250, 241, 232, 0.788);\r\n}\r\n\r\n.terms[_ngcontent-%COMP%], .terms[_ngcontent-%COMP%]:focus {\r\n    padding: 0;\r\n    border: 0;\r\n    outline: inherit;\r\n    background-color: inherit;\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.radioMale[_ngcontent-%COMP%], .radioFemale[_ngcontent-%COMP%] {\r\n    background-color: gray;\r\n    display: inline-block;\r\n    width: 70px;\r\n}\r\n\r\n.radioMale[_ngcontent-%COMP%]:hover, .radioFemale[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(61, 55, 61);\r\n    color: darkgrey;\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked + .radioMale[_ngcontent-%COMP%] {\r\n    background-color: rgb(117, 194, 245);\r\n    color: rgb(56, 60, 253);\r\n}\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked + .radioFemale[_ngcontent-%COMP%] {\r\n    background-color: rgb(252, 218, 242);\r\n    color: rgb(252, 89, 184);\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%] {\r\n    color: rgb(0, 60, 255);\r\n}\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.width[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n}\r\n\r\n.userCreated[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 400px;\r\n    height: 200px;\r\n    left: 50%;\r\n    top: 50%;\r\n    padding: 30px;\r\n    z-index: 1;\r\n    transform: translate(-50%, -50%);\r\n    color: rgb(248, 79, 164);\r\n    background: linear-gradient(to bottom, rgb(240, 207, 207), rgb(201, 176, 206));\r\n}\r\n\r\n.userCreatedButton[_ngcontent-%COMP%] {\r\n    border-color: rgb(247, 109, 139);\r\n    border-radius: 35%;\r\n    border-style: double;\r\n    padding: 5px;\r\n    margin: 13px;\r\n    background-color: inherit;\r\n    color: rgb(247, 100, 100);\r\n    outline: inherit;\r\n}\r\n\r\n.userCreatedButton[_ngcontent-%COMP%]:hover {\r\n    transition-duration: 1.8s;\r\n    background-color: rgb(231, 199, 206);\r\n    color: rgb(77, 47, 47);\r\n}\r\n\r\n.opacity[_ngcontent-%COMP%] {\r\n    opacity: 0.3;\r\n}\r\n\r\n@media (max-width: 415px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        max-width: 24rem;\r\n    }\r\n    .userCreated[_ngcontent-%COMP%] {\r\n        width: 375px;\r\n    }\r\n}\r\n\r\n@media (max-width: 390px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        max-width: 21rem;\r\n    }\r\n    .userCreated[_ngcontent-%COMP%] {\r\n        width: 340px;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        max-width: 18rem;\r\n    }\r\n    .card-body[_ngcontent-%COMP%] {\r\n        padding: 0.6rem;\r\n    }\r\n    .userCreated[_ngcontent-%COMP%] {\r\n        width: 280px;\r\n        top: 60%;\r\n    }\r\n}\r\n\r\n@media(max-height:420px) {\r\n    .userCreated[_ngcontent-%COMP%] {\r\n        height: 160px;\r\n        top: 65%;\r\n    }\r\n}\r\n\r\n@media(max-height:330px) {\r\n    .userCreated[_ngcontent-%COMP%] {\r\n        height: 140px;\r\n        top: 74%;\r\n    }\r\n    .userCreatedButton[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDhFQUE4RTtBQUNsRjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFFBQVE7SUFDWjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyOHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDE3MSwgMTY5KTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDI0MCwgMTM1LCAxMzUpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYigxNDUsIDE0MCwgMTQ1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDEsIDIzMiwgMC43ODgpO1xyXG59XHJcblxyXG4udGVybXMsIC50ZXJtczpmb2N1cyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA2MCwgMjUzKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYWRpb01hbGUsIC5yYWRpb0ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5yYWRpb01hbGU6aG92ZXIsIC5yYWRpb0ZlbWFsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDU1LCA2MSk7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKy5yYWRpb01hbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTk0LCAyNDUpO1xyXG4gICAgY29sb3I6IHJnYig1NiwgNjAsIDI1Myk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkKy5yYWRpb0ZlbWFsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMTgsIDI0Mik7XHJcbiAgICBjb2xvcjogcmdiKDI1MiwgODksIDE4NCk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gICAgY29sb3I6IHJnYigwLCA2MCwgMjU1KTtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi53aWR0aCB7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLnVzZXJDcmVhdGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgNzksIDE2NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQwLCAyMDcsIDIwNyksIHJnYigyMDEsIDE3NiwgMjA2KSk7XHJcbn1cclxuXHJcbi51c2VyQ3JlYXRlZEJ1dHRvbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDcsIDEwOSwgMTM5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAxMDAsIDEwMCk7XHJcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xyXG59XHJcblxyXG4udXNlckNyZWF0ZWRCdXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE5OSwgMjA2KTtcclxuICAgIGNvbG9yOiByZ2IoNzcsIDQ3LCA0Nyk7XHJcbn1cclxuXHJcbi5vcGFjaXR5IHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNHJlbTtcclxuICAgIH1cclxuICAgIC51c2VyQ3JlYXRlZCB7XHJcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIxcmVtO1xyXG4gICAgfVxyXG4gICAgLnVzZXJDcmVhdGVkIHtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIG1heC13aWR0aDogMThyZW07XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICB9XHJcbiAgICAudXNlckNyZWF0ZWQge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC1oZWlnaHQ6NDIwcHgpIHtcclxuICAgIC51c2VyQ3JlYXRlZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICB0b3A6IDY1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC1oZWlnaHQ6MzMwcHgpIHtcclxuICAgIC51c2VyQ3JlYXRlZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICB0b3A6IDc0JTtcclxuICAgIH1cclxuICAgIC51c2VyQ3JlYXRlZEJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/egg.model.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/models/egg.model.ts ***!
    \********************************************/

  /*! exports provided: Egg */

  /***/
  function srcAppSharedModelsEggModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Egg", function () {
      return Egg;
    });

    var Egg = function Egg(amount, sizeEgg) {
      _classCallCheck(this, Egg);

      this.amount = amount;
      this.sizeEgg = sizeEgg;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/protein.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/protein.model.ts ***!
    \************************************************/

  /*! exports provided: Protein */

  /***/
  function srcAppSharedModelsProteinModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Protein", function () {
      return Protein;
    });

    var Protein = function Protein(egg, bread, tuna, meat, cheese, cottage, quinoa, almonds, powder, gainer, id) {
      _classCallCheck(this, Protein);

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
    };
    /***/

  },

  /***/
  "./src/app/shared/models/user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/models/user.model.ts ***!
    \*********************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(username, password, confirmPassword, gender, weight, id) {
      _classCallCheck(this, User);

      this.username = username;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.gender = gender;
      this.weight = weight;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/shared/modules/product/product.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/modules/product/product.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppSharedModulesProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
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


    var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var src_app_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var src_app_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/info/info.component */
    "./src/app/info/info.component.ts");

    var routes = [{
      path: 'home',
      component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      canActivate: src_app_store_guards__WEBPACK_IMPORTED_MODULE_3__["guards"]
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ../account/account.module */
        "./src/app/shared/modules/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      }
    }, {
      path: 'register',
      component: src_app_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'info',
      component: src_app_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]
    }];

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductModule
    });
    ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductModule_Factory(t) {
        return new (t || ProductModule)();
      },
      imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, {
        declarations: [src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], src_app_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], src_app_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], src_app_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], src_app_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"]],
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/modules/shared.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModulesSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/showCalculator.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/showCalculator.ts ***!
    \***************************************************/

  /*! exports provided: showCalculator */

  /***/
  function srcAppSharedServicesShowCalculatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "showCalculator", function () {
      return showCalculator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var showCalculator = /*#__PURE__*/function () {
      function showCalculator() {
        _classCallCheck(this, showCalculator);
      }

      _createClass(showCalculator, [{
        key: "calculateProtein",
        value: function calculateProtein(protein, egg) {
          var sum = 0;

          if (egg && egg.amount && egg.sizeEgg) {
            if (egg.sizeEgg === 'S') sum += egg.amount * 6.029;else egg.sizeEgg === 'M' ? sum += egg.amount * 7.285 : sum += egg.amount * 8.541;
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
          Object.values(protein).forEach(function (value) {
            return value ? sum += value : sum += 0;
          });
          return Number.parseFloat(sum.toFixed(4));
        }
      }]);

      return showCalculator;
    }();

    showCalculator.ɵfac = function showCalculator_Factory(t) {
      return new (t || showCalculator)();
    };

    showCalculator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: showCalculator,
      factory: showCalculator.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](showCalculator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/guards/index.ts":
  /*!***************************************!*\
    !*** ./src/app/store/guards/index.ts ***!
    \***************************************/

  /*! exports provided: guards */

  /***/
  function srcAppStoreGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var _users_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./users.guard */
    "./src/app/store/guards/users.guard.ts");
    /* harmony import */


    var _proteins_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./proteins.guard */
    "./src/app/store/guards/proteins.guard.ts");

    var guards = [_users_guard__WEBPACK_IMPORTED_MODULE_0__["UsersGuard"], _proteins_guard__WEBPACK_IMPORTED_MODULE_1__["ProteinsGuard"]];
    /***/
  },

  /***/
  "./src/app/store/guards/proteins.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/store/guards/proteins.guard.ts ***!
    \************************************************/

  /*! exports provided: ProteinsGuard */

  /***/
  function srcAppStoreGuardsProteinsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProteinsGuard", function () {
      return ProteinsGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../index */
    "./src/app/store/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProteinsGuard = /*#__PURE__*/function () {
      function ProteinsGuard(store) {
        _classCallCheck(this, ProteinsGuard);

        this.store = store;
      }

      _createClass(ProteinsGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "checkStore",
        value: function checkStore() {
          var _this4 = this;

          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_index__WEBPACK_IMPORTED_MODULE_3__["getProteinLoaded"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loaded) {
            var userId = sessionStorage.getItem('login');
            if (!loaded && userId) _this4.store.dispatch(_index__WEBPACK_IMPORTED_MODULE_3__["LoadProteins"]({
              userId: userId
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        }
      }]);

      return ProteinsGuard;
    }();

    ProteinsGuard.ɵfac = function ProteinsGuard_Factory(t) {
      return new (t || ProteinsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    ProteinsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProteinsGuard,
      factory: ProteinsGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProteinsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/guards/users.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/guards/users.guard.ts ***!
    \*********************************************/

  /*! exports provided: UsersGuard */

  /***/
  function srcAppStoreGuardsUsersGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersGuard", function () {
      return UsersGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../index */
    "./src/app/store/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UsersGuard = /*#__PURE__*/function () {
      function UsersGuard(store) {
        _classCallCheck(this, UsersGuard);

        this.store = store;
      }

      _createClass(UsersGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          }));
        }
      }, {
        key: "checkStore",
        value: function checkStore() {
          var _this5 = this;

          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_index__WEBPACK_IMPORTED_MODULE_3__["getUserLoaded"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loaded) {
            var userId = sessionStorage.getItem('login');
            if (!loaded && userId) _this5.store.dispatch(_index__WEBPACK_IMPORTED_MODULE_3__["LoadUser"]({
              userId: userId
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        }
      }]);

      return UsersGuard;
    }();

    UsersGuard.ɵfac = function UsersGuard_Factory(t) {
      return new (t || UsersGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    UsersGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersGuard,
      factory: UsersGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map