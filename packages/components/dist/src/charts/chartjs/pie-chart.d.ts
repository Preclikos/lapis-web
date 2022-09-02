import { FC } from "react";
export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            data: number[];
            backgroundColor: string;
            borderColor?: string;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
export declare const ChartJSPieChart: FC<IProps>;
export default ChartJSPieChart;
