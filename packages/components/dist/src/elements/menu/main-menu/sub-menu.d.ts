import { FC } from "react";
interface Menu {
    id: string | number;
    label: string;
    url: string;
    submenu?: Menu[];
}
interface IProps {
    menu: Menu[];
}
declare const Submenu: FC<IProps>;
export default Submenu;
