import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateElectronikDto } from './dto/create-electronik.dto';
import { UpdateElectronikDto } from './dto/update-electronik.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Electronik } from './schemas/electronik.schema';

@Injectable()
export class ElectroniksService {
  constructor(
    @InjectModel('Electronik') private electronikModel: Model<Electronik>,
  ) {}
  async create({
    category,
    desc,
    featuresTxt1,
    featuresTxt2,
    img,
    inTheBox,
    name,
    isNewEl,
    price,
    imgArray,
  }: CreateElectronikDto) {
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

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('invalid id');
    }
    return await this.electronikModel.findById(id);
  }

  update(id: number, updateElectronikDto: UpdateElectronikDto) {
    return `This action updates a #${id} electronik`;
  }

  remove(id: number) {
    return `This action removes a #${id} electronik`;
  }
}
