export declare class Electronik {
    name: string;
    img: string;
    isNewEl: boolean;
    desc: string;
    price: string;
    priceInt: number;
    featuresTxt1: string;
    featuresTxt2: string;
    category: string;
    imgArray: string[];
    inTheBox: {
        item: string;
        quantity: string;
    }[];
}
export declare const ElectronikSchema: import("mongoose").Schema<Electronik, import("mongoose").Model<Electronik, any, any, any, import("mongoose").Document<unknown, any, Electronik, any> & Electronik & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Electronik, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Electronik>, {}> & import("mongoose").FlatRecord<Electronik> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
