declare class BoxItemDto {
    item: string;
    quantity: string;
}
export declare class CreateElectronikDto {
    name: string;
    img: string;
    isNewEl: boolean;
    desc: string;
    imgArray: string[];
    price: string;
    featuresTxt1: string;
    featuresTxt2: string;
    category: string;
    inTheBox: BoxItemDto[];
}
export {};
