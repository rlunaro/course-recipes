import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
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
    path : 'shopping-list', 
    component : ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
