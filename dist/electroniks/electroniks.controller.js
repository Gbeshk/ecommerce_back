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
exports.ElectroniksController = void 0;
const common_1 = require("@nestjs/common");
const electroniks_service_1 = require("./electroniks.service");
const create_electronik_dto_1 = require("./dto/create-electronik.dto");
const update_electronik_dto_1 = require("./dto/update-electronik.dto");
let ElectroniksController = class ElectroniksController {
    electroniksService;
    constructor(electroniksService) {
        this.electroniksService = electroniksService;
    }
    create(createElectronikDto) {
        return this.electroniksService.create(createElectronikDto);
    }
    findAll() {
        return this.electroniksService.findAll();
    }
    findOne(id) {
        return this.electroniksService.findOne(id);
    }
    update(id, updateElectronikDto) {
        return this.electroniksService.update(+id, updateElectronikDto);
    }
    remove(id) {
        return this.electroniksService.remove(+id);
    }
};
exports.ElectroniksController = ElectroniksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_electronik_dto_1.CreateElectronikDto]),
    __metadata("design:returntype", void 0)
], ElectroniksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElectroniksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectroniksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_electronik_dto_1.UpdateElectronikDto]),
    __metadata("design:returntype", void 0)
], ElectroniksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectroniksController.prototype, "remove", null);
exports.ElectroniksController = ElectroniksController = __decorate([
    (0, common_1.Controller)('electroniks'),
    __metadata("design:paramtypes", [electroniks_service_1.ElectroniksService])
], ElectroniksController);
//# sourceMappingURL=electroniks.controller.js.map