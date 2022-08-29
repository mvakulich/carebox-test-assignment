import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'state_metadata',
})
export class CovidStateMetadata {
  @Prop()
  state: string;

  @Prop()
  notes: string;

  @Prop()
  covid19Site: string;

  @Prop()
  covid19SiteSecondary: string;

  @Prop()
  covid19SiteTertiary: string;

  @Prop()
  covid19SiteQuaternary: string;

  @Prop()
  covid19SiteQuinary: string;

  @Prop()
  twitter: string;

  @Prop()
  covid19SiteOld: string;

  @Prop()
  covidTrackingProjectPreferredTotalTestUnits: string;

  @Prop()
  covidTrackingProjectPreferredTotalTestField: string;

  @Prop()
  totalTestResultsField: string;

  @Prop()
  pui: string;

  @Prop()
  pum: boolean;

  @Prop()
  name: string;

  @Prop()
  fips: string;
}

export const CovidStateMetadataSchema =
  SchemaFactory.createForClass(CovidStateMetadata);
