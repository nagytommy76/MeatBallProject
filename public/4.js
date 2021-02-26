(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    moreIngreds: Array
  },
  methods: {
    select: function select(e) {
      var ingredId = parseInt(e.target.id);
      var ingredPrice = parseInt(e.target.value);

      if (e.target.checked) {
        if (!this.$parent.selectedIngreds.includes(ingredId)) {
          this.$parent.finalPrice += ingredPrice;
          this.$parent.selectedIngreds.push(ingredId);
        }
      } else {
        this.$parent.finalPrice -= ingredPrice;
        var found = this.$parent.selectedIngreds.findIndex(function (item) {
          return item == ingredId;
        });
        this.$parent.selectedIngreds.splice(found, 1);
      }
    },
    inSelectedIngreds: function inSelectedIngreds(ingredId) {
      if (this.$parent.selectedIngreds.length > 0) {
        return this.$parent.selectedIngreds.includes(ingredId);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MoreIngredients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreIngredients */ "./resources/js/components/pizza/MoreIngredients.vue");
/* harmony import */ var _helpers_addToCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/addToCart */ "./resources/js/helpers/addToCart.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MoreIngredients: _MoreIngredients__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    pizzaId: Number,
    image: String,
    pizzaName: String,
    ingredients: Array,
    pizzaPrice: Number,
    moreIngreds: Array
  },
  data: function data() {
    return {
      moreButton: false,
      selectedIngreds: [],
      finalPrice: this.pizzaPrice,
      foodType: 'pizza',
      addedToCart: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    userLoggedIn: 'getUserLoggedIn'
  })),
  methods: {
    loadPlusIngreds: function loadPlusIngreds() {
      this.moreButton = !this.moreButton;
    },
    addCart: function addCart() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.userLoggedIn) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _helpers_addToCart__WEBPACK_IMPORTED_MODULE_2__["default"].addFoodToCart(_this.foodType, _this.pizzaId, _this.selectedIngreds).then(function (result) {
                  _this.$store.commit('setCartItems', result.data);

                  _this.selectedIngreds = [];
                  _this.finalPrice = _this.pizzaPrice;

                  _this.hideSuccessMsg();

                  if (_this.moreButton) {
                    _this.moreButton = !_this.moreButton;
                  }
                });

              case 3:
                _context.next = 6;
                break;

              case 5:
                _this.hideSuccessMsg();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    hideSuccessMsg: function hideSuccessMsg() {
      var _this2 = this;

      this.addedToCart = !this.addedToCart;
      setTimeout(function () {
        _this2.addedToCart = !_this2.addedToCart;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PizzaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaCard */ "./resources/js/components/pizza/PizzaCard.vue");
/* harmony import */ var _mixins_setFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/setFood */ "./resources/js/mixins/setFood.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    PizzaCard: _PizzaCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_setFood__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      foods: [],
      orderRoute: "getPizzaByOrder",
      byName: "searchPizzaByName",
      minMaxPrice: "getMinMaxPrice",
      ingreds: [],
      foodType: "pizzas"
    };
  },
  created: function created() {
    this.fetchIngredients();
  },
  methods: {
    fetchIngredients: function fetchIngredients() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('getPlusIngreds').then(function (ingredients) {
                  _this.ingreds = ingredients.data.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "moreIngredients" },
    _vm._l(_vm.moreIngreds, function(ing) {
      return _c("div", { key: ing.ingred_id }, [
        _c("label", [
          _c("input", {
            attrs: {
              type: "checkbox",
              name: "plusIngreds[]",
              id: ing.ingred_id
            },
            domProps: {
              value: ing.price,
              checked: _vm.inSelectedIngreds(ing.ingred_id)
            },
            on: { click: _vm.select }
          }),
          _vm._v(
            "            \r\n        " + _vm._s(ing.ingredient_name) + " "
          ),
          _c("span", { staticClass: "primary-color" }, [
            _vm._v("(" + _vm._s(ing.price) + ") ")
          ]),
          _vm._v(" Ft\r\n        ")
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("img", { attrs: { src: "/storage/" + _vm.image, alt: "Pizza Kép" } })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "food_card_inner" },
      [
        _c("h1", { staticClass: "food_card_heading text-center" }, [
          _vm._v(_vm._s(_vm.pizzaName))
        ]),
        _vm._v(" "),
        _c("h3", [_vm._v("Feltétek:")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ingredients" },
          _vm._l(_vm.ingredients, function(ingred) {
            return _c("span", { key: ingred.id }, [
              _c("span", [_vm._v(_vm._s(ingred.ingredient) + ", ")])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("BaseButton", {
          attrs: { buttonText: "További Feltétek" },
          nativeOn: {
            click: function($event) {
              return _vm.loadPlusIngreds($event)
            }
          }
        }),
        _vm._v(" "),
        _vm.moreButton
          ? _c("MoreIngredients", { attrs: { moreIngreds: _vm.moreIngreds } })
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          !_vm.userLoggedIn
            ? _c(
                "div",
                [
                  _vm.addedToCart
                    ? _c("Alert", { attrs: { Msg: "Kérem jelentkezzen be!" } })
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
                          className: "success",
                          Msg: "A termék a kosárban"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "food_card_footer" },
      [
        _c("BaseButton", {
          attrs: { buttonText: "Kosárba!" },
          nativeOn: {
            click: function($event) {
              return _vm.addCart($event)
            }
          }
        }),
        _vm._v(" "),
        _c("strong", { staticClass: "price" }, [
          _vm._v("\n      Ár:\n      "),
          _c("span", { staticClass: "primary-color" }, [
            _vm._v(_vm._s(_vm.finalPrice))
          ]),
          _vm._v(" Ft\n    ")
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "card-and-filter" },
    [
      _c("BaseFilter", {
        attrs: {
          orderByRoute: _vm.orderRoute,
          byName: _vm.byName,
          minMaxPrice: _vm.minMaxPrice
        },
        on: { "set-food": _vm.setFood }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "food_card_container" }, [
        _c("h1", { staticClass: "py-1 text-black text-center" }, [
          _vm._v("Pizzák")
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "food_card_content" },
          _vm._l(_vm.foods, function(pizza) {
            return _c(
              "div",
              { key: pizza.id },
              [
                _c("PizzaCard", {
                  attrs: {
                    pizzaId: pizza.id,
                    image: pizza.image.image_path,
                    pizzaName: pizza.name,
                    ingredients: pizza.ingredients,
                    pizzaPrice: pizza.price,
                    moreIngreds: _vm.ingreds
                  }
                })
              ],
              1
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pizza/MoreIngredients.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pizza/MoreIngredients.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreIngredients.vue?vue&type=template&id=a9d5ab6a& */ "./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a&");
/* harmony import */ var _MoreIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreIngredients.vue?vue&type=script&lang=js& */ "./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoreIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pizza/MoreIngredients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreIngredients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/MoreIngredients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreIngredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MoreIngredients.vue?vue&type=template&id=a9d5ab6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/MoreIngredients.vue?vue&type=template&id=a9d5ab6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MoreIngredients_vue_vue_type_template_id_a9d5ab6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pizza/PizzaCard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pizza/PizzaCard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PizzaCard.vue?vue&type=template&id=94eb1a54& */ "./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54&");
/* harmony import */ var _PizzaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaCard.vue?vue&type=script&lang=js& */ "./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PizzaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pizza/PizzaCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PizzaCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PizzaCard.vue?vue&type=template&id=94eb1a54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaCard.vue?vue&type=template&id=94eb1a54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaCard_vue_vue_type_template_id_94eb1a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pizza/PizzaFilter.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pizza/PizzaFilter.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PizzaFilter.vue?vue&type=template&id=3857bbbe& */ "./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe&");
/* harmony import */ var _PizzaFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaFilter.vue?vue&type=script&lang=js& */ "./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PizzaFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pizza/PizzaFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PizzaFilter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PizzaFilter.vue?vue&type=template&id=3857bbbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pizza/PizzaFilter.vue?vue&type=template&id=3857bbbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PizzaFilter_vue_vue_type_template_id_3857bbbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/mixins/setFood.js":
/*!****************************************!*\
  !*** ./resources/js/mixins/setFood.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setFood: function setFood(foodData) {
      this.foods = foodData;
    }
  }
});

/***/ })

}]);