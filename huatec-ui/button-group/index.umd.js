(function(e,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l(require("vue")):typeof define=="function"&&define.amd?define(["vue"],l):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=l(e.Vue))})(this,function(e){"use strict";var l="",b="",i=(n,t)=>{const o=n.__vccOpts||n;for(const[c,a]of t)o[c]=a;return o};const m={key:2};var u=i(e.defineComponent({props:{type:{default:"plain"},shadow:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean},icon:{default:""},isDisabled:{type:Boolean,default:!1},iconEnd:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:t}){const o=e.useSlots();console.log(o.default," ===slots");const c=a=>{t("click",a)};return(a,E)=>{const d=e.resolveComponent("huatec-icon");return e.openBlock(),e.createElementBlock("a",{class:e.normalizeClass(`
            huatec-btn 
            ${n.type} 
            ${n.shadow?"huatec-btn-shadow":""}
            ${n.round?"huatec-btn-round":""}
            ${n.circle?"huatec-btn-circle":""}
            ${n.isDisabled?"huatec-btn-disabled":""}
            ${n.isLoading?"huatec-btn-relative":""}
            `),onClick:c},[n.isLoading?(e.openBlock(),e.createBlock(d,{key:0,icon:"huatec-16-gongneng2-changguizhuangtai",class:"icon-load"})):e.createCommentVNode("",!0),n.icon!==""&&!n.iconEnd&&!n.isLoading?(e.openBlock(),e.createBlock(d,{key:1,icon:n.icon},null,8,["icon"])):e.createCommentVNode("",!0),e.unref(o).default?(e.openBlock(),e.createElementBlock("span",m,[e.renderSlot(a.$slots,"default",{},void 0,!0)])):e.createCommentVNode("",!0),n.icon!==""&&n.iconEnd&&!n.isLoading?(e.openBlock(),e.createBlock(d,{key:3,icon:n.icon},null,8,["icon"])):e.createCommentVNode("",!0)],2)}}}),[["__scopeId","data-v-31cbe8ab"]]),_={install(n){n.component("huatec-button",u)},name:"HuatecButton",_default:u},x="",r=i(e.defineComponent({props:{icon:{default:"huatec-huanfu1"}},emits:["click"],setup(n,{emit:t}){const o=c=>{t("click",c)};return(c,a)=>(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(["iconfont",n.icon]),onClick:o},null,2))}}),[["__scopeId","data-v-3465f5ee"]]),h={install(n){n.component("huatec-icon",r)},name:"HuatecIcon",_default:r},w="";const k={},p={class:"huatec-button-group"};function B(n,t){return e.openBlock(),e.createElementBlock("div",p,[e.renderSlot(n.$slots,"default",{style:"margin-right:-3px;"})])}var f=i(k,[["render",B]]),y={install(n){n.component("huatec-button-group",f)},name:"HuatecButtonGroup",_default:f};const g=[_,h,y],s={install(n){g.map(t=>{n.use(t),s[t.name]=t._default})}};return typeof window!="undefined"&&(window.HuatecUi=s),s});