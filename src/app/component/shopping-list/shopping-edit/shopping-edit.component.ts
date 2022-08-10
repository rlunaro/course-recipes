import { Component, 
      ElementRef, 
      ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector : 'shopping-edit', 
  templateUrl : './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef;

  constructor( private shoppingListService : ShoppingListService ) {

  }

  public onAddShoppingList( ){
    this.shoppingListService.addIngredient( new Ingredient(this.nameInputRef.nativeElement.value, 
                          this.amountInputRef.nativeElement.value ));
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }

}