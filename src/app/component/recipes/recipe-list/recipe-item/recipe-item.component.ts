import { Component, Input } from '@angular/core';

@Component({
  selector : 'recipe-item',
  templateUrl : './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input() name : string;
  @Input() description : string;
  @Input() imagePath : string; 

  constructor( ) { }
}