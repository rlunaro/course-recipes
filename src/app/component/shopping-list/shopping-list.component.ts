import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients = [
    new Ingredient( 'apples', 5 ), 
    new Ingredient( 'Tomatoes', 6 )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


