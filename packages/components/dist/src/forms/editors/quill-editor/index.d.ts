import { FC } from "react";
import "react-quill/dist/quill.snow.css";
export interface IProps {
    /**
     * The value of the editor
     */
    value?: string;
    /**
     * The handler for the change event
     */
    onChange?: (val: string) => void;
}
declare const QuillEditor: FC<IProps>;
export default QuillEditor;
