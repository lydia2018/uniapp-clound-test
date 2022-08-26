"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: {
        name: "",
        age: "",
        address: ""
      }
    };
  },
  onLoad(param) {
    this.item = JSON.parse(param.item);
  },
  methods: {
    submit() {
      let item = __spreadValues({}, this.item);
      delete item._id;
      const db = common_vendor.tn.database();
      db.collection("test").doc(this.item._id).update(item).then((e) => {
        common_vendor.index.navigateTo({
          url: "../index/index",
          success: (res) => {
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.item.name = $event),
    b: common_vendor.p({
      placeholder: "name",
      modelValue: $data.item.name
    }),
    c: common_vendor.o(($event) => $data.item.age = $event),
    d: common_vendor.p({
      placeholder: "age",
      modelValue: $data.item.age
    }),
    e: common_vendor.o(($event) => $data.item.address = $event),
    f: common_vendor.p({
      placeholder: "address",
      modelValue: $data.item.address
    }),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/lydia-subject/lydia-vue3-uniapp/pages/update/update.vue"]]);
wx.createPage(MiniProgramPage);
