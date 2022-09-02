import { FC, SVGAttributes, ReactSVGElement } from "react";
interface Point {
    x: number;
    y: number;
}
interface SparklinesProps {
    data?: number[];
    limit?: number;
    width?: number;
    height?: number;
    svgWidth?: SVGAttributes<ReactSVGElement>["width"];
    svgHeight?: SVGAttributes<ReactSVGElement>["height"];
    preserveAspectRatio?: SVGAttributes<ReactSVGElement>["preserveAspectRatio"];
    margin?: number;
    min?: number;
    max?: number;
    style?: SVGAttributes<ReactSVGElement>["style"];
}
interface SparklinesLineProps {
    color?: SVGAttributes<ReactSVGElement>["color"];
    style?: SVGAttributes<ReactSVGElement>["style"];
    onMouseMove?: (event: "enter" | "click", value: number, point: Point) => void;
}
interface SparklinesSpotsProps {
    spotSize?: number;
    spotStyle?: SVGAttributes<ReactSVGElement>["style"];
    spotColors?: {
        [change: string]: string;
    };
}
interface ISparklineLineProps extends SparklinesProps, SparklinesLineProps, SparklinesSpotsProps {
    color?: SVGAttributes<ReactSVGElement>["color"];
    lineStyle?: SVGAttributes<ReactSVGElement>["style"];
    hasSpot?: boolean;
}
declare const SparkLineChart: FC<ISparklineLineProps>;
export default SparkLineChart;
