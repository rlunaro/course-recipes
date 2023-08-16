import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private backendUrl = 'https://curso-angular-rlunaro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor( private http : HttpClient,
              private recipeService : RecipeService ){}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put( this.backendUrl, recipes );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>( this.backendUrl )
    .pipe( 
      map( recipes => { 
        return recipes.map( recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients :  [] };
        });
      }),
      tap( recipes => this.recipeService.setRecipes( recipes ) ) 
    );
  }

}


