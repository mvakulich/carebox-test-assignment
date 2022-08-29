import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CovidCurrentState } from './schema/covid-current-state';
import { CovidTimeseries, GroupedTimeseries } from './schema/covid-timeseties';

@Injectable()
export class CovidService {
  constructor(
    @InjectModel(CovidCurrentState.name)
    private covidCurrent: Model<CovidCurrentState & Document>,
    @InjectModel(CovidTimeseries.name)
    private timeseries: Model<CovidTimeseries & Document>,
  ) {}

  public getStateListInfo(): Promise<Array<CovidCurrentState>> {
    return this.covidCurrent
      .find()
      .populate({ path: 'metadata', select: 'name notes' })
      .exec();
  }

  public getStateInfo(state: string): Promise<CovidCurrentState> {
    return this.covidCurrent
      .findOne({
        state: state.toUpperCase(),
      })
      .populate('metadata')
      .populate({
        path: 'timeseries',
        select: 'count timestamp metadata -_id',
      })
      .exec();
  }

  public async getStateTimeseries(
    state: string,
  ): Promise<Record<string, GroupedTimeseries>> {
    const data = await this.timeseries
      .find({
        'metadata.state': state,
      })
      .exec();
      console.log(data);
    return data.reduce((acc, { count, timestamp, metadata: { type } }) => {
      const typedData = acc[type] || { state, type, data: [] };
      typedData.data.push({
        timestamp,
        count,
      });
      acc[type] = typedData;
      return acc;
    }, {});

  }
}
