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
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
export var ChartJSLineChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Line, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }, void 0));
};
ChartJSLineChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default ChartJSLineChart;
//# sourceMappingURL=line-chart.js.map