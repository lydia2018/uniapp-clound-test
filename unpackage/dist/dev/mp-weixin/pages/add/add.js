"use strict";
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
  methods: {
    add() {
      const db = common_vendor.tn.database();
      db.collection("test").add(this.item).then((e) => {
        console.log(e);
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
    g: common_vendor.o((...args) => $options.add && $options.add(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/lydia-subject/lydia-vue3-uniapp/pages/add/add.vue"]]);
wx.createPage(MiniProgramPage);
