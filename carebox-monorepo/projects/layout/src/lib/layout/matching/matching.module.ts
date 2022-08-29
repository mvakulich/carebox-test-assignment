import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchingComponent } from './matching.component';
import { ListingModule as ListingModule } from 'projects/features/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    ListingModule,
    
  ],
  declarations: [MatchingComponent],
  exports: [MatchingComponent]
})
export class MatchingModule { }
