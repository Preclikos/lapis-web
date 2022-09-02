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
import ChartistGraph from "react-chartist";
var PieChart = function (_a) {
    var label = _a.label, slice = _a.slice, data = _a.data, options = _a.options, percentageLabel = _a.percentageLabel;
    var onDrawHandler = function (e) {
        var _a;
        var type = e.type, index = e.index, elem = e.element._node;
        if (type === "label") {
            elem.setAttribute("style", "font-size: ".concat((label === null || label === void 0 ? void 0 : label.width) || "16px", "; fill: ").concat((label === null || label === void 0 ? void 0 : label.color) || "rgba(255, 255, 255, 0.75)"));
        }
        if (type === "slice") {
            var sliceColor = (_a = slice === null || slice === void 0 ? void 0 : slice.colors) === null || _a === void 0 ? void 0 : _a[index];
            elem.setAttribute("style", "fill: ".concat(sliceColor || "#1b84e7", "; stroke: ").concat((slice === null || slice === void 0 ? void 0 : slice.stroke) || "#fff"));
        }
    };
    data.series.reduce(function (a, b) { return a + b; });
    var pieOptions = __assign(__assign({}, options), { labelInterpolationFnc: function (value) {
            var _a, _b;
            if (((_a = data === null || data === void 0 ? void 0 : data.labels) === null || _a === void 0 ? void 0 : _a.length) && ((_b = data === null || data === void 0 ? void 0 : data.labels) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                return value;
            }
            else if (percentageLabel) {
                var valueTotal = data.series.reduce(function (a, b) { return a + b; });
                return "".concat(Math.round((value / valueTotal) * 100), "%");
            }
            else {
                return value;
            }
        } });
    return (_jsx(ChartistGraph, { listener: {
            draw: function (e) { return onDrawHandler(e); },
        }, data: data, options: pieOptions, type: "Pie" }, void 0));
};
export default PieChart;
//# sourceMappingURL=pie-chart.js.map