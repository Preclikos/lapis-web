import { FC } from "react";
import { MultiValue, SingleValue } from "react-select";
import { IFeedback } from "../types";
interface IOption {
    value: string;
    label: string;
    readonly color?: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}
export interface GroupedOption {
    readonly label: string;
    readonly options: readonly IOption[];
}
interface IProps extends IFeedback {
    options: IOption[] | GroupedOption[];
    defaultValue?: IOption;
    value?: IOption;
    name: string;
    onChange?: (newValue: MultiValue<IOption> | SingleValue<IOption>) => void;
    readonly isClearable?: boolean;
    readonly isDisabled?: boolean;
    readonly isLoading?: boolean;
    readonly isRtl?: boolean;
    readonly isSearchable?: boolean;
    readonly isMulti?: boolean;
    placeholder?: string;
    feedbackText?: string;
}
declare const Select: FC<IProps>;
export default Select;
