import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListingComponent } from './listing/partner-listing.component';
import { ListingModule } from 'projects/layout/src/public_api';
import { ListingModule as FeaturesListingModule } from 'projects/features/src/public_api';
import { PipesModule } from 'projects/core-components/src/public_api';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartingModule } from 'projects/layout/src/lib/layout/charting/charting.module';



@NgModule({
  declarations: [PartnerListingComponent],
  imports: [
    CommonModule,
    ListingModule,
    PipesModule,
    FeaturesListingModule,
    NgxChartsModule,
    ChartingModule
  ],
  exports: [PartnerListingComponent]
})
export class CompoentsModule { }
