import { OnInit, 
          Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector : 'recipe-detail', 
  templateUrl : './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  recipeSubscription : any; 

  constructor ( private shoppingListService : ShoppingListService,
                private recipeService : RecipeService,
                private router : Router, 
                private route : ActivatedRoute ) {
  }

  ngOnInit(){
    this.route.params.subscribe( (params : Params) => {
      this.recipe = this.recipeService.getRecipe( parseInt( params.id ) );
    } );
  }

  public toShoppingList( ){
    console.log( 'to shopping list called' );
    for( let ingredient of this.recipe.ingredients ){
      this.shoppingListService.addIngredient( ingredient );
    }
  }

  public onRecipeEdit(){
    this.router.navigate( ['edit'], {relativeTo : this.route})
  }

  public onRecipeDelete(){
    this.recipeService.deleteRecipe( this.recipe.id );
    this.router.navigate(['/recipes']);
  }

}