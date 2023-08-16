import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";


import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";


@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Observable<Recipe[]> | Recipe[] > {

  constructor( private dataStorage : DataStorageService, 
              private recipeService : RecipeService ){ }

  resolve( route: ActivatedRouteSnapshot, state : RouterStateSnapshot ) : Observable<Recipe[]> | Recipe[] {
    let recipes = this.recipeService.getRecipes();
    if( recipes.length === 0 )
      return this.dataStorage.fetchRecipes();
    else
      return recipes;
  }

}


