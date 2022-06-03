import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector : 'recipe-list', 
  templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent {

  public recipes : Recipe [] = [
    new Recipe( "Croquetas", 
              "Croquetas muy ricas", 
              "https://i.blogs.es/36d336/650_1000_croquetas2/1366_2000.jpg"),
              new Recipe( "Croquetas", 
              "Croquetas muy ricas", 
              "https://i.blogs.es/36d336/650_1000_croquetas2/1366_2000.jpg")
  ];

  constructor(){}

}

