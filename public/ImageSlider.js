(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageSlider"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    imgFolderName: {
      type: String,
      required: false
    },
    singleImage: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  mounted: function mounted() {
    switch (this.imgFolderName) {
      case "Wargaming":
        this.getWGImagesFromFolderByName();
        break;

      case "Meatball":
        this.getMeatBallImagesFromFolderByName();
        break;

      case "React Recipe":
        this.getReactRecipeImagesFromFolderByName();
        break;

      case "CompStoreMERN":
        this.getCompStoreImagesFromFolderByName();
        break;
    }
  },
  data: function data() {
    return {
      step: 0,
      nextPage: "Következő",
      prevPage: "Nincs előző kép",
      allImages: []
    };
  },
  methods: {
    // A require.context() build-elésnél fut le, így nem lehet template literalt használni mert az futási időben "adódik át"
    // Ezért kell 3 vagy több függvény...
    getMeatBallImagesFromFolderByName: function getMeatBallImagesFromFolderByName() {
      var allMeatballImages = ["meatball-main-page_z2gqjt", "pizza_wp57mc", "meal_lpqmay", "cart_s1dxdy", "paypal_ir1kue", "input-admin_rcjs2y", "modify_f1ybut"];
      this.fillImages(allMeatballImages);
    },
    getWGImagesFromFolderByName: function getWGImagesFromFolderByName() {
      var allWGImages = ["search_evfww8", "modal_moxvgh"];
      this.fillImages(allWGImages);
    },
    getReactRecipeImagesFromFolderByName: function getReactRecipeImagesFromFolderByName() {
      var allRecipeImages = ["React_Recipe_Finder_WelcomePage1_lvecwz", "React_Recipe_Finder_fvspcp", "React_Recipe_Finder_videos_qrclha", "React_Recipe_Finder_menuItems_n0zzc9", "React_Recipe_Finder_details_jci5zy"];
      this.fillImages(allRecipeImages);
    },
    getCompStoreImagesFromFolderByName: function getCompStoreImagesFromFolderByName() {
      var allCompStoreImages = ["welcome_cwzwvv", "cpu_ll1tf7", "vga_kxxyxh", "HDDShop_eg6zkt", "Details_jfyguo", "cart_bi5zvy", "checkout_tco1nl", "email_lfrjji"];
      this.fillImages(allCompStoreImages);
    },
    fillImages: function fillImages(imagesNameFromFolder) {
      var _this = this;

      imagesNameFromFolder.forEach(function (imageName) {
        return _this.allImages.push(imageName);
      });
    },
    increase: function increase() {
      if (this.allImages[this.step + 1] !== undefined) {
        ++this.step;

        if (this.allImages[this.step - 1] !== undefined) {
          this.prevPage = "Előző";
        }
      }

      if (this.allImages[this.step + 1] === undefined) {
        this.nextPage = "Nincs több kép";
      }
    },
    decrease: function decrease() {
      if (this.allImages[this.step - 1] !== undefined) {
        --this.step;

        if (this.allImages[this.step + 1] !== undefined) {
          this.nextPage = "Következő";
        }
      }

      if (this.allImages[this.step - 1] === undefined) {
        this.prevPage = "Nincs előző kép";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-image-enter-active,\n.slide-image-leave-active {\n  transition: all 1s ease-out;\n  overflow: hidden;\n  visibility: visible;\n  opacity: 1;\n}\n.slide-image-enter,\n.slide-image-leave-to {\n  opacity: 0;\n  visibility: hidden;\n}\n.image-close {\n  position: absolute;\n  top: 15px;\n  right: 0;\n  color: #ffae00;\n  cursor: pointer;\n  font-size: 1.5rem;\n  transition: color 0.2s;\n  z-index: 5;\n}\n.image-close:hover {\n  color: #C80600;\n}\n.image-slider {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 4;\n  margin: auto;\n  width: 95%;\n  height: auto;\n}\n.image-slider .img-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n}\n.image-slider .img-container img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: 100%;\n  height: 100%;\n}\n.image-slider .svg-icon {\n  cursor: pointer;\n}\n.image-slider .arrow-right {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  color: black;\n  background-color: rgba(247, 191, 0, 0.6);\n  border-radius: 7px 0 0 7px;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n.image-slider .arrow-right:hover {\n  background-color: #f7bf00;\n  color: white;\n}\n.image-slider .arrow-left {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  color: black;\n  background-color: rgba(247, 191, 0, 0.6);\n  border-radius: 0 7px 7px 0;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n.image-slider .arrow-left:hover {\n  background-color: #f7bf00;\n  color: white;\n}\n@media (max-width: 720px) {\n.image-slider {\n    width: 100%;\n    height: 100%;\n}\n.image-slider .image-close {\n    top: 5px;\n    right: 5px;\n    font-size: 1.1rem;\n}\n.image-slider .img-container img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n    height: 100%;\n}\n.image-slider .arrow {\n    background-color: #f7bf00;\n}\n.image-slider .arrow-right {\n    padding: 0.2rem;\n}\n.image-slider .arrow-left {\n    padding: 0.2rem;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSlider.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "image-slider" },
    [
      _c(
        "span",
        {
          staticClass: "image-close",
          on: {
            click: function($event) {
              return _vm.$emit("close")
            }
          }
        },
        [
          _c("font-awesome", {
            attrs: { icon: ["far", "times-circle"], size: "2x" }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.singleImage
        ? _c(
            "transition",
            { attrs: { name: "slide-image" } },
            _vm._l([_vm.step], function(nth) {
              return _c("CloudImage", {
                key: nth,
                attrs: {
                  folder: _vm.imgFolderName,
                  image: _vm.allImages[nth],
                  className: "img-container"
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.singleImage
        ? _c(
            "div",
            {
              staticClass: "img-container",
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            },
            [
              _c("img", {
                attrs: { src: "/images/" + _vm.imgFolderName + ".jpg" }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.singleImage
        ? _c(
            "div",
            { staticClass: "arrow-right", on: { click: _vm.increase } },
            [
              _c(
                "Tooltip",
                { attrs: { text: _vm.nextPage } },
                [
                  _c("font-awesome", {
                    staticClass: "svg-icon",
                    attrs: { icon: ["fas", "arrow-right"], size: "3x" }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.singleImage
        ? _c(
            "div",
            { staticClass: "arrow-left", on: { click: _vm.decrease } },
            [
              _c(
                "Tooltip",
                { attrs: { text: _vm.prevPage } },
                [
                  _c("font-awesome", {
                    staticClass: "svg-icon",
                    attrs: { icon: ["fas", "arrow-left"], size: "3x" }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/views/includes/MainPage/includes/ImageSlider.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSlider.vue?vue&type=template&id=5a96005a& */ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a&");
/* harmony import */ var _ImageSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageSlider.vue?vue&type=script&lang=js& */ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlider.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/includes/MainPage/includes/ImageSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSlider.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageSlider.vue?vue&type=template&id=5a96005a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/includes/MainPage/includes/ImageSlider.vue?vue&type=template&id=5a96005a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_template_id_5a96005a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);