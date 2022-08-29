import { Component, Input, OnInit } from '@angular/core';
import {ChartingComponent as FeatureChartingComponent} from 'projects/features/src/public_api'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'layout-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent extends FeatureChartingComponent implements OnInit {
  chartData$!: Observable<any> 

  ngOnInit() {
    super.ngOnInit()

    this.chartData$ = this.data$.pipe(
      map(data => {
        if (data.state === 'success') {
          const selection = data.data.positive;
          return [{
            name: 'Positive progression',
            series: selection.data.filter(({count}) => count !== null).map(s => ({
              value: s.count,
              name: s.timestamp
            }))
          }]
        }
        return undefined;
      }),
    )
  }
}
