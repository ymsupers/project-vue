webpackJsonp([5],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sign_in_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca84070_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_sign_in_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sign_in_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca84070_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_sign_in_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "asset\\panel\\sign-in.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sign-in.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ca84070", Component.options)
  } else {
    hotAPI.reload("data-v-2ca84070", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("0878f028", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ca84070\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sign-in.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ca84070\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sign-in.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, "\nlabel {\n  display: block;\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_types__ = __webpack_require__(34);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function () {
        var data = Object.create(null);
        data.username = '';
        data.password = '';
        return data;
    },
    methods: {
        formSubmit: function () {
            this.axios.post('user/login', this.$data, {
                'headers': {
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                console.log('响应结果:', response);
                var res = response.data;
                if (res.code == 200 && res.data) {
                    alert('登录成功');
                    this.$store.commit(__WEBPACK_IMPORTED_MODULE_0__config_types__["a" /* LOGIN */], JSON.stringify(res.data));
                    this.$router.push({ path: '/user' });
                } else {
                    alert(res.errMsg);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    },
    computed: {
        token() {
            return this.$store.state.token;
        }
    }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _h('div', {
    attrs: {
      "id": "login"
    }
  }, [_h('form', {
    attrs: {
      "action": "#",
      "method": "post",
      "accept-charset": "UTF-8"
    }
  }, [_h('label', {
    attrs: {
      "for": "username"
    }
  }, [_vm._m(0), " ", _h('input', {
    directives: [{
      name: "model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "name": "username",
      "id": "username",
      "placeholder": "用户名"
    },
    domProps: {
      "value": _vm._s(_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })]), " ", _h('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._m(1), " ", _h('input', {
    directives: [{
      name: "model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "name": "password",
      "id": "password",
      "placeholder": "密码"
    },
    domProps: {
      "value": _vm._s(_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), " ", _h('div', [_h('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.formSubmit
    }
  }, ["登录"])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _h('span', ["用户名:"])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _h('span', ["密　码:"])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ca84070", esExports)
  }
}

/***/ })

});