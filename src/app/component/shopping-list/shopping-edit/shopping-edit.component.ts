import { Component, 
      ElementRef, 
      ViewChild,
      Output, 
      EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector : 'shopping-edit', 
  templateUrl : './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() {

  }

  public onAddShoppingList( ){
    this.ingredient.emit( new Ingredient(this.nameInputRef.nativeElement.value, 
                          this.amountInputRef.nativeElement.value ));
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }

}