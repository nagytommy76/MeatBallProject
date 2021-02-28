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
      case 'wargaming':
        this.getWGImagesFromFolderByName();
        break;

      case 'meatball':
        this.getMeatBallImagesFromFolderByName();
        break;

      case 'recipe':
        this.getRecipeImagesFromFolderByName();
        break;
    }
  },
  data: function data() {
    return {
      step: 0,
      nextPage: 'Következő',
      prevPage: 'Nincs előző kép',
      images: []
    };
  },
  methods: {
    // A require.context() build-elésnél fut le, így nem lehet template literalt használni mert az futási időben "adódik át"
    // Ezért kell 3 vagy több függvény...
    getWGImagesFromFolderByName: function getWGImagesFromFolderByName() {
      this.fillImages(__webpack_require__("./resources/img/wargaming sync recursive \\.jpg$"));
    },
    getMeatBallImagesFromFolderByName: function getMeatBallImagesFromFolderByName() {
      this.fillImages(__webpack_require__("./resources/img/meatball sync recursive \\.jpg$"));
    },
    getRecipeImagesFromFolderByName: function getRecipeImagesFromFolderByName() {
      this.fillImages(__webpack_require__("./resources/img/recipe sync recursive \\.jpg$"));
    },
    fillImages: function fillImages(imagesNameFromFolder) {
      var _this = this;

      imagesNameFromFolder.keys().forEach(function (imgName) {
        return _this.images.push(imgName.substring(1));
      });
    },
    increase: function increase() {
      if (this.images[this.step + 1] !== undefined) {
        ++this.step;

        if (this.images[this.step - 1] !== undefined) {
          this.prevPage = 'Előző';
        }
      }

      if (this.images[this.step + 1] === undefined) {
        this.nextPage = 'Nincs több kép';
      }
    },
    decrease: function decrease() {
      if (this.images[this.step - 1] !== undefined) {
        --this.step;

        if (this.images[this.step + 1] !== undefined) {
          this.nextPage = 'Következő';
        }
      }

      if (this.images[this.step - 1] === undefined) {
        this.prevPage = 'Nincs előző kép';
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
exports.push([module.i, ".slide-image-enter-active,\n.slide-image-leave-active {\n  transition: all 0.8s ease-out;\n  overflow: hidden;\n  visibility: visible;\n  opacity: 1;\n}\n.slide-image-enter,\n.slide-image-leave-to {\n  opacity: 0;\n  visibility: hidden;\n}\n.image-slider {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 4;\n  margin: auto;\n  width: 95%;\n  height: auto;\n}\n.image-slider .img-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n}\n.image-slider .img-container img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  width: 100%;\n  height: 100%;\n}\n.image-slider .image-close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  color: #ffae00;\n  cursor: pointer;\n  font-size: 1.5rem;\n  transition: color 0.2s;\n  z-index: 5;\n}\n.image-slider .image-close:hover {\n  color: #C80600;\n}\n.image-slider .arrow-right {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  color: black;\n  background-color: rgba(247, 191, 0, 0.6);\n  border-radius: 7px 0 0 7px;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n.image-slider .arrow-right i {\n  cursor: pointer;\n}\n.image-slider .arrow-right:hover {\n  background-color: #f7bf00;\n  color: white;\n}\n.image-slider .arrow-left {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  color: black;\n  background-color: rgba(247, 191, 0, 0.6);\n  border-radius: 0 7px 7px 0;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n.image-slider .arrow-left i {\n  cursor: pointer;\n}\n.image-slider .arrow-left:hover {\n  background-color: #f7bf00;\n  color: white;\n}\n@media (max-width: 720px) {\n.image-slider {\n    width: 100%;\n    height: 100%;\n}\n.image-slider .image-close {\n    top: 5px;\n    right: 5px;\n    font-size: 1.1rem;\n}\n.image-slider .img-container img {\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.image-slider .arrow-right {\n    padding: 0.2rem;\n}\n.image-slider .arrow-left {\n    padding: 0.2rem;\n}\n}", ""]);

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
        [_c("i", { staticClass: "far fa-times-circle fa-2x" })]
      ),
      _vm._v(" "),
      !_vm.singleImage
        ? _c(
            "transition",
            { attrs: { name: "slide-image" } },
            _vm._l([_vm.step], function(nth) {
              return _c("div", { key: nth, staticClass: "img-container" }, [
                _c("img", { attrs: { src: "/images" + _vm.images[nth] } })
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.singleImage
        ? _c("div", { staticClass: "img-container" }, [
            _c("img", {
              attrs: { src: "/images/" + _vm.imgFolderName + ".jpg" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.singleImage
        ? _c(
            "div",
            { staticClass: "arrow-right", on: { click: _vm.increase } },
            [
              _c("Tooltip", { attrs: { text: _vm.nextPage } }, [
                _c("i", { staticClass: "fas fa-arrow-right fa-3x" })
              ])
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
              _c("Tooltip", { attrs: { text: _vm.prevPage } }, [
                _c("i", { staticClass: "fas fa-arrow-left fa-3x" })
              ])
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

/***/ "./resources/img/meatball sync recursive \\.jpg$":
/*!********************************************!*\
  !*** ./resources/img/meatball sync \.jpg$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cart.jpg": "./resources/img/meatball/cart.jpg",
	"./input-admin.jpg": "./resources/img/meatball/input-admin.jpg",
	"./meal.jpg": "./resources/img/meatball/meal.jpg",
	"./meatball-main-page.jpg": "./resources/img/meatball/meatball-main-page.jpg",
	"./modify.jpg": "./resources/img/meatball/modify.jpg",
	"./paypal.jpg": "./resources/img/meatball/paypal.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/img/meatball sync recursive \\.jpg$";

/***/ }),

/***/ "./resources/img/meatball/cart.jpg":
/*!*****************************************!*\
  !*** ./resources/img/meatball/cart.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cart.jpg?388dd9f85a184cb331ccac8cd2bd0b4b";

/***/ }),

/***/ "./resources/img/meatball/input-admin.jpg":
/*!************************************************!*\
  !*** ./resources/img/meatball/input-admin.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/input-admin.jpg?5a7cd6ff63ef19e53771583f6bd11362";

/***/ }),

/***/ "./resources/img/meatball/meal.jpg":
/*!*****************************************!*\
  !*** ./resources/img/meatball/meal.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/meal.jpg?bd177ad1b72ef79a3b33c2aaf2ef0b05";

/***/ }),

/***/ "./resources/img/meatball/modify.jpg":
/*!*******************************************!*\
  !*** ./resources/img/meatball/modify.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/modify.jpg?c3797d7d09d72f016634d0e3cf48ff85";

/***/ }),

/***/ "./resources/img/meatball/paypal.jpg":
/*!*******************************************!*\
  !*** ./resources/img/meatball/paypal.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/paypal.jpg?27e8f7afb6d4ab1cf94bddaed2eabe4d";

/***/ }),

/***/ "./resources/img/recipe sync recursive \\.jpg$":
/*!******************************************!*\
  !*** ./resources/img/recipe sync \.jpg$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Main-page.jpg": "./resources/img/recipe/Main-page.jpg",
	"./details.jpg": "./resources/img/recipe/details.jpg",
	"./error.jpg": "./resources/img/recipe/error.jpg",
	"./ingredient-nutrients.jpg": "./resources/img/recipe/ingredient-nutrients.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/img/recipe sync recursive \\.jpg$";

/***/ }),

