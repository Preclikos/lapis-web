import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

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

export const ChartJSLineChart: FC<IProps> = ({
    data,
    options,
    width,
    height,
}) => {
    return (
        <Line
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                ...options,
            }}
            width={width}
            height={height}
        />
    );
};

ChartJSLineChart.defaultProps = {
    width: "100%",
    height: "100%",
};

export default ChartJSLineChart;
