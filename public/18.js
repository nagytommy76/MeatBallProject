(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: null,
      showEmpty: false
    };
  },
  created: function created() {
    this.getOrders();
  },
  methods: {
    getOrders: function getOrders() {
      var _this = this;

      axios.get('myOrders').then(function (result) {
        _this.orders = result.data.data;

        if (_this.orders.length == 0) {
          _this.showEmpty = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a& ***!
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
  return _c("div", { staticClass: "modal-bg" }, [
    _c("div", { staticClass: "modal" }, [
      _c(
        "span",
        {
          staticClass: "modal-close",
          on: {
            click: function($event) {
              return _vm.$emit("close")
            }
          }
        },
        [_c("i", { staticClass: "far fa-times-circle" })]
      ),
      _vm._v(" "),
      _c("h1", { staticClass: "text-center py-1" }, [
        _vm._v("Korábbi rendeléseim")
      ]),
      _vm._v(" "),
      _c(
        "h1",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showEmpty,
              expression: "showEmpty"
            }
          ]
        },
        [_vm._v("Még nem rendelt tölünk!")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal-body" },
        _vm._l(_vm.orders, function(order) {
          return _c("div", { key: order.id, staticClass: "orderCard" }, [
            _c("h3", [_vm._v("Rendelve: " + _vm._s(order.created_at))]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "orders" },
              _vm._l(order.cartItems.items, function(item, index) {
                return _c("div", { key: index, staticClass: "orderItem" }, [
                  _c("ul", [
                    _c("li", [
                      _c("div", { staticClass: "tooltip" }, [
                        _c("span", { staticClass: "tooltiptext" }, [
                          _vm._v(
                            "\n                                    Mennyiség " +
                              _vm._s(item.qty) +
                              " db\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _c("h5", [_vm._v(_vm._s(item.item.foodName))])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("div", { staticClass: "tooltip" }, [
                        _c("span", { staticClass: "tooltiptext" }, [
                          _vm._v(
                            "\n                                    Eredeti ár: " +
                              _vm._s(item.item.price) +
                              " Ft\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _c("h5", [
                            _vm._v(_vm._s(item.oneItemTotalPrice) + " Ft")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("h3", [
              _vm._v("Összesen: " + _vm._s(order.cartItems.totalPrice) + " Ft")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Rendelés szám: " + _vm._s(order.orderNumber))]),
            _vm._v(" "),
            order.with_paypal == 1
              ? _c("div", [
                  _c("h3", [_vm._v("PayPal-el fizetve")]),
                  _vm._v(" "),
                  _c("h3", [
                    _vm._v("Tranzakciós ID: " + _vm._s(order.transaction_id))
                  ])
                ])
              : _vm._e()
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/OrderModal.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Auth/OrderModal.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderModal.vue?vue&type=template&id=e3d1776a& */ "./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a&");
/* harmony import */ var _OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/OrderModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/OrderModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderModal.vue?vue&type=template&id=e3d1776a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/OrderModal.vue?vue&type=template&id=e3d1776a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_e3d1776a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);