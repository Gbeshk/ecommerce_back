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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronikSchema = exports.Electronik = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Electronik = class Electronik {
    name;
    img;
    isNewEl;
    desc;
    price;
    priceInt;
    featuresTxt1;
    featuresTxt2;
    category;
    imgArray;
    inTheBox;
};
exports.Electronik = Electronik;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "img", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Electronik.prototype, "isNewEl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "desc", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Electronik.prototype, "priceInt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "featuresTxt1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "featuresTxt2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Electronik.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Electronik.prototype, "imgArray", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                item: { type: String, required: true },
                quantity: { type: String, required: true },
            },
        ],
    }),
    __metadata("design:type", Array)
], Electronik.prototype, "inTheBox", void 0);
exports.Electronik = Electronik = __decorate([
    (0, mongoose_1.Schema)()
], Electronik);
exports.ElectronikSchema = mongoose_1.SchemaFactory.createForClass(Electronik);
//# sourceMappingURL=electronik.schema.js.map