(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    imgFolderName: String
  },
  mounted: function mounted() {
    switch (this.imgFolderName) {
      case 'wargaming':
        this.getWGImagesFromFolderByName();
        break;

      case 'meatball':
        this.getMeatBallImagesFromFolderByName();
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
    getWGImagesFromFolderByName: function getWGImagesFromFolderByName() {
      this.fillImages(__webpack_require__("./resources/img/wargaming sync recursive \\.jpg$"));
    },
    getMeatBallImagesFromFolderByName: function getMeatBallImagesFromFolderByName() {
      this.fillImages(__webpack_require__("./resources/img/meatball sync recursive \\.jpg$"));
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
      _c(
        "transition",
        { attrs: { name: "slide-image" } },
        _vm._l([_vm.step], function(nth) {
          return _c("div", { key: nth, staticClass: "img-container" }, [
            _c("img", { attrs: { src: "/images" + _vm.images[nth] } })
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "arrow-right", on: { click: _vm.increase } },
        [
          _c("Tooltip", { attrs: { text: _vm.nextPage } }, [
            _c("i", { staticClass: "fas fa-arrow-right fa-3x" })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "arrow-left", on: { click: _vm.decrease } },
        [
          _c("Tooltip", { attrs: { text: _vm.prevPage } }, [
            _c("i", { staticClass: "fas fa-arrow-left fa-3x" })
          ])
        ],
        1
      )
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
	"./meal.jpg": "./resources/img/meatball/meal.jpg",
	"./meatball-main-page.jpg": "./resources/img/meatball/meatball-main-page.jpg",
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

/***/ "./resources/img/meatball/meal.jpg":
/*!*****************************************!*\
  !*** ./resources/img/meatball/meal.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/meal.jpg?bd177ad1b72ef79a3b33c2aaf2ef0b05";

/***/ }),

/***/ "./resources/img/meatball/paypal.jpg":
/*!*******************************************!*\
  !*** ./resources/img/meatball/paypal.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/paypal.jpg?27e8f7afb6d4ab1cf94bddaed2eabe4d";

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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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