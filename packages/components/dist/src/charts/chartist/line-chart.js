import { jsx as _jsx } from "react/jsx-runtime";
import ChartistGraph from "react-chartist";
var ChartistLineChart = function (_a) {
    var line = _a.line, point = _a.point, area = _a.area, grid = _a.grid, label = _a.label, data = _a.data, options = _a.options;
    var onDrawHandler = function (e) {
        var _a, _b, _c;
        var type = e.type, seriesIndex = e.seriesIndex, elem = e.element._node;
        var lineColor = (_a = line === null || line === void 0 ? void 0 : line.colors) === null || _a === void 0 ? void 0 : _a[seriesIndex];
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
        if (type === "line") {
            elem.setAttribute("style", "stroke-width: ".concat((line === null || line === void 0 ? void 0 : line.width) || "1px", "; stroke: ").concat(lineColor || "#1b84e7"));
        }
        if (type === "area") {
            var areaColor = (_b = area === null || area === void 0 ? void 0 : area.colors) === null || _b === void 0 ? void 0 : _b[seriesIndex];
            var areayOpacity = Array.isArray(area === null || area === void 0 ? void 0 : area.opacity)
                ? area === null || area === void 0 ? void 0 : area.opacity[seriesIndex]
                : area === null || area === void 0 ? void 0 : area.opacity;
            elem.setAttribute("style", "fill: ".concat(areaColor || lineColor || "#1b84e7", "; fill-opacity: ").concat(areayOpacity || "0.1"));
        }
        if (type === "point") {
            var pointColor = (_c = point === null || point === void 0 ? void 0 : point.colors) === null || _c === void 0 ? void 0 : _c[seriesIndex];
            elem.setAttribute("style", "stroke-width: ".concat((point === null || point === void 0 ? void 0 : point.size) || "8px", "; stroke: ").concat(pointColor || lineColor || "#1b84e7"));
        }
    };
    return (_jsx(ChartistGraph, { listener: {
            draw: function (e) { return onDrawHandler(e); },
        }, data: data, options: options, type: "Line" }, void 0));
};
export default ChartistLineChart;
//# sourceMappingURL=line-chart.js.map