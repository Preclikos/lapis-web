var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import Anchor from "../../../ui/anchor";
var SubLink = function (_a) {
    var label = _a.label, path = _a.path, isMegaMenu = _a.isMegaMenu;
    return (_jsx(Anchor, __assign({ path: path, className: clsx("block text-heading text-sm font-normal py-[0.375rem] hover:bg-gray-150 hover:text-primary", !isMegaMenu && "px-[0.625rem] mx-[0.625rem]", isMegaMenu && "px-[0.563rem] m-0") }, { children: label }), void 0));
};
export default SubLink;
//# sourceMappingURL=sub-link.js.map