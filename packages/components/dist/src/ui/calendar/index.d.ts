import { FC } from "react";
interface IProps {
    className?: string;
    value?: Date | Date[] | null | undefined;
    onChange?: (date: Date | Date[]) => void;
}
declare const Calendar: FC<IProps>;
export default Calendar;
