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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { VectorMap as VectorMapComponent } from "@south-paw/react-vector-maps";
import clsx from "clsx";
var VectorMap = function (_a) {
    var backgroundColor = _a.backgroundColor, borderColor = _a.borderColor, color = _a.color, checkedLayers = _a.checkedLayers, currentLayers = _a.currentLayers, selectedColor = _a.selectedColor, currentColor = _a.currentColor, tooltip = _a.tooltip, data = _a.data, className = _a.className;
    var _b = __read(useState([]), 2), selected = _b[0], setSelected = _b[1];
    var _c = __read(useState(), 2), tooltipeName = _c[0], setTooltipeName = _c[1];
    var _d = __read(useState(false), 2), isTooltipVisible = _d[0], setIsTooltipVisible = _d[1];
    var _e = __read(useState(0), 2), tooltipY = _e[0], setTooltipY = _e[1];
    var _f = __read(useState(0), 2), tooltipX = _f[0], setTooltipX = _f[1];
    var onClick = function (e) {
        var _a;
        var target = e.target;
        var id = (_a = target.attributes) === null || _a === void 0 ? void 0 : _a.id.value;
        if (selected.includes(id)) {
            setSelected(selected.filter(function (sid) { return sid !== id; }));
        }
        else {
            setSelected(__spreadArray(__spreadArray([], __read(selected), false), [id], false));
        }
    };
    var onMouseOver = function (e) {
        var _a;
        var target = e.target;
        var name = (_a = target.attributes) === null || _a === void 0 ? void 0 : _a.name.value;
        setTooltipeName(name);
        setIsTooltipVisible(true);
    };
    var onMouseMove = function (e) {
        setTooltipY(e.clientY - 20);
        setTooltipX(e.clientX - 10);
    };
    var onMouseOut = function () {
        setTooltipeName("");
        setIsTooltipVisible(false);
    };
    useEffect(function () {
        if (!checkedLayers)
            return;
        setSelected(__spreadArray([], __read(checkedLayers), false));
    }, [checkedLayers]);
    var date = new Date().getTime();
    var css = "\n        ".concat("#vector-".concat(date), ".vector-map {\n            background-color: ").concat(backgroundColor || "transparent", ";\n        }\n        ").concat("#vector-".concat(date), " svg{\n            stroke: ").concat(borderColor || "#fff", ";\n        }\n        ").concat("#vector-".concat(date), " svg path {\n            fill: ").concat(color || "rgb(131, 146, 165)", ";\n        }\n        ").concat("#vector-".concat(date), " svg path[aria-checked=\"true\"] {\n            fill: ").concat(selectedColor || "rgba(56, 43, 168, 1)", ";\n        }\n        ").concat("#vector-".concat(date), " svg path[aria-current=\"true\"] {\n            fill: ").concat(currentColor || "#006491", ";\n        }\n    ");
    return (_jsxs("div", __assign({ className: clsx("vector-map", className), id: "vector-".concat(date) }, { children: [_jsx("style", { children: css }, void 0), _jsx(VectorMapComponent, __assign({}, data, { checkedLayers: selected, currentLayers: currentLayers, layerProps: { onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, onMouseMove: onMouseMove } }), void 0), tooltip && isTooltipVisible && (_jsx("div", __assign({ className: "tooltip", style: { top: tooltipY, left: tooltipX } }, { children: tooltipeName }), void 0))] }), void 0));
};
VectorMap.defaultProps = {
    tooltip: false,
};
export default VectorMap;
//# sourceMappingURL=vector-map.js.map