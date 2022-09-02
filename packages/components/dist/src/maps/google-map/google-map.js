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
import { Children } from "react";
import clsx from "clsx";
import { GoogleMap as GoogleMapComponent, useJsApiLoader, Marker as MarkerComponent, } from "@react-google-maps/api";
import { MapKey } from "@ht/shared/data/api-keys";
export var GoogleMap = function (_a) {
    var width = _a.width, height = _a.height, lat = _a.lat, lng = _a.lng, zoom = _a.zoom, options = _a.options, children = _a.children;
    var _b = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MapKey,
    }), isLoaded = _b.isLoaded, loadError = _b.loadError;
    if (loadError) {
        return _jsx("div", { children: "Map cannot be loaded right now, sorry." }, void 0);
    }
    var RenderChild = Children.map(children, function (el) {
        var child = el;
        if (child !== null) {
            var childType = child.type;
            var name_1 = childType.displayName || childType.name;
            if (name_1 === "GoogleMapMarker") {
                return _jsx(child.type, __assign({ lat: lat, lng: lng }, child.props), void 0);
            }
        }
        return null;
    });
    return isLoaded ? (_jsx("div", __assign({ className: clsx(width, height) }, { children: _jsx(GoogleMapComponent, __assign({ mapContainerStyle: { width: "100%", height: "100%" }, center: { lat: lat, lng: lng }, zoom: zoom, options: options }, { children: RenderChild }), void 0) }), void 0)) : (_jsx("div", { children: "Map is loading." }, void 0));
};
export var GoogleMapMarker = function (_a) {
    var lat = _a.lat, lng = _a.lng;
    return _jsx(MarkerComponent, { position: { lat: lat, lng: lng } }, void 0);
};
GoogleMap.defaultProps = {
    width: "w-full",
    height: "h-96",
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};
//# sourceMappingURL=google-map.js.map