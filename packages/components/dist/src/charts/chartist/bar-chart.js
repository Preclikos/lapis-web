import { jsx as _jsx } from "react/jsx-runtime";
import ChartistGraph from "react-chartist";
var BarChart = function (_a) {
    var bar = _a.bar, grid = _a.grid, label = _a.label, data = _a.data, options = _a.options, responsiveOptions = _a.responsiveOptions;
    var onDrawHandler = function (e) {
        var _a;
        var type = e.type, seriesIndex = e.seriesIndex, elem = e.element._node;
        var breakpoints = {
            xs: window.matchMedia("(min-width: 320px)"),
            sm: window.matchMedia("(min-width: 576px)"),
            md: window.matchMedia("(min-width: 768px)"),
            lg: window.matchMedia("(min-width: 992px)"),
            xl: window.matchMedia("(min-width: 1200px)"),
        };
        if (type === "bar") {
            var barColor_1 = ((_a = bar === null || bar === void 0 ? void 0 : bar.colors) === null || _a === void 0 ? void 0 : _a[seriesIndex]) || "#1b84e7";
            var barWidth_1 = (bar === null || bar === void 0 ? void 0 : bar.width) || "10px";
            if (typeof barWidth_1 === "string") {
                elem.setAttribute("style", "stroke-width: ".concat(barWidth_1, "; stroke: ").concat(barColor_1));
            }
            if (Array.isArray(barWidth_1)) {
                elem.setAttribute("style", "stroke-width: ".concat(barWidth_1[0], "; stroke: ").concat(barColor_1));
                Object.keys(breakpoints).forEach(function (brkPoint, i) {
                    if (i !== 0) {
                        if (breakpoints[brkPoint]
                            .matches &&
                            !!barWidth_1[i]) {
                            elem.setAttribute("style", "stroke-width: ".concat(barWidth_1[i], "; stroke: ").concat(barColor_1));
                        }
                    }
                });
            }
        }
        if (type === "grid") {
            if ((grid === null || grid === void 0 ? void 0 : grid.show) === false) {
                elem.setAttribute("style", "display: none;");
            }
        }
        if (type === "label") {
            if ((label === null || label === void 0 ? void 0 : label.show) === false) {
                elem.setAttribute("style", "display: none;");
            }
        }
    };
    return (_jsx(ChartistGraph, { listener: {
            draw: function (e) { return onDrawHandler(e); },
        }, data: data, options: options, responsiveOptions: responsiveOptions, type: "Bar" }, void 0));
};
export default BarChart;
//# sourceMappingURL=bar-chart.js.map