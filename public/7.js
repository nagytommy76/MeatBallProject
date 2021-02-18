(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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
          on: { click: _vm.addToCart }
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



/***/ })

}]);