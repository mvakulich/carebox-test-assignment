import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CovidStateMetadata } from './covid-state-metadata';
import { CovidTimeseries } from './covid-timeseties';

@Schema({
  collection: 'state_current',
  toJSON: {
    virtuals: true,
  },
})
export class CovidCurrentState {
  @Prop()
  date: number;

  metadata: CovidStateMetadata;

  timeseries: CovidTimeseries;

  @Prop()
  state: string;

  @Prop()
  positive: number;

  @Prop({ required: false, default: null })
  probableCases: number | null;

  @Prop({ required: false, default: null })
  negative: number | null;

  @Prop({ required: false, default: null })
  pending: number | null;

  @Prop()
  totalTestResultsSource: string;

  @Prop()
  totalTestResults: number;

  @Prop()
  hospitalizedCurrently: number;

  @Prop()
  hospitalizedCumulative: number;

  @Prop({ required: false, default: null })
  inIcuCurrently: number | null;

  @Prop({ required: false, default: null })
  inIcuCumulative: number | null;

  @Prop()
  onVentilatorCurrently: number;

  @Prop({ required: false, default: null })
  onVentilatorCumulative: number | null;

  @Prop({ required: false, default: null })
  recovered: number | null;

  @Prop()
  lastUpdateEt: string;

  @Prop()
  dateModified: string;

  @Prop()
  checkTimeEt: string;

  @Prop()
  death: number;

  @Prop()
  hospitalized: number;

  @Prop({ required: false, default: null })
  hospitalizedDischarged: number | null;

  @Prop()
  dateChecked: string;

  @Prop()
  totalTestsViral: number;

  @Prop()
  positiveTestsViral: number;

  @Prop()
  negativeTestsViral: number;

  @Prop({ required: false, default: null })
  positiveCasesViral: number | null;

  @Prop({ required: false, default: null })
  deathConfirmed: number | null;

  @Prop({ required: false, default: null })
  deathProbable: number | null;

  @Prop({ required: false, default: null })
  totalTestEncountersViral: number | null;

  @Prop({ required: false, default: null })
  totalTestsPeopleViral: number | null;

  @Prop({ required: false, default: null })
  totalTestsAntibody: number | null;

  @Prop({ required: false, default: null })
  positiveTestsAntibody: number | null;

  @Prop({ required: false, default: null })
  negativeTestsAntibody: number | null;

  @Prop({ required: false, default: null })
  totalTestsPeopleAntibody: number | null;

  @Prop({ required: false, default: null })
  positiveTestsPeopleAntibody: number | null;

  @Prop({ required: false, default: null })
  negativeTestsPeopleAntibody: number | null;

  @Prop({ required: false, default: null })
  totalTestsPeopleAntigen: number | null;

  @Prop({ required: false, default: null })
  positiveTestsPeopleAntigen: number | null;

  @Prop({ required: false, default: null })
  totalTestsAntigen: number | null;

  @Prop({ required: false, default: null })
  positiveTestsAntigen: number | null;

  @Prop()
  fips: string;

  @Prop()
  positiveIncrease: number;

  @Prop()
  negativeIncrease: number;

  @Prop()
  total: number;

  @Prop()
  totalTestResultsIncrease: number;

  @Prop()
  posNeg: number;

  @Prop({ required: false, default: null })
  dataQualityGrade: number | null;

  @Prop()
  deathIncrease: number;

  @Prop()
  hospitalizedIncrease: number;

  @Prop()
  hash: string;

  @Prop()
  commercialScore: number;

  @Prop()
  negativeRegularScore: number;

  @Prop()
  negativeScore: number;

  @Prop()
  positiveScore: number;

  @Prop()
  score: number;

  @Prop()
  grade: string;
}

const CovidCurrentStateSchema = SchemaFactory.createForClass(CovidCurrentState);

CovidCurrentStateSchema.virtual('metadata', {
  localField: 'state',
  foreignField: 'state',
  ref: 'CovidStateMetadata',
  justOne: true,
});

CovidCurrentStateSchema.virtual('timeseries', {
  localField: 'state',
  foreignField: 'metadata.state',
  ref: 'CovidTimeseries',
  justOne: true,
});

export { CovidCurrentStateSchema };
