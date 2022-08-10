import { Component, 
         OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes', 
  templateUrl : './recipes.component.html',
  providers :  [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor( private recipeService : RecipeService ) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe) => {this.selectedRecipe = recipe } 
    );
  }

}

