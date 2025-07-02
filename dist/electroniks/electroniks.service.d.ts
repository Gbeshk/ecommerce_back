import { CreateElectronikDto } from './dto/create-electronik.dto';
import { UpdateElectronikDto } from './dto/update-electronik.dto';
import { Model } from 'mongoose';
import { Electronik } from './schemas/electronik.schema';
export declare class ElectroniksService {
    private electronikModel;
    constructor(electronikModel: Model<Electronik>);
    create({ category, desc, featuresTxt1, featuresTxt2, img, inTheBox, name, isNewEl, price, imgArray, }: CreateElectronikDto): Promise<{
        success: string;
        data: import("mongoose").Document<unknown, {}, Electronik, {}> & Electronik & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Electronik, {}> & Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Electronik, {}> & Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Electronik, "find", {}>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Electronik, {}> & Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(id: number, updateElectronikDto: UpdateElectronikDto): string;
    remove(id: number): string;
}
