import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListingComponent } from './listing/partner-listing.component';
import { ListingModule } from 'projects/layout/src/public_api';
import { PipesModule } from 'projects/core-components/src/public_api';



@NgModule({
  declarations: [PartnerListingComponent],
  imports: [
    CommonModule,
    ListingModule,
    PipesModule
  ],
  exports: [PartnerListingComponent]
})
export class CompoentsModule { }
