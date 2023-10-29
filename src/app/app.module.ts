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
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { DrowpdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './component/shopping-list/shopping-list.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './component/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    Header, 
    Footer, 
    LoadingSpinnerComponent,
    AuthComponent,
    IngredientComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent, 
    DrowpdownDirective, 
    AlertComponent, 
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    AppRoutingModule, 
    RecipesModule
  ],
  providers: [ShoppingListService,
            {provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
