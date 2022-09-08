import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Portal } from "react-portal";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

// eslint-disable-next-line no-use-before-define
let __assign = (this && __assign) || function () {
    __assign = Object.assign || function(t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (let p in s)
            {
                if (Object.prototype.hasOwnProperty.call(s, p))
                {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

const Modal = function (_a) {
    let className = _a.className, show = _a.show, size = _a.size, centered = _a.centered, children = _a.children, onClose = _a.onClose;
    let nodeRef = useRef(null);
    return (_jsx(Portal, { children: _jsxs(_Fragment, { children: [_jsx("div", { className: clsx("backdrop fixed top-0 left-0 w-screen h-screen bg-black transition-opacity z-10", !show && "opacity-0 invisible", show && "opacity-50 visible") }, void 0), _jsx("div", __assign({ className: clsx(className, "fixed inset-0 overflow-hidden outline-0 transition-opacity z-20", !show && "opacity-0 invisible", show && "opacity-100 visible"), role: "button", tabIndex: 0, onClick: onClose, onKeyPress: function (e) { return e; } }, { children: _jsx(CSSTransition, __assign({ in: show, timeout: 400, unmountOnExit: true, classNames: "modal", nodeRef: nodeRef }, { children: function () { return (_jsx("div", __assign({ ref: nodeRef, className: clsx("modal-dialog relative w-auto m-2 pointer-events-none sm:my-5 sm:mx-auto", size === "sm" && "sm:max-w-[300px]", size === "md" && "sm:max-w-[500px]", size === "lg" &&
                                "sm:max-w-[500px] lg:max-w-[800px]", size === "xl" &&
                                "sm:max-w-[500px] lg:max-w-[800px]", centered &&
                                "flex items-center min-h-[calc(100vh_-_1rem)] sm:min-h-[calc(100vh_-_3.5rem)]") }, { children: _jsx("div", __assign({ className: "modal-content relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded", onClick: function (e) { return e.stopPropagation(); }, onKeyPress: function (e) { return e.stopPropagation(); }, role: "button", tabIndex: 0 }, { children: children }), void 0) }), void 0)); } }), void 0) }), void 0)] }, void 0) }, void 0));
};

Modal.defaultProps = {
    size: "md",
    centered: true,
};
export default Modal;
//# sourceMappingURL=modal.js.map