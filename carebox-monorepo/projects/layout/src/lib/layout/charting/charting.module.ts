import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartingComponent } from './charting.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ChartingComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [ChartingComponent]
})
export class ChartingModule { }
