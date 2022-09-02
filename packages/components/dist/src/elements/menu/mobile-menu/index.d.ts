import { IMenu } from "@ht/shared/types";
interface IProps {
    isOpen: boolean;
    onClick: () => void;
    menu: IMenu[];
}
declare const MobileMenu: ({ isOpen, onClick, menu }: IProps) => JSX.Element;
export default MobileMenu;
