import { Controller, Get, Param } from '@nestjs/common';
import { CovidService } from './covid.service';
import { CovidCurrentState } from './schema/covid-current-state';
import { GroupedTimeseries } from './schema/covid-timeseties';

@Controller('covid')
export class CovidController {
  constructor(private covidService: CovidService) {}

  @Get()
  public findAll(): Promise<CovidCurrentState[]> {
    return this.covidService.getStateListInfo();
  }

  @Get('timeseries/:state')
  public getStateInfo(@Param() { state }): Promise<Record<string, GroupedTimeseries>> {
    console.warn("getting time series fpr state", state);
    return this.covidService.getStateTimeseries(state);
  }
}
