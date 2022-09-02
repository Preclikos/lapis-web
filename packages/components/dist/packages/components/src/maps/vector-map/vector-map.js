import{__read as t,__spreadArray as o,__assign as c}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsxs as r,jsx as e}from"react/jsx-runtime";import{useState as n,useEffect as a}from"react";import{VectorMap as i}from"@south-paw/react-vector-maps";import l from"clsx";var s=function(s){var u=s.backgroundColor,v=s.borderColor,d=s.color,f=s.checkedLayers,p=s.currentLayers,m=s.selectedColor,g=s.currentColor,h=s.tooltip,b=s.data,k=s.className,y=t(n([]),2),C=y[0],M=y[1],L=t(n(),2),x=L[0],N=L[1],j=t(n(!1),2),w=j[0],O=j[1],P=t(n(0),2),D=P[0],T=P[1],V=t(n(0),2),X=V[0],Y=V[1];a((function(){f&&M(o([],t(f),!1))}),[f]);var _=(new Date).getTime(),q="\n        ".concat("#vector-".concat(_),".vector-map {\n            background-color: ").concat(u||"transparent",";\n        }\n        ").concat("#vector-".concat(_)," svg{\n            stroke: ").concat(v||"#fff",";\n        }\n        ").concat("#vector-".concat(_)," svg path {\n            fill: ").concat(d||"rgb(131, 146, 165)",";\n        }\n        ").concat("#vector-".concat(_),' svg path[aria-checked="true"] {\n            fill: ').concat(m||"rgba(56, 43, 168, 1)",";\n        }\n        ").concat("#vector-".concat(_),' svg path[aria-current="true"] {\n            fill: ').concat(g||"#006491",";\n        }\n    ");return r("div",c({className:l("vector-map",k),id:"vector-".concat(_)},{children:[e("style",{children:q},void 0),e(i,c({},b,{checkedLayers:C,currentLayers:p,layerProps:{onClick:function(c){var r,e=null===(r=c.target.attributes)||void 0===r?void 0:r.id.value;C.includes(e)?M(C.filter((function(t){return t!==e}))):M(o(o([],t(C),!1),[e],!1))},onMouseOver:function(t){var o,c=null===(o=t.target.attributes)||void 0===o?void 0:o.name.value;N(c),O(!0)},onMouseOut:function(){N(""),O(!1)},onMouseMove:function(t){T(t.clientY-20),Y(t.clientX-10)}}}),void 0),h&&w&&e("div",c({className:"tooltip",style:{top:D,left:X}},{children:x}),void 0)]}),void 0)};s.defaultProps={tooltip:!1};export{s as default};
//# sourceMappingURL=vector-map.js.map
