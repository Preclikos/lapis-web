import { ElementType, ComponentProps } from "react";
interface IProps<E extends ElementType = ElementType> {
    className?: string;
    as?: E;
}
declare type MediaProps<E extends ElementType> = PropsWithChildern<IProps<E>> & Omit<ComponentProps<E>, keyof PropsWithChildern<IProps>>;
declare const Media: <E extends ElementType<any> = "div">({ className, children, as, }: MediaProps<E>) => JSX.Element;
export default Media;
