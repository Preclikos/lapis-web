import { FC } from "react";
export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
            barPercentage?: number;
            barThickness?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
export declare const ChartJSBarChart: FC<IProps>;
export default ChartJSBarChart;
