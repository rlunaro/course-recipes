import { Component, 
        Input, 
        Output,
        EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector : 'recipe-item',
  templateUrl : './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input() recipe : Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor( ) { }

  onSelectedRecipe( recipe ){
    this.selectedRecipe.emit( recipe );
  }
}