import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { ShoppingItemEditComponent } from './component/shopping-item-edit/shopping-item-edit.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Header, 
    Footer, 
    IngredientComponent, 
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
