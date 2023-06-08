import { Component, 
        OnDestroy, 
        OnInit,
        ViewChild} from '@angular/core';
import { NgForm, 
        ValidatorFn, 
        AbstractControl, 
        ValidationErrors } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';


export function greaterThanValidator( n : number ): ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    console.log( "inside the validator" );
    console.log( control.value );
    return null;
  }
}

@Component({
  selector : 'shopping-edit', 
  templateUrl : './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingList', {static:false}) form: NgForm;
  editingSubscription : Subscription;
  currentIngredientId : number;
  editMode = false;

  constructor( private shoppingListService : ShoppingListService ) {
  }

  ngOnInit(): void {
    this.editingSubscription = this.shoppingListService.startedEditing.subscribe( (ingredientId) => {
      this.editMode = true;
      this.currentIngredientId = ingredientId;
      let ingredient = this.shoppingListService.getIngredient( this.currentIngredientId );
      this.form.setValue( { name : ingredient.name, 
                            amount : ingredient.amount } );
    })
    
  }

  ngOnDestroy(): void {
    if( this.editingSubscription )
      this.editingSubscription.unsubscribe();
  }

  public onSubmit( ){
    if( this.editMode ){
      this.shoppingListService.updateIngredient( this.currentIngredientId, 
                                                  new Ingredient( this.form.value.name, 
                                                                  this.form.value.amount ) );
    }else{
      this.shoppingListService.addIngredient( new Ingredient(this.form.value.name, 
                                                    this.form.value.amount ));
    }
    this.onClear();
  }

  public onClear(){
    this.form.reset();
    this.editMode = false;
  }

  public onDelete(){
    this.shoppingListService.deleteIngredient( this.currentIngredientId );
    this.onClear();
  }

}