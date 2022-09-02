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
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export var ChartJSBarChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Bar, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }, void 0));
};
ChartJSBarChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default ChartJSBarChart;
//# sourceMappingURL=bar-chart.js.map