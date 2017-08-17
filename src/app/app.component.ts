import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./css/app.component.css'],
})
export class AppComponent {
  title = "Steve's Tap-a-rama";

  // by default no keg is selected in the UI
  selectedKeg: Keg = null;

  //method to capture when someone selects edit button in list component
  editKeg(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
}
