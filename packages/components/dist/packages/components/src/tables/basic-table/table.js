import{__assign as r}from"../../../../../node_modules/tslib/tslib.es6.js";import{jsx as e}from"react/jsx-runtime";import{Children as n,isValidElement as i,cloneElement as o}from"react";import t from"clsx";var a=function(a){var d=a.children,s=a.className,p=a.striped,g=a.bordered,l=a.hover,b=a.theadColor,c=a.color,h=g&&"border border-geyser border-t-0 border-l-0 first:border-l",m=!g&&"border-t border-t-geyser",u=[(b||c)&&"text-white border-white/50",("primary"===b||"primary"===c)&&"bg-primary",("secondary"===b||"secondary"===c)&&"bg-secondary",("success"===b||"success"===c)&&"bg-success",("warning"===b||"warning"===c)&&"bg-warning",("danger"===b||"danger"===c)&&"bg-danger",("info"===b||"info"===c)&&"bg-info",("teal"===b||"teal"===c)&&"bg-teal",("indigo"===b||"indigo"===c)&&"bg-indigo",("purple"===b||"purple"===c)&&"bg-purple",("pink"===b||"pink"===c)&&"bg-pink",("orange"===b||"orange"===c)&&"bg-orange"],y=[c&&"border-white","primary"===c&&"bg-primary-50","secondary"===c&&"bg-secondary-50","success"===c&&"bg-success-50","warning"===c&&"bg-warning-50","danger"===c&&"bg-danger-50","info"===c&&"bg-info-50","teal"===c&&"bg-teal-50","indigo"===c&&"bg-indigo-50","purple"===c&&"bg-purple-50","pink"===c&&"bg-pink-50","orange"===c&&"bg-orange-50"],f=function(e,a){return n.map(e,(function(e){if(!i(e))return e;var n=r({},e.props),d=e.props.originalType||e.type,s=d.displayName;return"thead"===a?o(e,r(r({},n),{className:t(("th"===d||"td"===d||"th"===s||"td"===s)&&["uppercase bg-geyser text-heading tracking-wide text-xs font-bold p-3",u,h],e.props.className),children:f(e.props.children,a)})):"tbody"===a?o(e,r(r({},n),{className:t(("th"===d||"td"===d||"th"===s||"td"===s)&&["p-3 text-gray-650 text-left",h,m,y],("th"===d||"th"===s)&&"!text-heading font-medium",("tr"===d||"tr"===s)&&[p&&"odd:bg-gray-200",l&&"hover:bg-black/[0.075]"],e.props.className),children:f(e.props.children,a)})):void 0}))},v=n.map(d,(function(e){if(!i(e))return e;var n=r({},e.props),t=e.props.originalType||e.type;return o(e,r(r({},n),"thead"===t||"tbody"===t?{children:f(e.props.children,t)}:{children:e.props.children}))}));return e("div",r({className:"table-responsive"},{children:e("table",r({className:t("table w-full",s)},{children:v}),void 0)}),void 0)};export{a as default};
//# sourceMappingURL=table.js.map
