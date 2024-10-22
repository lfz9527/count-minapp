"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    startType: { default: "left" },
    dataLabel: { default: "赢" },
    dataNum: { default: 0 },
    dataPercent: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const isRight = props.startType === "right";
    const flexDir = isRight ? "row-reverse" : "unset";
    const processBarClass = isRight ? "right-st" : "left-st";
    const processWidth = Number(props.dataPercent) * 130 + "px";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.dataLabel),
        b: common_vendor.t(props.dataNum),
        c: common_vendor.unref(flexDir),
        d: isRight ? "#EFF3FE" : "#FFECF1",
        e: processWidth,
        f: common_vendor.n(common_vendor.unref(processBarClass))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1bb4fa7d"]]);
wx.createComponent(Component);
