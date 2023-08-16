import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../component/shared/data-storage.service';
import { RecipeService } from '../component/recipes/recipe.service';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css' ]
})
export class Header implements OnInit {

  public collapsed : boolean = false;

  constructor( private dataStorage : DataStorageService,
               private recipeService : RecipeService ) {}

  ngOnInit() : void {}

  storeRecipes(){
    this.dataStorage.storeRecipes()
      .subscribe();
  }

  fetchRecipes(){
    this.dataStorage.fetchRecipes();
  }

}
