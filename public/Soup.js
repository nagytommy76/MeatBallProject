(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Soup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_setFood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/setFood */ "./resources/js/mixins/setFood.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_setFood__WEBPACK_IMPORTED_MODULE_0__["default"]],
  name: "SoupFilter",
  data: function data() {
    return {
      foods: {},
      orderRoute: "getSoupByOrder",
      byName: "getSoupByName",
      minMaxPrice: "getSoupMinMaxPrice",
      isLoading: false,
      foodType: "soup"
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c& ***!
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
          _vm._v("Levesek")
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "food_card_content" },
          _vm._l(_vm.foods, function(soup) {
            return _c(
              "div",
              { key: soup.id },
              [
                _c("BaseCard", {
                  attrs: {
                    foodType: _vm.foodType,
                    foodId: soup.id,
                    image: soup.image.image_path,
                    foodName: soup.name,
                    foodPrice: soup.price,
                    ingredients: soup.ingredients
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

/***/ "./resources/js/components/soup/SoupFilter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/soup/SoupFilter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoupFilter.vue?vue&type=template&id=787e688c& */ "./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c&");
/* harmony import */ var _SoupFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoupFilter.vue?vue&type=script&lang=js& */ "./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoupFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/soup/SoupFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoupFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoupFilter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/soup/SoupFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoupFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoupFilter.vue?vue&type=template&id=787e688c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/soup/SoupFilter.vue?vue&type=template&id=787e688c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoupFilter_vue_vue_type_template_id_787e688c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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