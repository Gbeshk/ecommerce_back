"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectroniksModule = void 0;
const common_1 = require("@nestjs/common");
const electroniks_service_1 = require("./electroniks.service");
const electroniks_controller_1 = require("./electroniks.controller");
const mongoose_1 = require("@nestjs/mongoose");
const electronik_schema_1 = require("./schemas/electronik.schema");
let ElectroniksModule = class ElectroniksModule {
};
exports.ElectroniksModule = ElectroniksModule;
exports.ElectroniksModule = ElectroniksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { schema: electronik_schema_1.ElectronikSchema, name: 'Electronik' },
            ]),
        ],
        controllers: [electroniks_controller_1.ElectroniksController],
        providers: [electroniks_service_1.ElectroniksService],
    })
], ElectroniksModule);
//# sourceMappingURL=electroniks.module.js.map