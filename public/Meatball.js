(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Meatball"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MeatBall.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MeatBall.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_includes_WelcomeIncludes_MainHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/includes/WelcomeIncludes/MainHeader */ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue");
/* harmony import */ var _views_includes_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/includes/Footer */ "./resources/js/views/includes/Footer.vue");
/* harmony import */ var _views_includes_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/includes/Navbar */ "./resources/js/views/includes/Navbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Meatball',
  components: {
    Footer: _views_includes_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _views_includes_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainHeader: _views_includes_WelcomeIncludes_MainHeader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.checkWindowWidth();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('Navbar', {
    showOpenNavbarBtn: 'getOpenNavbarBtn',
    isNavbarOpen: 'getIsNavbarOpen'
  })),
  data: function data() {
    return {
      showCartModal: false,
      showOrdersModal: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])('Navbar', ['setIsNavbarOpen']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('Navbar', ['checkWindowWidth']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    dateTime: function dateTime() {
      var date = new Date();
      return date.getFullYear();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _NavbarIncludes_DesktopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarIncludes/DesktopNav */ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue");
/* harmony import */ var _NavbarIncludes_LinkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarIncludes/LinkItem */ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DesktopNav: _NavbarIncludes_DesktopNav__WEBPACK_IMPORTED_MODULE_2__["default"],
    LinkItem: _NavbarIncludes_LinkItem__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    totalQty: 'getTotalQty'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('loginUser', {
    loggedIn: 'getUserLoggedIn',
    userName: 'getUserName'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('Navbar', {
    showOpenNavbarBtn: 'getOpenNavbarBtn'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('navbarDropdown', {
    showProfileDrop: 'getProfileDropdown'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    setCartDefault: 'setCartDefault',
    setToDefaultUserInfo: 'setToDefaultUserInfo'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('loginUser', ['setUserLoggedIn', 'setUserName']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('Navbar', ['setIsNavbarOpen']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])('navbarDropdown', ['hideProfileDropdown', 'toggleProfileDrop', 'openProfileDrop', 'hideFoodDropdown']), {
    closeNav: function closeNav() {
      if (window.innerWidth <= 700) {
        this.setIsNavbarOpen(false);
      }
    },
    logOut: function logOut() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('logout').then(function (logout) {
                  if (logout.data.success) {
                    _this.setUserName('');

                    _this.setUserLoggedIn(false);

                    _this.setCartDefault();

                    _this.setToDefaultUserInfo();

                    localStorage.removeItem('accessToken');
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkItem */ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LinkItem: _LinkItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('navbarDropdown', {
    showFoodDrop: 'getFoodDropdown'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('Navbar', {
    showOpenNavbarBtn: 'getOpenNavbarBtn'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('Navbar', ['setIsNavbarOpen']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])('navbarDropdown', ['toggleFoodDrop', 'openFoodDrop']), {
    closeNavbar: function closeNavbar() {
      if (window.innerWidth <= 700) {
        this.setIsNavbarOpen(false);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    menuName: String,
    className: {
      type: String,
      required: false,
      "default": "dropdown-menu-item"
    },
    routeName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainHeader'
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-footer[data-v-69932350] {\n  background: #212121;\n  text-align: center;\n  color: white;\n  padding: 2rem;\n}\n.main-footer .footer[data-v-69932350] {\n  justify-content: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  align-items: center;\n}\n.main-footer .footer-container[data-v-69932350] {\n  max-width: 1280px;\n  margin: auto;\n}\n.main-footer .footer-address[data-v-69932350] {\n  text-align: left;\n  line-height: 1.75rem;\n}\n.main-footer .footer-address ul[data-v-69932350] {\n  list-style: none;\n}\n.main-footer .footer-form[data-v-69932350] {\n  justify-content: center;\n}\n.main-footer .footer-form form[data-v-69932350] {\n  display: flex;\n  flex-direction: column;\n}\n.main-footer .footer-form form label[data-v-69932350] {\n  align-self: flex-start;\n  margin-bottom: 0.4rem;\n  font-size: 1.1rem;\n}\n.main-footer .footer-form form input[type=email][data-v-69932350] {\n  padding: 0.75rem;\n  height: 0.7rem;\n  font-size: 1.4rem;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n}\n.main-footer .footer-social[data-v-69932350] {\n  align-self: center;\n}\n.main-footer .footer-social a[data-v-69932350] {\n  color: white;\n  padding: 0.5rem;\n  transition: ease-in 0.3s;\n}\n.main-footer .footer-social a[data-v-69932350]:hover {\n  color: #F7BF00;\n}\n.main-footer .footer-made[data-v-69932350] {\n  background: #555;\n  padding: 1rem;\n  margin: 0.7rem;\n}\n@media (max-width: 720px) {\n.main-footer .footer[data-v-69932350] {\n    grid-template-columns: 1fr;\n}\n.main-footer .footer-social[data-v-69932350] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n}\n@media (max-width: 1136px) {\n.main-footer .footer-social[data-v-69932350] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-button {\n  cursor: pointer;\n}\n.modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal-bg .modal {\n  position: relative;\n  color: black;\n  background-color: white;\n  overflow-x: hidden;\n  max-height: 85%;\n  width: 670px;\n  padding: 1rem;\n  box-shadow: #353535 5px 5px 25px;\n  border-radius: 10px;\n  border: none;\n}\n.modal-bg .modal::-webkit-scrollbar {\n  border-radius: 10px;\n  width: 0.35rem;\n}\n.modal-bg .modal::-webkit-scrollbar-track {\n  background: #333;\n}\n.modal-bg .modal::-webkit-scrollbar-thumb {\n  background: #F7BF00;\n}\n.modal-bg .modal-body .cart-body {\n  padding: 0 1rem 0 1rem;\n}\n.modal-bg .modal-body .cart-card {\n  box-shadow: black 1px 1px 7px;\n  display: grid;\n  grid-template-columns: 35% 50% 15%;\n  gap: 0.2rem;\n  margin: 1rem;\n}\n.modal-bg .modal-body .cart-card .body {\n  margin-top: 0.5rem;\n}\n.modal-bg .modal-body .cart-card .body h3 {\n  text-align: center;\n}\n.modal-bg .modal-body .cart-card .body .ingreds {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.modal-bg .modal-body .cart-card .left {\n  margin: 0.5rem auto 0 auto;\n}\n.modal-bg .modal-body .cart-card .left .deleteIcon {\n  cursor: pointer;\n}\n.modal-bg .modal-body .cart-card .left .deleteIcon:hover {\n  color: #B90000;\n}\n.modal-bg .modal-body .cart-card .image {\n  height: 170px;\n  width: 220px;\n}\n.modal-bg .modal-body .cart-card .image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.modal-bg .modal-body .userData {\n  padding: 1rem;\n}\n.modal-bg .modal-body .userData h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.4rem;\n}\n.modal-bg .modal-body .order {\n  padding: 1rem;\n}\n.modal-bg .modal-body .order h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.4rem;\n}\n.modal-bg .modal-body .payment {\n  padding: 1rem;\n}\n.modal-bg .modal-body .payment input {\n  font-size: 1.6rem;\n}\n.modal-bg .modal-body .orderCard {\n  margin: 1rem;\n  padding: 0.7rem;\n  box-shadow: 1px 1px 7px black;\n}\n.modal-bg .modal-body .orderCard h3 {\n  margin: 0.6rem 0 0.6rem 0;\n  text-align: center;\n}\n.modal-bg .modal-body .orderCard .orders {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.modal-bg .modal-body .orderCard .orders .orderItem ul {\n  list-style: none;\n}\n.modal-bg .modal-footer {\n  margin: 1rem;\n  display: flex;\n}\n.modal-enter-active,\n.modal-leave-active {\n  transition: transform 0.4s;\n}\n.modal-enter {\n  transform: translateY(-100%);\n}\n.modal-leave-to {\n  transform: translateY(100%);\n}\n.slide-enter-active,\n.slide-leave-active {\n  transition: opacity 0.5s;\n}\n.slide-enter,\n.slide-leave-to {\n  opacity: 0;\n}\n.modal-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: black;\n  font-size: 40px;\n  cursor: pointer;\n}\n.modal-close:hover {\n  color: #B90000;\n}\n@media (max-width: 720px) {\n.modal-bg .modal {\n    height: 85%;\n    width: 650px;\n}\n.modal-bg .modal-body .cart-card {\n    display: flex;\n    flex-direction: column;\n}\n.modal-bg .modal-body .cart-card .body {\n    padding: 0.6rem;\n    margin-top: 0rem;\n}\n.modal-bg .modal-body .cart-card .body h3 {\n    margin-bottom: 0.7rem;\n}\n.modal-bg .modal-body .cart-card .body .ingreds {\n    grid-template-columns: repeat(1, 1fr);\n}\n.modal-bg .modal-body .cart-card .image {\n    width: 100%;\n}\n.modal-bg .modal-body .cart-card .image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.modal-bg .modal-body .cart-card .left {\n    margin-bottom: 0.6rem;\n}\n.modal-bg .modal-body .orderCard .orders {\n    grid-template-columns: repeat(1, 1fr);\n}\n.modal-bg .modal-footer .modal-price {\n    font-size: 1.3rem;\n}\n}\n@media (max-width: 1136px) {\n.modal-bg .modal {\n    width: 600px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header[data-v-43571d06] {\n  height: 100vh;\n  background: #333 url(" + escape(__webpack_require__(/*! ../../../../img/header-img.jpg */ "./resources/img/header-img.jpg")) + ") no-repeat center center/cover;\n  margin-top: calc(-100px);\n}\n.main-header .main-title[data-v-43571d06] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  flex-direction: column;\n  background: rgba(51, 51, 51, 0.55);\n}\n.main-header .main-title h1[data-v-43571d06] {\n  font-size: 3.9rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.main-header .main-title p[data-v-43571d06] {\n  font-size: 1.9rem;\n  text-align: center;\n  width: 50%;\n}\n.main-header .main-title .btn-group[data-v-43571d06] {\n  text-align: center;\n}\n@media (max-width: 720px) {\n.main-header[data-v-43571d06] {\n    margin-top: 0;\n}\n.main-header .main-title h1[data-v-43571d06] {\n    font-size: 2rem;\n}\n.main-header .main-title p[data-v-43571d06] {\n    font-size: 1.4rem;\n    width: 85%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    [
      _vm.showOpenNavbarBtn
        ? _c(
            "div",
            {
              attrs: { id: "navOpen" },
              on: {
                click: function($event) {
                  return _vm.setIsNavbarOpen(true)
                }
              }
            },
            [_c("font-awesome", { attrs: { icon: ["fas", "bars"] } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "navbar" } },
        [_vm.isNavbarOpen ? _c("Navbar") : _vm._e()],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide" } }, [
        _vm.showCartModal
          ? _c("div", {
              staticClass: "fade-in",
              on: {
                click: function($event) {
                  _vm.showCartModal = false
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.showOrdersModal
          ? _c("div", {
              staticClass: "fade-in",
              on: {
                click: function($event) {
                  _vm.showOrdersModal = false
                }
              }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "modal" } },
        [
          _vm.showCartModal
            ? _c("Modal", {
                on: {
                  close: function($event) {
                    _vm.showCartModal = false
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showOrdersModal
            ? _c("OrdersModal", {
                on: {
                  close: function($event) {
                    _vm.showOrdersModal = false
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "main-footer" }, [
    _c("div", { staticClass: "footer footer-container" }, [
      _c("div", { staticClass: "footer-address" }, [
        _c("h3", [_vm._v("Elérhetőségeink:")]),
        _vm._v(" "),
        _c("ul", [
          _c(
            "li",
            [
              _c("font-awesome", { attrs: { icon: ["fas", "house-user"] } }),
              _vm._v(
                "\n                    Budapest, 1119 Semmilyen utca. 44/A.\n                "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("font-awesome", { attrs: { icon: ["fas", "phone"] } }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "text-white",
                  attrs: { href: "tel:36 1 999 5874" }
                },
                [_vm._v("+36 1 999 5874")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("font-awesome", { attrs: { icon: ["fas", "envelope"] } }),
              _vm._v("\n                    meatball@info.hu\n                ")
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "footer-social" }, [
        _c(
          "a",
          { attrs: { href: "https://www.facebook.com/", target: "_blank" } },
          [
            _c("font-awesome", {
              attrs: { icon: ["fab", "facebook-square"], size: "3x" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          { attrs: { href: "https://twitter.com/", target: "_blank" } },
          [
            _c("font-awesome", {
              attrs: { icon: ["fab", "twitter"], size: "3x" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: { href: "https://www.tripadvisor.co.hu/", target: "_blank" }
          },
          [
            _c("font-awesome", {
              attrs: { icon: ["fab", "tripadvisor"], size: "3x" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          { attrs: { href: "https://www.youtube.com/", target: "_blank" } },
          [
            _c("font-awesome", {
              attrs: { icon: ["fab", "youtube"], size: "3x" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: {
              href: "https://www.instagram.com/?hl=hu",
              target: "_blank"
            }
          },
          [
            _c("font-awesome", {
              attrs: { icon: ["fab", "instagram"], size: "3x" }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "footer-made" }, [
      _c("p", [
        _vm._v(
          "Minden Jog Fenntartva © Budapest. Nagy Tamás " + _vm._s(_vm.dateTime)
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-form" }, [
      _c("form", [
        _c("label", { attrs: { for: "" } }, [
          _vm._v("Iratkozzon fel hírlevelünkre")
        ]),
        _vm._v(" "),
        _c("input", { attrs: { type: "email", name: "", id: "" } }),
        _vm._v(" "),
        _c("input", {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", value: "Feliratkozás!" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "navbar",
      attrs: { role: "navigation" },
      on: {
        mouseleave: function($event) {
          _vm.hideProfileDropdown()
          _vm.hideFoodDropdown()
        }
      }
    },
    [
      _vm.showOpenNavbarBtn
        ? _c(
            "span",
            {
              staticClass: "sidenav-close",
              on: {
                click: function($event) {
                  return _vm.closeNav()
                }
              }
            },
            [
              _c("font-awesome", {
                attrs: { icon: ["far", "times-circle"], size: "2x" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-brand" },
        [
          _c("router-link", { attrs: { to: { name: "Welcome" } } }, [
            _c("span", { staticClass: "primary-color" }, [_vm._v("Húsgolyó ")]),
            _vm._v("Étterem")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "navbar-nav" },
        [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c("LinkItem", {
                attrs: {
                  menuName: "Portfólióm",
                  className: "nav-link",
                  routeName: "MainWelcome"
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.closeNav()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("DesktopNav"),
          _vm._v(" "),
          _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.loggedIn,
                  expression: "!loggedIn"
                }
              ],
              staticClass: "nav-item"
            },
            [
              _c("LinkItem", {
                attrs: {
                  menuName: "Belépés",
                  className: "nav-link",
                  routeName: "Login"
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.closeNav()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.loggedIn,
                  expression: "!loggedIn"
                }
              ],
              staticClass: "nav-item"
            },
            [
              _c("LinkItem", {
                attrs: {
                  menuName: "Regisztráció",
                  className: "nav-link",
                  routeName: "Register"
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.closeNav()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loggedIn,
                  expression: "loggedIn"
                }
              ],
              staticClass: "nav-item dropdown"
            },
            [
              _c(
                "a",
                _vm._g(
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: { id: "navbarDropdown" }
                  },
                  _vm.showOpenNavbarBtn
                    ? { click: _vm.toggleProfileDrop }
                    : { mouseenter: _vm.openProfileDrop }
                ),
                [
                  _vm._v(_vm._s(_vm.userName)),
                  _c("span", { staticClass: "caret" })
                ]
              ),
              _vm._v(" "),
              _c("transition", { attrs: { name: "dropdownNav" } }, [
                _vm.showProfileDrop
                  ? _c("div", { staticClass: "dropdown-menu" }, [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-menu-item",
                          attrs: { id: "logOutBtn", href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.logOut()
                            }
                          }
                        },
                        [
                          _c("font-awesome", {
                            staticClass: "svg-icon",
                            attrs: { icon: ["fas", "sign-out-alt"], size: "2x" }
                          }),
                          _vm._v(
                            " \n                        Kilépés\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-menu-item",
                          on: {
                            click: function($event) {
                              _vm.$parent.showOrdersModal = true
                            }
                          }
                        },
                        [
                          _c("font-awesome", {
                            staticClass: "svg-icon",
                            attrs: {
                              icon: ["fas", "cart-arrow-down"],
                              size: "2x"
                            }
                          }),
                          _vm._v(
                            " \n                    Korábbi rendelések\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-menu-item",
                          on: {
                            click: function($event) {
                              _vm.$parent.showCartModal = true
                            }
                          }
                        },
                        [
                          _c("font-awesome", {
                            staticClass: "svg-icon",
                            attrs: {
                              icon: ["fas", "shopping-cart"],
                              size: "2x"
                            }
                          }),
                          _vm._v(
                            "\n                        Kosár\n                        "
                          ),
                          _c("span", { staticClass: "noOfFoodsInCart" }, [
                            _vm._v(_vm._s(_vm.totalQty))
                          ])
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ])
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "nav-item dropdown" },
    [
      _c(
        "a",
        _vm._g(
          { staticClass: "nav-link dropdown", attrs: { id: "foodOrder" } },
          _vm.showOpenNavbarBtn
            ? { click: _vm.toggleFoodDrop }
            : { mouseenter: _vm.openFoodDrop }
        ),
        [_vm._v("Étel Rendelés")]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "dropdownNav" } }, [
        _vm.showFoodDrop
          ? _c(
              "div",
              { staticClass: "dropdown-menu" },
              [
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Pizzák", routeName: "Pizza" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "pizza-slice"], size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Levesek", routeName: "Soup" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "soap"], size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Desszertek", routeName: "Dessert" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "birthday-cake"], size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Italok", routeName: "Drink" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "wine-glass-alt"], size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Főételek", routeName: "Meal" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "bacon"], size: "2x" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "LinkItem",
                  {
                    attrs: { menuName: "Tészták", routeName: "Pasta" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.closeNavbar($event)
                      }
                    }
                  },
                  [
                    _c("font-awesome", {
                      staticClass: "svg-icon",
                      attrs: { icon: ["fas", "bread-slice"], size: "2x" }
                    })
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    { class: _vm.className, attrs: { to: { name: _vm.routeName } } },
    [_vm._t("default"), _vm._v("\n   " + _vm._s(_vm.menuName) + "\n")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "main-header" }, [
      _c("div", { staticClass: "main-title" }, [
        _c("h1", [
          _vm._v("Üdvözöljük a "),
          _c("span", { staticClass: "primary-color" }, [_vm._v("Húsgolyó")]),
          _vm._v(" Étterem Honlapján!")
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("Köszöntöm a portfólió oldalamon!")]),
        _vm._v(" "),
        _c("p", [_vm._v("Az oldal célja a jelenlegi tudásom bemutatása")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/img/header-img.jpg":
/*!**************************************!*\
  !*** ./resources/img/header-img.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/header-img.jpg?0dcf0b17873f90813771e80a087bb155";

/***/ }),

/***/ "./resources/js/views/MeatBall.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/MeatBall.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeatBall.vue?vue&type=template&id=bf0920ee& */ "./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee&");
/* harmony import */ var _MeatBall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeatBall.vue?vue&type=script&lang=js& */ "./resources/js/views/MeatBall.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MeatBall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MeatBall.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MeatBall.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/MeatBall.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeatBall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MeatBall.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MeatBall.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MeatBall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee&":
/*!************************************************************************!*\
  !*** ./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MeatBall.vue?vue&type=template&id=bf0920ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MeatBall.vue?vue&type=template&id=bf0920ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MeatBall_vue_vue_type_template_id_bf0920ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/includes/Footer.vue":
/*!************************************************!*\
  !*** ./resources/js/views/includes/Footer.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=69932350&scoped=true& */ "./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& */ "./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69932350",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/includes/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=style&index=0&id=69932350&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_69932350_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=69932350&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Footer.vue?vue&type=template&id=69932350&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_69932350_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/includes/Navbar.vue":
/*!************************************************!*\
  !*** ./resources/js/views/includes/Navbar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=08454745& */ "./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=08454745& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/Navbar.vue?vue&type=template&id=08454745&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_08454745___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/DesktopNav.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopNav.vue?vue&type=template&id=dc64bb14& */ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14&");
/* harmony import */ var _DesktopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopNav.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesktopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/NavbarIncludes/DesktopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopNav.vue?vue&type=template&id=dc64bb14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/DesktopNav.vue?vue&type=template&id=dc64bb14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopNav_vue_vue_type_template_id_dc64bb14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/LinkItem.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkItem.vue?vue&type=template&id=bff9d008& */ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008&");
/* harmony import */ var _LinkItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkItem.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LinkItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/NavbarIncludes/LinkItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LinkItem.vue?vue&type=template&id=bff9d008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/NavbarIncludes/LinkItem.vue?vue&type=template&id=bff9d008&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkItem_vue_vue_type_template_id_bff9d008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/includes/WelcomeIncludes/MainHeader.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainHeader.vue?vue&type=template&id=43571d06&scoped=true& */ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true&");
/* harmony import */ var _MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& */ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43571d06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/WelcomeIncludes/MainHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=style&index=0&id=43571d06&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_43571d06_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainHeader.vue?vue&type=template&id=43571d06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/WelcomeIncludes/MainHeader.vue?vue&type=template&id=43571d06&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_template_id_43571d06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);