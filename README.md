Keg class
name, brand, price and alcoholContent, PintCountLeft (124 pints per keg)


customer - list of kegs
customer - keg details
employee - Add to keg list
employee - edit keg item


example site at http://www.johnsmarketplace.com/kegs/





FILTER: LessThan10, All, New
table (color coded by price and AC)
name, brand, price and ACAmount, PintCountLeft [EDIT] [DETAILS] [PINT SELL]

Route for the "Edit Keg" action
0. We created a @Input() catcher in tr-edit child component with the code '@Input() childEditKeg: Keg;'
1. we created a @Output() EventEmitter() in the tr-list component called kegClick.
2. Event listener on the button in the tr-list child component fires off the editButtonHasBeenClicked(keg) method.
3. That method calls the EventEmitter emit method which sends the event up to app.component.
4. app.component catches the event in the HTML file with the code '(kegClick)="editKeg($event)"'.  $event is the passed Keg object.
5. That tells app.component to run it's on editKeg($event) method.
6. The editKeg($event) method just sets the this.selectedKeg to $event(a keg).
7. Because of the @Input previously set up, the tr-edit.component is instructed to make it's variable called childEditKeg equal to app.components variable selectedKeg with the code "[childEditKeg]="selectedKeg"" found in the app.component template.
8. This completes the 2 way data-binding from one child, to the parent and back to another child.
