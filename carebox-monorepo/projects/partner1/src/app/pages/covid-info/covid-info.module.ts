import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidInfoRoutingModule } from './covid-info-routing.module';
import { CovidInfoComponent } from './covid-info.component';
import { ListingModule } from 'projects/layout/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    CovidInfoRoutingModule,
    ListingModule
  ],
  declarations: [CovidInfoComponent]
})
export class CovidInfoModule { }
