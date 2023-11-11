import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientsSub : Subscription;

  constructor( private shoppingListService : ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredientsSub = 
    this.shoppingListService.onNewIngredient.subscribe( (ingredient : Ingredient) => {

    } );
  }

  ngOnDestroy(){
    this.ingredientsSub.unsubscribe();
  }

  public getIngredients() : Ingredient[] {
    return this.shoppingListService.getIngredients();
  }

  public onEditItem( ingredientId : number ) {
    this.shoppingListService.startedEditing.next( ingredientId );
  }

}


