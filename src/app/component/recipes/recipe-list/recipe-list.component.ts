import { Component,
         Output, 
         EventEmitter, 
         OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector : 'recipe-list', 
  templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor( public recipeService : RecipeService ){}

  public ngOnInit(){
  }

  public onSelectedRecipe( selectedRecipe ){
    this.selectedRecipe.emit( selectedRecipe );
  }

}

