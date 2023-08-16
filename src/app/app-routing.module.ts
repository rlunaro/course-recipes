import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { RecipeEmptyComponent } from './component/recipes/recipe-empty/recipe-empty.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { RecipesResolverService } from './component/recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path : '', 
    redirectTo : 'recipes', 
    pathMatch : 'full'
  },
  {
    path: 'auth',
    component: AuthComponent
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
        path : 'new', 
        component : RecipeEditComponent
      },
      {
        path : ':id', 
        component : RecipeDetailComponent,
        resolve : [RecipesResolverService]
      }, 
      {
        path : ':id/edit', 
        component : RecipeEditComponent,
        resolve : [RecipesResolverService]
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
