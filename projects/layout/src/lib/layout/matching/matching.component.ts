import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListingService } from 'projects/features/src/public_api';
import {  Observable } from 'rxjs';

@Component({
  selector: 'layout-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  data$: Observable<any>

  constructor(private readonly listingService: ListingService) { }

  ngOnInit() {
    this.data$ = this.listingService.getData();
  }

}
