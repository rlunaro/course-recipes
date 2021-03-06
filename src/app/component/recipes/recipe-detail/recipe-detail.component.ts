import { OnInit, 
          Component, 
          Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector : 'recipe-detail', 
  templateUrl : './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor () {
  }

  ngOnInit(){
  }

}