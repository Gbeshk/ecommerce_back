"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateElectronikDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_electronik_dto_1 = require("./create-electronik.dto");
class UpdateElectronikDto extends (0, mapped_types_1.PartialType)(create_electronik_dto_1.CreateElectronikDto) {
}
exports.UpdateElectronikDto = UpdateElectronikDto;
//# sourceMappingURL=update-electronik.dto.js.map