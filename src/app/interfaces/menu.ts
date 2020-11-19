export interface MenuItem {
    id: string;
    type: string;
    name: string;
    price: number;
    image: string;
};
export interface Menu{
    menu: MenuItem[];
}