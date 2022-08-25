import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICovidStateData } from './listing.models';
import { ListingService } from './listing.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'lib-listing',
  template: '',
  styleUrls: []
})
export class ListingComponent implements OnInit {
  data$!: Observable<ICovidStateData[]>
  constructor(private readonly listingService: ListingService) { }

  ngOnInit(): void {
    this.data$ = this.listingService.getData().pipe(
      tap(data => console.log("got data", data))
    );
  }

  public highlight(): void {
    //TODO: add service communication here
  }
}
