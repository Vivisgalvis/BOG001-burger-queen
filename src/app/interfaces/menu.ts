export interface MenuItem {
    id: string;
    typeFood: string;
    name: string;
    price: number;
    image: string;
};
export interface Menu{
    menu: MenuItem[];
}