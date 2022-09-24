import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id : number = null;
  editMode = false; // are we editing or creating a new recipe?

  constructor( private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : Params) => {
      this.id = parseInt( params.id );
      this.editMode = params['id'] != null;
    } );
  }

}
