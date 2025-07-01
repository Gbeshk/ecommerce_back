import { PartialType } from '@nestjs/mapped-types';
import { CreateElectronikDto } from './create-electronik.dto';

export class UpdateElectronikDto extends PartialType(CreateElectronikDto) {}
