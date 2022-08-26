"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  methods: {
    async callcol() {
      const co1 = common_vendor.tn.importObject("col");
      let res = await co1.say();
      common_vendor.index.showModal({
        content: res.data,
        showCancel: false
      });
    },
    remove(id) {
      this.$refs.udb.remove(id);
    },
    update(it) {
      common_vendor.index.navigateTo({
        url: "../update/update?item=" + JSON.stringify(it),
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2 + _easycom_uni_link2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db + _easycom_uni_link)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : {
        c: common_vendor.f(data, (item, index, i1) => {
          return {
            a: common_vendor.o(($event) => $options.update(item)),
            b: common_vendor.o(($event) => $options.remove(item._id), _ctx._id),
            c: "3f06dcc1-2-" + i0 + "-" + i1 + "," + ("3f06dcc1-1-" + i0),
            d: common_vendor.p({
              showArrow: true,
              title: item.name,
              note: "\u4ECA\u5E74" + item.age + "\u5C81,\u6765\u81EA" + item.address
            })
          };
        }),
        d: _ctx._id,
        e: "3f06dcc1-1-" + i0 + ",3f06dcc1-0"
      }, {
        f: i0,
        g: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "3f06dcc1-0"
    }),
    b: common_vendor.sr("udb", "3f06dcc1-0"),
    c: common_vendor.p({
      collection: "test"
    }),
    d: common_vendor.o((...args) => $options.callcol && $options.callcol(...args)),
    e: common_vendor.p({
      href: $data.href,
      text: $data.href
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/lydia-subject/lydia-vue3-uniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