/***/ "./resources/img/recipe/details.jpg":
/*!******************************************!*\
  !*** ./resources/img/recipe/details.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/details.jpg?709d6603d67ea67bc21d2f7480411ee2";

/***/ }),

/***/ "./resources/img/recipe/error.jpg":
/*!****************************************!*\
  !*** ./resources/img/recipe/error.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/error.jpg?d8bb4077f98bcf66cb14daa7b931de04";

/***/ }),

/***/ "./resources/img/recipe/ingredient-nutrients.jpg":
/*!*******************************************************!*\
  !*** ./resources/img/recipe/ingredient-nutrients.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ingredient-nutrients.jpg?6c47b1ec18e321120c39bc4aed5a07a4";

/***/ }),

/***/ "./resources/img/wargaming sync recursive \\.jpg$":
/*!*********************************************!*\
  !*** ./resources/img/wargaming sync \.jpg$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modal.jpg": "./resources/img/wargaming/modal.jpg",
	"./search.jpg": "./resources/img/wargaming/search.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/img/wargaming sync recursive \\.jpg$";

/***/ }),

/***/ "./resources/img/wargaming/search.jpg":
/*!********************************************!*\
  !*** ./resources/img/wargaming/search.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/search.jpg?40249ab111fcb05855de24279dd800dd";

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