import { Component, OnInit } from '@angular/core';
import { ICovidStateData } from './listing.models';
import { ListingService } from './listing.service';
import { share, tap } from 'rxjs/operators';
import { ObservableState } from 'projects/core-components/src/public_api';

@Component({
  selector: 'lib-listing',
  template: '',
  styleUrls: []
})
export class ListingComponent implements OnInit {
  public data$!: ObservableState<ICovidStateData[]>
  constructor(private readonly listingService: ListingService) { }

  ngOnInit(): void {
    console.log('init listing component');
    this.data$ = this.listingService.getData().pipe(
      tap(data => console.log("got data", data)),
    );
  }

  public highlight(): void {
    //TODO: add service communication here
  }
}
