import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongoSchema } from 'mongoose';

export interface ITSMetadata {
  type: string;
  state: string;
}

const TSMetadataSchema = new MongoSchema({
  type: { type: String },
  state: { type: String },
});

export interface GroupedTimeseries {
  state: string;
  type: string;
  data: Array<{
    timestamp: string;
    count: number;
  }>
}

@Schema({
  timeseries: {
    timeField: 'timestamp',
    metaField: 'metadata',
    granularity: 'hours',
  },
  collection: 'covid_tests_results',
})
export class CovidTimeseries {
  @Prop({ type: Date })
  timestamp: Date;

  @Prop({ type: TSMetadataSchema })
  metadata: ITSMetadata;

  @Prop({ required: false })
  count: number;
}

export const CovidTimeseriesSchema =
  SchemaFactory.createForClass(CovidTimeseries);

