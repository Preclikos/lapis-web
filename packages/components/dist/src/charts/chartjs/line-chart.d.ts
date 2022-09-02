import { FC } from "react";
export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor?: string;
            borderColor?: string;
            borderWidth?: number;
            tension?: number;
            fill?: boolean;
            pointRadius?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
export declare const ChartJSLineChart: FC<IProps>;
export default ChartJSLineChart;
