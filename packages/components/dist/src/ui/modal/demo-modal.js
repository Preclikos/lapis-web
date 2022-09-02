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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "./modal";
import ModalHeader from "./modal-header";
import ModalTitle from "./modal-title";
import ModalClose from "./modal-close";
import ModalBody from "./modal-body";
import ModalFooter from "./modal-footer";
import Button from "../button/button";
var DemoModal = function (_a) {
    var size = _a.size, centered = _a.centered;
    var _b = __read(useState(false), 2), show = _b[0], setShow = _b[1];
    var clickHandler = function () {
        setShow(function (prev) { return !prev; });
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Modal, __assign({ show: show, onClose: clickHandler, size: size, centered: centered }, { children: [_jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: "Modal Title" }, void 0), _jsx(ModalClose, __assign({ onClose: clickHandler }, { children: "x" }), void 0)] }, void 0), _jsx(ModalBody, { children: _jsx("p", { children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." }, void 0) }, void 0), _jsxs(ModalFooter, { children: [_jsx(Button, __assign({ color: "secondary", onClick: clickHandler }, { children: "Close" }), void 0), _jsx(Button, __assign({ color: "primary", className: "ml-3" }, { children: "Save changes" }), void 0)] }, void 0)] }), void 0), _jsx(Button, __assign({ onClick: clickHandler }, { children: "Open Modal" }), void 0)] }, void 0));
};
export default DemoModal;
//# sourceMappingURL=demo-modal.js.map