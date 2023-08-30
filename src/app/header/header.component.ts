import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../component/shared/data-storage.service';
import { Subscription } from 'rxjs';


import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css' ]
})
export class Header implements OnInit, OnDestroy {

  public collapsed : boolean = false;
  public isAuthenticated : boolean = false;
  userSubscription : Subscription = null;

  constructor( private dataStorage : DataStorageService,
               private authService : AuthService,
               private router : Router ) {}

  ngOnInit() : void {
    this.userSubscription = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void  {
    if( this.userSubscription )
      this.userSubscription.unsubscribe();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  storeRecipes(){
    this.dataStorage.storeRecipes()
      .subscribe();
  }

  fetchRecipes(){
    this.dataStorage.fetchRecipes();
  }

}
