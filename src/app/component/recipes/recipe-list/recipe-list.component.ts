import { Component,
         Output, 
         EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector : 'recipe-list', 
  templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  public recipes : Recipe [] = [
    new Recipe( "Croquetas", 
              "Croquetas muy ricas", 
              "https://i.blogs.es/36d336/650_1000_croquetas2/1366_2000.jpg"),
              new Recipe( "Bacalao al pil pil", 
              "Un clásico del bacalao", 
              "https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg")
  ];

  constructor(){}

  public onSelectedRecipe( selectedRecipe ){
    this.selectedRecipe.emit( selectedRecipe );
  }

}

