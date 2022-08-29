import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  
import { ICovidStateData, } from './listing.models';
import { ObservableState, wrapObservableState } from 'projects/core-components/src/public_api';
import { share } from 'rxjs/operators';

const API_URL = "http://localhost:3000/covid";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private readonly httpClient: HttpClient) { }

  public getData(): ObservableState<ICovidStateData[]> {
    return wrapObservableState(this.httpClient.get<ICovidStateData[]>(API_URL).pipe(
      share({ resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })
    ));
  }
}
