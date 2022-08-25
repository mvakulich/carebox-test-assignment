import { Component } from '@angular/core';
import { ListingComponent as FeatureListingComponent } from 'projects/features/src/lib/feature/listing/listing.component';
import { ListingService } from 'projects/features/src/public_api';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'layout-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent extends FeatureListingComponent {

  constructor(listingService: ListingService) { 
    super(listingService)
  }

}
