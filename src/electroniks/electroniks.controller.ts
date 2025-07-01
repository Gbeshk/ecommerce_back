import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElectroniksService } from './electroniks.service';
import { CreateElectronikDto } from './dto/create-electronik.dto';
import { UpdateElectronikDto } from './dto/update-electronik.dto';

@Controller('electroniks')
export class ElectroniksController {
  constructor(private readonly electroniksService: ElectroniksService) {}

  @Post()
  create(@Body() createElectronikDto: CreateElectronikDto) {
    return this.electroniksService.create(createElectronikDto);
  }

  @Get()
  findAll() {
    return this.electroniksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electroniksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateElectronikDto: UpdateElectronikDto,
  ) {
    return this.electroniksService.update(+id, updateElectronikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electroniksService.remove(+id);
  }
}
