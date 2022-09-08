import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";

// eslint-disable-next-line no-use-before-define
let __assign = (this && __assign) || function () {
    __assign = Object.assign || function(t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (let p in s) 
            {
                if(Object.prototype.hasOwnProperty.call(s, p))
                {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

const MediaBody = function (_a) {
    let className = _a.className, children = _a.children;
    return (_jsx("div", __assign({ className: clsx("media-body flex-1", className) }, { children: children }), void 0));
};
export default MediaBody;
//# sourceMappingURL=media-body.js.map