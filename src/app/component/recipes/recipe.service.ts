import { Injectable } from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipesChanged : Subject<Recipe[]> = new Subject<Recipe[]>();
  private recipes : Recipe [] = [
    new Recipe( 0, 
              "Croquetas", 
              "Croquetas muy ricas", 
              "https://i.blogs.es/36d336/650_1000_croquetas2/1366_2000.jpg",
              [ new Ingredient( 'harina', 1 ), 
              new Ingredient('pan rallado', 1 )] ),
    new Recipe( 1, 
              "Bacalao al pil pil", 
              "Un clásico del bacalao", 
              "https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg",
              [ new Ingredient( 'bacalao', 1 ), 
                new Ingredient( 'aceite de oliva', 1 )] )
            ];

  public getRecipes() : Recipe[] {
    return this.recipes;
  }

  public getRecipe( recipeId : number ) : Recipe {
    for( let recipe of this.recipes ){
      if( recipe.id === recipeId )
        return recipe;
    }
    return new Recipe( this.computeRecipeId(),
                        '', '', '', [] );
  }

  public updateRecipe( recipe : Recipe ){
    for( let i = 0; i < this.recipes.length; i++ ){
      if( this.recipes[i].id === recipe.id ){
        this.recipes.splice( i, 1 ); 
        this.recipes.push( recipe );
        this.recipesChanged.next( this.recipes );
      }      
    }
  }

  public deleteRecipe( id : number ){
    for( let i = 0; i < this.recipes.length; i++ ){
      if( this.recipes[i].id === id ){
        this.recipes.splice( i, 1 );
        this.recipesChanged.next( this.recipes );
        return;
      }      
    }
  }

  public addRecipe( recipe : Recipe ) {
    if( !recipe.id ) {
      recipe.id = this.computeRecipeId();
    }
    this.recipes.push( recipe );
    this.recipesChanged.next( this.recipes );
  }

  private computeRecipeId() : number{
    let maxId = this.recipes.reduce( (accum, current) => {
      if( current && current.id > accum )
        return current.id;
      else
        return accum; 
    }, -Infinity );
    return maxId + 1; 
  }

}


