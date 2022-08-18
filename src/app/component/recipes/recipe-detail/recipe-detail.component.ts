import { OnInit, 
          Component, 
          Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';

@Component({
  selector : 'recipe-detail', 
  templateUrl : './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor ( private shoppingListService : ShoppingListService ) {
  }

  ngOnInit(){
  }

  public toShoppingList( ){
    console.log( 'to shopping list called' );
    for( let ingredient of this.recipe.ingredients ){
      this.shoppingListService.addIngredient( ingredient );
    }
  }

}