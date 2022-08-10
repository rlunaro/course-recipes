import { Component,
         Output, 
         EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector : 'recipe-list', 
  templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor( public recipeService : RecipeService ){}

  public onSelectedRecipe( selectedRecipe ){
    this.selectedRecipe.emit( selectedRecipe );
  }

}

