import { EventEmitter, 
        Injectable,
        Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";


@Injectable()
export class ShoppingListService {

  @Output() onNewIngredient = new EventEmitter<Ingredient>();

  private ingredients : Ingredient[] = [];

  public getIngredients() : Ingredient[] {
    return this.ingredients;
  }

  public addIngredient( ingredient : Ingredient ) : void  {
    this.ingredients.push( ingredient );
    this.onNewIngredient.emit( ingredient );
  }

}

