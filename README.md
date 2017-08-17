## Specs

1. As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent. -- DONE
2. As an employee, I want to fill out a form when I tap a new keg to add it to the list.
3. As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.


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
