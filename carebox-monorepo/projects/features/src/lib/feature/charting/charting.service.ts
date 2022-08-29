import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableState, wrapObservableState } from 'projects/core-components/src/public_api';
import { share } from 'rxjs/operators'

export interface IChartTimePoint {
  state: string;
  type: string;
  data: Array<{
    timestamp: string;
    count: number;
  }>
}

export type IChartResponse = Record<string, IChartTimePoint>

const API_URL = "http://localhost:3000/covid/timeseries";

@Injectable({
  providedIn: 'root'
})
export class ChartingService {
  constructor(private readonly httpClient: HttpClient) { }

  public getData(state: string): ObservableState<IChartResponse> {
    return wrapObservableState(this.httpClient.get<IChartResponse>(`${API_URL}/${state}`));
  }
}
