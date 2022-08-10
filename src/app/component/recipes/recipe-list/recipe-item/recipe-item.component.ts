import { Component, 
        Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector : 'recipe-item',
  templateUrl : './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input() recipe : Recipe;

  constructor( private recipeService : RecipeService ) { }

  onSelectedRecipe( ){
    this.recipeService.selectedRecipe.emit( this.recipe );
  }
}

