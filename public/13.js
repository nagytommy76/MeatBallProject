(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/addToCart */ "./resources/js/helpers/addToCart.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseCard',
  data: function data() {
    return {
      addedToCart: false,
      showVerifyEmail: false,
      finalPrice: this.foodPrice
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    userLoggedIn: 'getUserLoggedIn'
  })),
  props: {
    foodType: String,
    foodId: Number,
    image: String,
    foodName: String,
    foodPrice: Number,
    ingredients: {
      type: String,
      requried: false
    },
    capacity: {
      type: Number,
      requried: false
    }
  },
  methods: {
    addToCart: function addToCart() {
      var _this = this;

      if (this.userLoggedIn) {
        _helpers_addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].addFoodToCart(this.foodType, this.foodId).then(function (result) {
          if (result.data.error) {
            _this.showVerify();
          } else {
            _this.$store.commit('setCartItems', result.data);

            _this.finalPrice = _this.foodPrice;

            _this.hideSuccessMsg();
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      } else {
        this.hideSuccessMsg();
      }
    },
    showVerify: function showVerify() {
      var _this2 = this;

      this.showVerifyEmail = true;
      setTimeout(function () {
        _this2.showVerifyEmail = false;
      }, 4000);
    },
    hideSuccessMsg: function hideSuccessMsg() {
      var _this3 = this;

      this.addedToCart = !this.addedToCart;
      setTimeout(function () {
        _this3.addedToCart = !_this3.addedToCart;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "food_card" }, [
    _c("div", { staticClass: "food_card_header" }, [
      _c("img", { attrs: { src: "/storage/" + _vm.image, alt: "Leves Kép" } })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "food_card_inner" }, [
      _c("h1", { staticClass: "food_card_heading text-center" }, [
        _vm._v(_vm._s(_vm.foodName))
      ]),
      _vm._v(" "),
      _vm.ingredients != undefined
        ? _c("div", { staticClass: "ingredients" }, [
            _c("h3", [_vm._v("Összetevők:")]),
            _vm._v(" "),
            _c("span", [_vm._v("(" + _vm._s(_vm.ingredients) + ")")])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.capacity != undefined
        ? _c("div", {}, [
            _c("h3", [_vm._v("Térfogat:")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.capacity) + " (ml)")])
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.userLoggedIn
        ? _c(
            "div",
            [
              _vm.addedToCart
                ? _c("Alert", {
                    attrs: {
                      Msg: "Kérem jelentkezzen be!",
                      className: "danger"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _c(
            "div",
            [
              _vm.addedToCart
                ? _c("Alert", {
                    attrs: {
                      Msg: "A termék bekerült a kosárba",
                      className: "success"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.showVerifyEmail
                ? _c("Alert", {
                    attrs: {
                      Msg: "E-mail címet vissza kell igazolni!",
                      className: "danger"
                    }
                  })
                : _vm._e()
            ],
            1
          )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "food_card_footer" },
      [
        _c("BaseButton", {
          attrs: { id: _vm.foodId, buttonText: "Kosárba!" },
          nativeOn: {
            click: function($event) {
              return _vm.addToCart($event)
            }
          }
        }),
        _vm._v(" "),
        _c("strong", { staticClass: "price" }, [
          _vm._v("\n             Ár:\n             "),
          _c("span", { staticClass: "primary-color" }, [
            _vm._v(_vm._s(_vm.finalPrice))
          ]),
          _vm._v(" Ft\n         ")
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/baseComponents/BaseCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/baseComponents/BaseCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseCard.vue?vue&type=template&id=1e871e24& */ "./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24&");
/* harmony import */ var _BaseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCard.vue?vue&type=script&lang=js& */ "./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/baseComponents/BaseCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/baseComponents/BaseCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseCard.vue?vue&type=template&id=1e871e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/baseComponents/BaseCard.vue?vue&type=template&id=1e871e24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseCard_vue_vue_type_template_id_1e871e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/addToCart.js":
/*!*******************************************!*\
  !*** ./resources/js/helpers/addToCart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addToCart; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var addToCart = /*#__PURE__*/function () {
  function addToCart() {
    _classCallCheck(this, addToCart);
  }

  _createClass(addToCart, null, [{
    key: "addFoodToCart",
    value: function () {
      var _addFoodToCart = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(foodType, foodId) {
        var selectedIngreds,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                selectedIngreds = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
                _context.next = 3;
                return axios.post('addFoodToCart', {
                  foodType: foodType,
                  foodId: foodId,
                  plusIngreds: selectedIngreds
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addFoodToCart(_x, _x2) {
        return _addFoodToCart.apply(this, arguments);
      }

      return addFoodToCart;
    }()
  }]);

  return addToCart;
}();



/***/ })

}]);