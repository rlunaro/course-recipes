import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onAddIngredient( ingredient ){
    this.ingredients.push( ingredient );
  }

}


