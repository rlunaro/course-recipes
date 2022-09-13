import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipeEmptyComponent } from './component/recipes/recipe-empty/recipe-empty.component';


import { RecipesComponent } from './component/recipes/recipes.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path : '', 
    redirectTo : 'recipes', 
    pathMatch : 'full'
  }, 
  {
    path: 'recipes', 
    component : RecipesComponent, 
    children: [
      {
        path : '', 
        pathMatch : 'full', 
        component : RecipeEmptyComponent
      },
      {
        path : ':id', 
        component : RecipeDetailComponent
      }
    ]
  }, 
  {
    path : 'shopping-list', 
    component : ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
