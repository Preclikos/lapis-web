import { jsx as _jsx } from "react/jsx-runtime";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
var QuillEditor = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (_jsx(ReactQuill, { className: "h-[200px] pb-[42px]", theme: "snow", value: value, onChange: onChange, formats: [
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
        ], modules: {
            toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "code-block",
                ],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ["link", "image"],
                ["clean"],
                [{ color: [] }],
            ],
        } }, void 0));
};
export default QuillEditor;
//# sourceMappingURL=index.js.map