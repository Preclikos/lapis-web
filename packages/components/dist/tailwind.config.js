"use strict";
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
/* eslint-disable import/no-extraneous-dependencies */
var _a = require("@ht/shared/theme"), colors = _a.colors, screens = _a.screens, fontFamily = _a.fontFamily, fontSize = _a.fontSize, lineHeight = _a.lineHeight, boxShadow = _a.boxShadow, letterSpacing = _a.letterSpacing, spacing = _a.spacing, backgroundImage = _a.backgroundImage, keyframes = _a.keyframes, animation = _a.animation, animationDelay = _a.animationDelay;
module.exports = {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            screens: __assign({}, screens),
            colors: __assign({}, colors),
            fontFamily: __assign({}, fontFamily),
            fontSize: __assign({}, fontSize),
            lineHeight: __assign({}, lineHeight),
            boxShadow: __assign({}, boxShadow),
            letterSpacing: __assign({}, letterSpacing),
            spacing: __assign({}, spacing),
            backgroundImage: __assign({}, backgroundImage),
            keyframes: __assign({}, keyframes),
            animation: __assign({}, animation),
            animationDelay: __assign({}, animationDelay),
        },
    },
    plugins: [
        require("tailwindcss-nested-groups"),
        require("tailwindcss-animation-delay"),
    ],
};
//# sourceMappingURL=tailwind.config.js.map