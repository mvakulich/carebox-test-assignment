import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingService } from './listing.service';
import { ListingComponent } from './listing.component';



@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingComponent
  ],
  providers: [ListingService]
})
export class ListingModule { }
