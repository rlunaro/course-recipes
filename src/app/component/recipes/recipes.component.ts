import { Component, 
         OnInit, 
         Output, 
         EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipes', 
  templateUrl : './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor() {}

  ngOnInit(): void {}

  public onSelectedRecipe( recipe ){
    console.log("recipe:", recipe );
    this.selectedRecipe = recipe;
  }

}

