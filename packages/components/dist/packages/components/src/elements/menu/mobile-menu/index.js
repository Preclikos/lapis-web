import{__assign as o}from"../../../../../../node_modules/tslib/tslib.es6.js";import{jsxs as n,jsx as e}from"react/jsx-runtime";import i from"../../../ui/offcanvas/index.js";import r from"../../logo/index.js";import t from"../../../ui/close-button/index.js";import m from"./nav-item.js";import s from"./nav-link.js";import u from"./expand-button.js";import a from"./sub-menu.js";import l from"./mega-menu.js";import{getSiblings as d}from"@ht/shared/methods";import f from"../../../ui/offcanvas/header.js";import c from"../../../ui/offcanvas/body.js";var v=function(v){var p=v.isOpen,h=v.onClick,j=v.menu,b=function(o,n){if(n){var e=o.currentTarget;if("A"===e.nodeName){if(e.hash)return;o.preventDefault(),e=e.parentElement}var i=e.querySelector(".submenu"),r=d(e);null==i||i.classList.toggle("open"),r.forEach((function(o){o.childNodes.forEach((function(o){var n,e=o;null===(n=null==e?void 0:e.classList)||void 0===n||n.remove("open")}))}))}};return n(i,o({isOpen:p,onClose:h,className:"lg:hidden"},{children:[n(f,{children:[e(r,{},void 0),e(t,{onClick:h},void 0)]},void 0),e(c,{children:e("ul",o({className:"mobile-menu navbar"},{children:j.map((function(i){var r=i.submenu,t=i.megamenu,d=!!r||!!t;return n(m,o({onClick:function(o){return b(o,!0)}},{children:[e(s,o({path:i.url},{children:i.label}),void 0),d&&e(u,{onClick:function(o){return b(o,!0)}},void 0),r&&e(a,{menu:r},void 0),t&&e(l,{menu:t},void 0)]}),i.id)}))}),void 0)},void 0)]}),void 0)};export{v as default};
//# sourceMappingURL=index.js.map
