import { IMenu } from "../types";

const menus: IMenu[] = [
    {
        id: 1,
        label: "Dashboard",
        url: "/",
        icon: "icon ion-ios-home-outline",
        submenu: [
            {
                id: 11,
                label: "Dashboard 01",
                url: "/",
            },
            {
                id: 12,
                label: "Dashboard 02",
                url: "/dashboard-two",
            },
            {
                id: 13,
                label: "Dashboard 03",
                url: "/dashboard-three",
            },
            {
                id: 14,
                label: "Dashboard 04",
                url: "/dashboard-four",
            },
            {
                id: 15,
                label: "Dashboard 05",
                url: "/dashboard-five",
            },
        ],
    },
];

export default menus;
