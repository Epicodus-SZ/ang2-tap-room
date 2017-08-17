// import 'rxjs/add/operator/switchMap';
import { Component, Input, Output, OnInit }        from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location }                 from '@angular/common';

import { Keg } from './keg.model';
import { KegService } from './keg.service';

@Component({
  selector: 'keg-edit',
  templateUrl: './templates/keg-edit.component.html',
  styleUrls: [ './css/keg-edit.component.css' ]
})
export class KegEditComponent {

  //property passed in from parent
  @Input() childEditKeg: Keg;

  constructor(
    // private kegService: KegService,
    // private route: ActivatedRoute,
    // private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => this.kegService.getKeg(+params.get('id')))
  //     .subscribe(keg => this.childEditKeg = keg);
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}
