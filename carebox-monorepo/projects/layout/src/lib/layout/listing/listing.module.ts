import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { PipesModule } from 'projects/core-components/src/public_api';
import { ListingModule as FeatureListingModule } from 'projects/features/src/public_api';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    ListingComponent
  ],
  exports: [
    ListingComponent,
    FeatureListingModule
  ],
  imports: [
    CommonModule,
    PipesModule,
    FeatureListingModule,
    MarkdownModule.forChild()
  ]
})
export class ListingModule { }
