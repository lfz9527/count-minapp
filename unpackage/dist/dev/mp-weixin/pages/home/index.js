"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  (Avatar + DataPanel + BaseCard + BaseChart)();
}
const BaseCard = () => "../../components/baseCard/index.js";
const Avatar = () => "./avatar/index.js";
const DataPanel = () => "./data-panel/index.js";
const BaseChart = () => "../../components/baseChart/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          dataNum: "99",
          dataPercent: "0.5"
        }),
        b: common_vendor.p({
          startType: "right",
          dataLabel: "输",
          dataNum: "1",
          dataPercent: "0.2"
        }),
        c: common_assets._imports_0,
        d: common_assets._imports_1,
        e: common_assets._imports_2,
        f: common_vendor.p({
          padding: false
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
