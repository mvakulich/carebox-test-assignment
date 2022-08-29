import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ObservableState } from 'projects/core-components/src/public_api';
import { shareReplay } from 'rxjs';
import { share } from 'rxjs/operators';
import { ChartingService, IChartResponse } from './charting.service';

@Component({
  selector: 'lib-charting',
  template: '',
  styleUrls: []
})
export class ChartingComponent implements OnInit, OnChanges {
  data$!: ObservableState<IChartResponse>
  
  @Input()
  state: string;

  constructor(private chartingService: ChartingService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if ('state' in changes) {
        this.data$ = this.chartingService.getData(changes['state'].currentValue).pipe(
          share({ resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })
        )
      }
  }
  ngOnInit(): void {
    console.log(this.state);
    this.data$ = this.chartingService.getData(this.state).pipe(
      share({ resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })
    )
  }

}
