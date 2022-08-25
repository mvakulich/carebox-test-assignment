import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  
import { combineLatest, observable, Observable, of, switchMap, tap } from 'rxjs';
import { ICovidStateData, IStateCurrentData, IStateMetadata } from './listing.models';

const HOST = "https://api.covidtracking.com";
const STATE_METADATA = "/v1/states/info.json";
const STATES_CURRENT = "/v1/states/current.json";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private readonly httpClient: HttpClient) { }


  private getMetadata() {
    return this.httpClient.get<IStateMetadata[]>(`${HOST}${STATE_METADATA}`);
  }

  private getCurrentData() {
    return this.httpClient.get<IStateCurrentData[]>(`${HOST}${STATES_CURRENT}`);
  }



  public getData(): Observable<ICovidStateData[]> {
    return combineLatest([this.getMetadata(), this.getCurrentData()]).pipe(
      switchMap(([metada, data]) => {
        const stateDataMap = data.reduce((acc, stateData) => {
          return {
            ...acc,
            [stateData.state]: stateData
          }
        }, {})
        return of(metada.map(m => ({
          ...m,
          ...stateDataMap[m.state]
        })))
      })
    )

  }
}
