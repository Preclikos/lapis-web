import { FC } from "react";
export interface ProgressProps {
    /**
     * Current value of progress
     */
    now: number;
    /**
     * Minimum value progress can begin from
     */
    min?: number;
    /**
     * Maximum value progress can reach
     */
    max?: number;
    /**
     * Show label that represents visual percentage. EG. 60%
     */
    isLabel?: boolean;
    /**
     * Optional. Default is `primary`.
     */
    color?: "primary" | "success" | "danger" | "warning" | "info" | "indigo" | "purple" | "orange" | "pink";
    /**
     * Optional. Default is `md`.
     */
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    /**
     * Uses a gradient to create a striped effect.
     */
    striped?: boolean;
    /**
     * Extra Class Name
     */
    className?: string;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
