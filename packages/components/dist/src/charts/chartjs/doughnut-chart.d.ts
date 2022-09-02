import { FC } from "react";
export interface IProps {
    data: {
        labels?: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string;
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}
export declare const ChartJSDoughnutChart: FC<IProps>;
export default ChartJSDoughnutChart;
