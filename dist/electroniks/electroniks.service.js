"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectroniksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ElectroniksService = class ElectroniksService {
    electronikModel;
    constructor(electronikModel) {
        this.electronikModel = electronikModel;
    }
    async create({ category, desc, featuresTxt1, featuresTxt2, img, inTheBox, name, isNewEl, price, imgArray, }) {
        const priceInt = Number(price.replace(/[^0-9.-]+/g, ''));
        const newProduct = await this.electronikModel.create({
            category,
            desc,
            featuresTxt1,
            featuresTxt2,
            img,
            inTheBox,
            isNewEl,
            name,
            price,
            priceInt,
            imgArray,
        });
        return { success: 'ok', data: newProduct };
    }
    findAll() {
        return this.electronikModel.find();
    }
    async findOne(id) {
        if (!(0, mongoose_2.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('invalid id');
        }
        return await this.electronikModel.findById(id);
    }
    update(id, updateElectronikDto) {
        return `This action updates a #${id} electronik`;
    }
    remove(id) {
        return `This action removes a #${id} electronik`;
    }
};
exports.ElectroniksService = ElectroniksService;
exports.ElectroniksService = ElectroniksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Electronik')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ElectroniksService);
//# sourceMappingURL=electroniks.service.js.map