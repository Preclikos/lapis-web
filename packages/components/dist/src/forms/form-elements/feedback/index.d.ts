import { FC } from "react";
export interface IFeedback {
    state?: "success" | "warning" | "error";
    showErrorOnly?: boolean;
}
declare const Feedback: FC<IFeedback>;
export default Feedback;
