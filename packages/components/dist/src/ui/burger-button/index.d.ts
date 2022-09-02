interface IProps {
    label: string;
    onClick: () => void;
    className?: string;
}
declare const BurgerButton: ({ label, onClick, className }: IProps) => JSX.Element;
export default BurgerButton;
