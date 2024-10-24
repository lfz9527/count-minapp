"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      screenWidth: 0
      // 屏幕宽度
    };
  },
  props: {
    progress: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    backgroundColor: {
      type: String,
      default: "#EFEFF4"
    },
    progressBackgroundColor: {
      type: String,
      default: "#07C160"
    },
    showText: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: "#000000"
    },
    textSize: {
      type: Number,
      default: 28
    },
    height: {
      type: Number,
      default: 20
    },
    isCircular: {
      type: Boolean,
      default: false
    },
    diameter: {
      type: Number,
      default: 100
    },
    canvasId: {
      type: String,
      default: "canvasId"
    }
  },
  mounted() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.screenWidth = res.screenWidth;
        if (this.isCircular) {
          this.drawCircularProgress();
        }
      }
    });
  },
  watch: {
    progress: function(val) {
      console.log(val);
      if (this.isCircular) {
        this.drawCircularProgress();
      }
    }
  },
  methods: {
    drawCircularProgress() {
      const canvas = common_vendor.index.createCanvasContext(this.canvasId, this);
      const radius = (this.rpxToPx(this.diameter) - this.rpxToPx(this.height)) / 2;
      const startAngle = -Math.PI / 2;
      const endAngle = 2 * Math.PI * this.progress / 100 + startAngle;
      canvas.setLineWidth(this.rpxToPx(this.height));
      canvas.setStrokeStyle(this.backgroundColor);
      canvas.beginPath();
      canvas.arc(this.rpxToPx(this.diameter) / 2, this.rpxToPx(this.diameter) / 2, radius, 0, 2 * Math.PI);
      canvas.stroke();
      canvas.setLineWidth(this.rpxToPx(this.height));
      canvas.setStrokeStyle(this.progressBackgroundColor);
      canvas.beginPath();
      canvas.arc(
        this.rpxToPx(this.diameter) / 2,
        this.rpxToPx(this.diameter) / 2,
        radius,
        startAngle,
        endAngle,
        false
      );
      canvas.stroke();
      canvas.draw();
    },
    rpxToPx(rpx) {
      const px = rpx / 750 * this.screenWidth;
      return px;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.isCircular
  }, !$props.isCircular ? {
    b: $props.backgroundColor,
    c: $props.height + "rpx"
  } : {}, {
    d: !$props.isCircular
  }, !$props.isCircular ? common_vendor.e({
    e: $props.showText
  }, $props.showText ? {
    f: common_vendor.t($props.progress + "%"),
    g: $props.textColor,
    h: $props.textSize + "rpx"
  } : {}, {
    i: $props.progress + "%",
    j: $props.progressBackgroundColor,
    k: $props.height + "rpx"
  }) : {}, {
    l: $props.isCircular
  }, $props.isCircular ? common_vendor.e({
    m: $props.canvasId,
    n: $props.diameter + "rpx",
    o: $props.diameter + "rpx",
    p: $props.showText
  }, $props.showText ? {
    q: common_vendor.t($props.progress + "%"),
    r: $props.textColor,
    s: $props.textSize + "rpx"
  } : {}, {
    t: $props.diameter + "rpx",
    v: $props.diameter + "rpx"
  }) : {}, {
    w: common_vendor.s("min-height:" + $props.height + "rpx")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1dec2857"]]);
wx.createComponent(Component);
