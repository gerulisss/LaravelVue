"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Tasks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tasks: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/sanctum/csrf-cookie').then(function (response) {
      axios.get('/api/tasks').then(function (response) {
        _this.tasks = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    });
  },
  methods: {
    deleteTask: function deleteTask(id) {
      var _this2 = this;

      axios.get('/sanctum/csrf-cookie').then(function (response) {
        axios["delete"]("/api/tasks/delete/".concat(id)).then(function (response) {
          var i = _this2.tasks.map(function (item) {
            return item.id;
          }).indexOf(id); // find index of your object


          _this2.tasks.splice(i, 1);
        })["catch"](function (error) {
          console.error(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto px-4 sm:px-8"
};
var _hoisted_2 = {
  "class": "py-8"
};
var _hoisted_3 = {
  "class": "text-2xl font-semibold leading-tight"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tasks ");

var _hoisted_5 = {
  "class": "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
};
var _hoisted_6 = {
  "class": "inline-block min-w-full shadow-md rounded-lg overflow-hidden"
};
var _hoisted_7 = {
  "class": "min-w-full leading-normal"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
}, " Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
}, " ID "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
}, " Assign "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
}, " Progress "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  "class": "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
}, " Action ")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_10 = {
  "class": "flex"
};
var _hoisted_11 = {
  "class": "ml-3"
};
var _hoisted_12 = {
  "class": "text-gray-900 whitespace-no-wrap"
};
var _hoisted_13 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_14 = {
  "class": "text-gray-900 whitespace-no-wrap"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-gray-900 whitespace-no-wrap"
}, "Assign User")], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_17 = {
  "class": "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "aria-hidden": "",
  "class": "absolute inset-0 bg-green-200 opacity-50 rounded-full"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "relative"
};
var _hoisted_20 = {
  "class": "px-5 py-5 border-b border-gray-200 bg-white text-sm"
};
var _hoisted_21 = {
  "class": "space-x-2"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "button",
    "class": "rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white text-sm",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.$router.push('/tasks/add');
    })
  }, "Add Tasks")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tasks, function (task) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: task.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.name), 1
    /* TEXT */
    )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.id), 1
    /* TEXT */
    )]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.progress), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'edittask',
        params: {
          id: task.id
        }
      },
      "class": "rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_22];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      "class": "rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white",
      onClick: function onClick($event) {
        return $options.deleteTask(task.id);
      }
    }, " Delete", 8
    /* PROPS */
    , ["onClick"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])]);
}

/***/ }),

/***/ "./resources/js/Views/Tasks.vue":
/*!**************************************!*\
  !*** ./resources/js/Views/Tasks.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tasks_vue_vue_type_template_id_49d5e2df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=49d5e2df */ "./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js */ "./resources/js/Views/Tasks.vue?vue&type=script&lang=js");
/* harmony import */ var D_laragon_www_laravelvue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_laragon_www_laravelvue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tasks_vue_vue_type_template_id_49d5e2df__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/Tasks.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/Tasks.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Views/Tasks.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df":
/*!********************************************************************!*\
  !*** ./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_49d5e2df__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_49d5e2df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=template&id=49d5e2df */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/Tasks.vue?vue&type=template&id=49d5e2df");


/***/ })

}]);