import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id : number = null;
  editMode = false; // are we editing or creating a new recipe?
  recipeForm: FormGroup;

  constructor( private route : ActivatedRoute,
              private router : Router, 
              private recipeService : RecipeService ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params : Params) => {
      this.id = parseInt( params.id );
      this.editMode = params['id'] != null;
      this.initForm();
    } );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = ''; 
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode) {
      let recipe = this.recipeService.getRecipe( this.id );
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      for( let ingredient of recipe.ingredients ){
        recipeIngredients.push(
          new FormGroup({
            'name' : new FormControl( ingredient.name, Validators.required ), 
            'amount' : new FormControl( ingredient.amount, 
                                            [Validators.required,
                                             Validators.pattern("^[1-9]+[0-9]*$")] )
          })
        );
      }
    }
    this.recipeForm = new FormGroup({
      "name" : new FormControl( recipeName, Validators.required ), 
      "imagePath" : new FormControl( recipeImagePath, Validators.required ), 
      "description" : new FormControl( recipeDescription, Validators.required ),
      "ingredients" : recipeIngredients
    });
  }

  onSubmit() {
    if( this.editMode ) {
      let recipe = new Recipe(
        this.id, 
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients'] );
     this.recipeService.updateRecipe( recipe ); 
    }
    else
      this.recipeService.addRecipe( this.recipeForm.value );
    this.router.navigate( ['../', {relativeTo: this.route}] );
  }

  onAddIngredient() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl( null, Validators.required ), 
        'amount' : new FormControl( null, [Validators.required,
          Validators.pattern("^[1-9]+[0-9]*$")])
      })
    );
  }

  onDeleteIngredient( ingredientNumber : number ) {
    (<FormArray> this.recipeForm.get("ingredients")).removeAt( ingredientNumber );
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onCancel() {
    this.router.navigate( ['../', {relativeTo: this.route}] );
  }

}
