import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeEmptyComponent } from "./recipe-empty/recipe-empty.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { AuthGuard } from "src/app/auth/auth.guard";


const routes: Routes = [
  {
    path: '', 
    component : RecipesComponent, 
    canActivate: [ AuthGuard ], 
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
  } 
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}


