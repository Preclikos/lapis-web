import { jsx as _jsx } from "react/jsx-runtime";
import ReactCalendar from "react-calendar";
var Calendar = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    var formatShortWeekday = function (_locale, date) {
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()].substring(0, 2);
        return dayName;
    };
    return (_jsx(ReactCalendar, { value: value, onChange: onChange, calendarType: "US", prevLabel: _jsx("i", { className: "ion ion-chevron-left" }, void 0), nextLabel: _jsx("i", { className: "ion ion-chevron-right" }, void 0), next2Label: null, prev2Label: null, formatShortWeekday: formatShortWeekday, showNeighboringMonth: false }, void 0));
};
export default Calendar;
//# sourceMappingURL=index.js.map