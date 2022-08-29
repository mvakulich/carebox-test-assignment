import { Component, ElementRef, ViewChild, OnDestroy, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { SuccessState } from 'projects/core-components/src/public_api';
import { ICovidStateData, IStateCurrentData } from 'projects/features/src/public_api';
import { ListingService } from 'projects/features/src/public_api';
import { ListingComponent } from 'projects/layout/src/public_api';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'partner-listing',
  templateUrl: './partner-listing.component.html',
  styleUrls: ['./partner-listing.component.scss']
})
export class PartnerListingComponent extends ListingComponent implements OnDestroy, AfterViewInit {

  @ViewChildren('usMap', {read: ElementRef<SVGElement>}) el: QueryList<ElementRef<SVGElement>>;

  stateGrade = new BehaviorSubject<Record<string, number>>({});
  selectedState$ = new BehaviorSubject<string | undefined>(undefined);

  private subscriptions: Subscription[] = [];

  constructor(listingService: ListingService) {
    super(listingService);
  }

  override ngOnInit(): void {
      super.ngOnInit();
      this.subscriptions.push(this.data$.subscribe(data => {
        console.log(data);
        if(data.state === 'success') {
          this.stateGrade.next(this.buildHeatMap(data.data));
          console.log(this.stateGrade.value)
        }
      }));
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(s => s.unsubscribe())
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(this.el.changes.subscribe((next: QueryList<ElementRef<SVGElement>>)=> {
      next.forEach(svgUsMap => {
        svgUsMap.nativeElement.querySelectorAll<SVGPathElement>('.state>path').forEach(el => {
          el.addEventListener('click', (e) => {
            this.selectedState$.next((e.target as SVGPathElement).attributes.getNamedItem('name').value?.toUpperCase());
          })
        })
      })
    }))
  }

  private buildHeatMap(data: ICovidStateData[]): Record<string, number>  {
    const range = data.reduce(({min, max}, {positive}) => {
      return { min: Math.min(positive, min), max: Math.max(positive, max) }
    }, {min: data[0].positive, max: data[0].positive})
    const step =  (range.max - range.min) / 5;

    return data.reduce((acc, {state, positive, ...rest}) => {
      const heat = Math.ceil((positive - range.min) / step);
      return Object.assign(acc, {[state.toLowerCase()]: heat})
    }, {})
  }
}
