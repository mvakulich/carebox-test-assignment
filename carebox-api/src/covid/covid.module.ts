import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidController } from './covid.controller';
import { CovidService } from './covid.service';
import {
  CovidCurrentState,
  CovidCurrentStateSchema,
} from './schema/covid-current-state';
import {
  CovidStateMetadata,
  CovidStateMetadataSchema,
} from './schema/covid-state-metadata';
import {
  CovidTimeseries,
  CovidTimeseriesSchema,
} from './schema/covid-timeseties';

@Module({
  controllers: [CovidController],
  providers: [CovidService],
  imports: [
    MongooseModule.forFeature([
      { name: CovidStateMetadata.name, schema: CovidStateMetadataSchema },
      { name: CovidCurrentState.name, schema: CovidCurrentStateSchema },
      { name: CovidTimeseries.name, schema: CovidTimeseriesSchema },
    ]),
  ],
})
export class CovidModule {}
