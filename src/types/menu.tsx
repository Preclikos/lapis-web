export interface IMegamenu {
    id: string | number;
    title?: string;
    submenu: IMenu[];
}

export interface IMenu {
    id: string | number;
    label: string;
    url: string;
    icon?: string;
    submenu?: IMenu[];
    megamenu?: IMegamenu[];
}