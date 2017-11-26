export enum MenuItemType {
    section,
    item   
}
export interface MenuItem {
    title: string;
    type?: MenuItemType;
    url?: string;
    selected?: boolean;
    children?: MenuItem[];
}