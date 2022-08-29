import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ObservableState } from 'projects/core-components/src/public_api';
import { ReplaySubject, Subscription } from 'rxjs';
import { distinctUntilChanged, switchMap, tap, share } from 'rxjs/operators';
import { ChartingService, IChartResponse } from './charting.service';

@Component({
  selector: 'lib-charting',
  template: '',
  styleUrls: []
})
export class ChartingComponent implements OnInit, OnChanges {
  data$!: ObservableState<IChartResponse>;
  state$ = new ReplaySubject<string>(0);
  subscriptions: Subscription[] = [];
  
  @Input()
  state: string;


  constructor(private chartingService: ChartingService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if ('state' in changes) {
        this.state$.next(changes['state'].currentValue);
      }
  }
  ngOnInit(): void {
    this.data$ = this.state$.pipe(
      distinctUntilChanged(),
      switchMap((state) => {
        return this.chartingService.getData(state)
      }),
      share({ resetOnError: false, resetOnComplete: false, resetOnRefCountZero: false })


    )
  }

}
