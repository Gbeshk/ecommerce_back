import { ElectroniksService } from './electroniks.service';
import { CreateElectronikDto } from './dto/create-electronik.dto';
import { UpdateElectronikDto } from './dto/update-electronik.dto';
export declare class ElectroniksController {
    private readonly electroniksService;
    constructor(electroniksService: ElectroniksService);
    create(createElectronikDto: CreateElectronikDto): Promise<{
        success: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/electronik.schema").Electronik, {}> & import("./schemas/electronik.schema").Electronik & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/electronik.schema").Electronik, {}> & import("./schemas/electronik.schema").Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/electronik.schema").Electronik, {}> & import("./schemas/electronik.schema").Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schemas/electronik.schema").Electronik, "find", {}>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/electronik.schema").Electronik, {}> & import("./schemas/electronik.schema").Electronik & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    update(id: string, updateElectronikDto: UpdateElectronikDto): string;
    remove(id: string): string;
}
