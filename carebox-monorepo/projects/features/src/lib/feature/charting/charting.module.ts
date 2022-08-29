import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartingComponent } from './charting.component';
import { ChartingService } from './charting.service';



@NgModule({
  declarations: [
    ChartingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ChartingService
  ]
})
export class ChartingModule { }
