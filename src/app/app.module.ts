import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './component/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { DrowpdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './component/shopping-list/shopping-list.service';
import { RecipeEmptyComponent } from './component/recipes/recipe-empty/recipe-empty.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './component/recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    Header, 
    Footer, 
    LoadingSpinnerComponent,
    AuthComponent,
    IngredientComponent, 
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent, 
    DrowpdownDirective, 
    RecipeEmptyComponent, 
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService,
              RecipeService,
            {provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
