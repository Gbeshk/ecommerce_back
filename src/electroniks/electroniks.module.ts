import { Module } from '@nestjs/common';
import { ElectroniksService } from './electroniks.service';
import { ElectroniksController } from './electroniks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectronikSchema } from './schemas/electronik.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: ElectronikSchema, name: 'Electronik' },
    ]),
  ],
  controllers: [ElectroniksController],
  providers: [ElectroniksService],
})
export class ElectroniksModule {}
