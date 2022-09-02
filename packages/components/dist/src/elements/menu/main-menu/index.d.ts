import { FC } from "react";
import { IMenu } from "@ht/shared/types";
interface IProps {
    menu: IMenu[];
    className?: string;
}
declare const MainMenu: FC<IProps>;
export default MainMenu;
