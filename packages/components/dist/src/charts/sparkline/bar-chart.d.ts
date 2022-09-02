import { FC, SVGAttributes, ReactSVGElement, MouseEvent } from "react";
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
interface SparklinesBarsProps {
    points?: Point[];
    height?: number;
    style?: SVGAttributes<ReactSVGElement>["style"];
    barWidth?: number;
    margin?: number;
    onMouseMove?: (p: Point, event: MouseEvent<ReactSVGElement>) => void;
}
interface ISparklineProps extends SparklinesProps, SparklinesBarsProps {
    barStyle?: SVGAttributes<ReactSVGElement>["style"];
    barHeight?: number;
}
declare const SparkBarChart: FC<ISparklineProps>;
export default SparkBarChart;
