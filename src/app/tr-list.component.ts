import { Component, Output, EventEmitter, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

//our custom imports
import { Keg } from './keg.model';
import { KegService } from './keg.service';

@Component({
  selector: 'tr-list',
  templateUrl: './templates/tr-list.component.html',
  styleUrls: ['./css/app.component.css']
})
export class TRListComponent implements OnInit {
  //list of kegs from our DB
  kegs: Keg[];

  @Output() kegClick = new EventEmitter();

  constructor(
  //  private router: Router,
    private kegService: KegService) { }

    //method to get all kegs from DB
    getKegs(): void {
      this.kegService.getKegs().then(kegs => this.kegs = kegs);
    }

    // This method is run when component initializes
    ngOnInit(): void {
      this.getKegs();
    }

    editButtonHasBeenClicked(kegToEdit: Keg) {
        this.kegClick.emit(kegToEdit);
      }

    gotoDetail(): void {
    //  this.router.navigate(['/detail', this.selectedKeg.id]);
    }
}
