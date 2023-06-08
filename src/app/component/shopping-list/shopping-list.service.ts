import { EventEmitter, 
        Injectable,
        Output } from "@angular/core";
import { Subject } from 'rxjs';

import { Ingredient } from "src/app/shared/ingredient.model";


@Injectable()
export class ShoppingListService {

  onNewIngredient = new Subject<Ingredient>();
  startedEditing = new Subject<number>();

  private ingredients : Ingredient[] = [];

  public getIngredient( ingredient : number ) {
    return this.ingredients[ingredient];
  }

  public getIngredients() : Ingredient[] {
    return this.ingredients;
  }

  public addIngredient( ingredient : Ingredient ) : void  {
    let ingredientExists = this.ingredients.find( (elem) => elem.name === ingredient.name );
    if( ingredientExists ){
      ingredientExists.amount += ingredient.amount;
    }else{
      this.ingredients.push( ingredient );
    }
    this.onNewIngredient.next( ingredient );
  }

  public updateIngredient( ingredientIndex : number, 
                           ingredient: Ingredient ) : void {
    this.ingredients[ingredientIndex] = ingredient; 
    this.onNewIngredient.next( ingredient );
  }

  public deleteIngredient( ingredientIndex : number ){
    this.ingredients.splice( ingredientIndex, 1 );
    this.onNewIngredient.next( null ); 
  }

}

