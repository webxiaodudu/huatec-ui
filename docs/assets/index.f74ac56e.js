import{_ as j}from"./logo.91c456ac.js";import{e as f,s as x,t as V,v as g,w as z,r as a,o as t,c as i,a as e,x as s,n as L,h as p,F as y,y as R,f as _,z as q,q as c,A,B as M,g as C,C as O,D as P,E as W,p as G,m as H}from"./vendor.6c9a53e7.js";import{_ as k}from"./index.1fe6ec8e.js";const J={class:"layout"},K={class:"head-box"},Q=f({setup(n){const r=x(),d=V(),o=g(!1),u=g([{url:"/icon",label:"ICON\u7D44\u4EF6",icon:P},{url:"/button",label:"Button\u7D44\u4EF6",icon:W}]),b=z(()=>u.value.findIndex(l=>l.url==d.path)+""),m=()=>{o.value=!o.value},I=(l,w)=>{console.log(l," ==index"),r.push({path:u.value[l].url})};return(l,w)=>{const B=a("el-menu-item"),D=a("el-menu"),S=a("el-aside"),$=a("el-header"),E=a("router-view"),F=a("el-main"),v=a("el-container");return t(),i("div",J,[e(v,null,{default:s(()=>[e(S,{class:L(`${o.value?"":"asideWid"}`),width:"auto"},{default:s(()=>[e(D,{class:"el-menu-vertical-demo","default-active":p(b),collapse:o.value,onSelect:I},{default:s(()=>[(t(!0),i(y,null,R(u.value,(h,N)=>(t(),_(B,{index:N+""},{default:s(()=>[(t(),_(q(h.icon),{class:"icon-menu"})),c("span",null,A(h.label),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active","collapse"])]),_:1},8,["class"]),e(v,null,{default:s(()=>[e($,null,{default:s(()=>[c("div",K,[o.value?(t(),_(p(M),{key:0,class:"head-icon",onClick:m})):C("",!0),o.value?C("",!0):(t(),_(p(O),{key:1,class:"head-icon",onClick:m}))])]),_:1}),e(F,null,{default:s(()=>[e(E)]),_:1})]),_:1})]),_:1})])}}});var T=k(Q,[["__scopeId","data-v-d21b4f70"]]);const U=n=>(G("data-v-2ee3b924"),n=n(),H(),n),X=U(()=>c("img",{src:j,height:"50"},null,-1)),Y=[X],Z=f({setup(n){const r=x(),d=()=>{r.push({path:"/"})};return(o,u)=>(t(),i(y,null,[c("div",{class:"header"},[c("h1",{class:"logo",onClick:d},Y)]),e(T)],64))}});var te=k(Z,[["__scopeId","data-v-2ee3b924"]]);export{te as default};