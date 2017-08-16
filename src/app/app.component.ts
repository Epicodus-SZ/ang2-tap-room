import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./css/app.component.css'],
})
export class AppComponent {
  title = 'Tap Room';

  selectedKeg: Keg = null;

  editKeg(clickedKeg: Keg) {
  this.selectedKeg = clickedKeg;
}
}
