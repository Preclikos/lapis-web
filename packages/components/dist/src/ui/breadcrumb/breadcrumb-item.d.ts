import { FC } from "react";
interface IBreadcrumbItem {
    path?: string;
    active?: boolean;
    className?: string;
}
declare const BreadcrumbItem: FC<IBreadcrumbItem>;
export default BreadcrumbItem;
