import { Component } from '@angular/core';
import { ListingService } from 'projects/features/src/public_api';
import { ListingComponent } from 'projects/layout/src/public_api';

@Component({
  selector: 'partner-listing',
  templateUrl: './partner-listing.component.html',
  styleUrls: ['./partner-listing.component.scss']
})
export class PartnerListingComponent extends ListingComponent {
  constructor(listingService: ListingService) {
    super(listingService);
  }
}
