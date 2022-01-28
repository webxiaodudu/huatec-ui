import { defineComponent, useSlots, resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, unref, renderSlot } from "vue";
var common = "";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    type: { default: "plain" },
    shadow: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    circle: { type: Boolean },
    icon: { default: "" },
    isDisabled: { type: Boolean, default: false },
    iconEnd: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const slots = useSlots();
    console.log(slots.default, " ===slots");
    const clickHandler = (ev) => {
      emit("click", ev);
    };
    return (_ctx, _cache) => {
      const _component_huatec_icon = resolveComponent("huatec-icon");
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(`
            huatec-btn 
            ${__props.type} 
            ${__props.shadow ? "huatec-btn-shadow" : ""}
            ${__props.round ? "huatec-btn-round" : ""}
            ${__props.circle ? "huatec-btn-circle" : ""}
            ${__props.isDisabled ? "huatec-btn-disabled" : ""}
            ${__props.isLoading ? "huatec-btn-relative" : ""}
            `),
        onClick: clickHandler
      }, [
        __props.isLoading ? (openBlock(), createBlock(_component_huatec_icon, {
          key: 0,
          icon: "huatec-16-gongneng2-changguizhuangtai",
          class: "icon-load"
        })) : createCommentVNode("", true),
        __props.icon !== "" && !__props.iconEnd && !__props.isLoading ? (openBlock(), createBlock(_component_huatec_icon, {
          key: 1,
          icon: __props.icon
        }, null, 8, ["icon"])) : createCommentVNode("", true),
        unref(slots).default ? (openBlock(), createElementBlock("span", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : createCommentVNode("", true),
        __props.icon !== "" && __props.iconEnd && !__props.isLoading ? (openBlock(), createBlock(_component_huatec_icon, {
          key: 3,
          icon: __props.icon
        }, null, 8, ["icon"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var button$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-31cbe8ab"]]);
var button = {
  install(app) {
    app.component("huatec-button", button$1);
  },
  name: "HuatecButton",
  _default: button$1
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    icon: { default: "huatec-huanfu1" }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const clickHandler = (e) => {
      emit("click", e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["iconfont", __props.icon]),
        onClick: clickHandler
      }, null, 2);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3465f5ee"]]);
var icon = {
  install(app) {
    app.component("huatec-icon", Icon);
  },
  name: "HuatecIcon",
  _default: Icon
};
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "huatec-button-group" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", { style: "margin-right:-3px;" })
  ]);
}
var ButtonGroup$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var ButtonGroup = {
  install(app) {
    app.component("huatec-button-group", ButtonGroup$1);
  },
  name: "HuatecButtonGroup",
  _default: ButtonGroup$1
};
const components = [
  button,
  icon,
  ButtonGroup
];
const HuatecUi = {
  install(app) {
    components.map((item) => {
      app.use(item);
      HuatecUi[item.name] = item._default;
    });
  }
};
if (typeof window !== "undefined") {
  window.HuatecUi = HuatecUi;
}
export { HuatecUi as default };
