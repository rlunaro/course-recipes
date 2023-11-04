import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { ShoppingListService } from './component/shopping-list/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesModule } from './component/recipes/recipes.module';
import { ShoppingListModule } from './component/shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    Header, 
    Footer, 
    IngredientComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    ShoppingListModule,
    RecipesModule,
    SharedModule,
    AuthModule
  ],
  providers: [ShoppingListService,
            {provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
