import { EventEmitter, 
        Injectable,
        Output } from "@angular/core";
import { Subject } from 'rxjs';

import { Ingredient } from "src/app/shared/ingredient.model";


@Injectable()
export class ShoppingListService {

  onNewIngredient = new Subject<Ingredient>();

  private ingredients : Ingredient[] = [];

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

}

