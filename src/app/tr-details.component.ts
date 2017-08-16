import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Keg } from './keg.model';
import { KegService } from './keg.service';
@Component({
  selector: 'keg-detail',
  templateUrl: './templates/keg-detail.component.html',
  styleUrls: [ './css/keg-detail.component.css' ]
})
export class KegDetailComponent implements OnInit {
  keg: Keg;

  constructor(
    private kegService: KegService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.kegService.getKeg(+params.get('id')))
      .subscribe(keg => this.keg = keg);
  }

  goBack(): void {
    this.location.back();
  }
}
