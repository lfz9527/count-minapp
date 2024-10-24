"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  piaoyiProgressBar();
}
const piaoyiProgressBar = () => "../../uni_modules/piaoyi-progress-bar/components/piaoyi-progress-bar/piaoyi-progress-bar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          canvasId: "progressCanvas4",
          progress: 75,
          backgroundColor: "#EFF3FE",
          progressBackgroundColor: "#D3474A",
          showText: true,
          textColor: "#000000",
          textSize: 40,
          height: 40,
          isCircular: true,
          diameter: 200
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a2a09e7d"]]);
wx.createComponent(Component);
