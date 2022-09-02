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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export var ChartJSDoughnutChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Doughnut, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }, void 0));
};
ChartJSDoughnutChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default ChartJSDoughnutChart;
//# sourceMappingURL=doughnut-chart.js.map