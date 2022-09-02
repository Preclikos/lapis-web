import { FC } from "react";
interface IProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
    /**
     * 	The minimum zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
    /**
     * width of the map. Optional. Pass width class of tailwind css. Default: w-full.
     */
    width?: string;
    /**
     * height of the map. Optional. Pass height class of tailwind css. Default: h-96.
     */
    height?: string;
    /**
     *
     * Optional. Pass extra className.
     */
    className?: string;
    /**
     * Optional. Pass extra options.
     */
    options?: {
        [x: string]: unknown;
    };
}
export declare const GoogleMap: FC<IProps>;
interface IMarkerProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
}
export declare const GoogleMapMarker: FC<IMarkerProps>;
export {};
