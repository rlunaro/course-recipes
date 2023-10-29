import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth', 
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

  public isLoginMode : boolean = true;
  public isLoading : boolean = false;
  public error : string = null;
  public email : string; 
  public password: string; 
  private closeSub : Subscription = null;
  @ViewChild( PlaceholderDirective, {static: false} ) alertHost : PlaceholderDirective;

  private errorMsgs = {
        EMAIL_EXISTS: { en: 'The email address is already in use by another account' },
        OPERATION_NOT_ALLOWED: { en: 'Password sign-in is disabled for this project' },
        TOO_MANY_ATTEMPTS_TRY_LATER: { en: 'We have blocked all requests from this device due to unusual activity. Try again later' },
        EMAIL_NOT_FOUND: { en: 'There is no user record corresponding to this identifier. The user may have been deleted' },
        INVALID_PASSWORD: { en: 'The password is invalid or the user does not have a password' },
        USER_DISABLED: { en: 'The user account has been disabled by an administrator' }
        };

  constructor( private auth : AuthService, 
               private router : Router, 
               private componentFactoryResolver : ComponentFactoryResolver ) {}

  public ngOnDestroy() {
    if( this.closeSub ){
      this.closeSub.unsubscribe();
    }
  }

  switchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  omitError() {
    this.error = null;
  }

  onSubmit( formValue : NgForm ) {
    let authObs : Observable<AuthResponseData>;
    this.isLoading = true;
    this.error = null;
    if( this.isLoginMode ) {
      authObs = this.auth.signin( formValue.value.email, 
                        formValue.value.password );
    }else{
      authObs = this.auth.signup( formValue.value.email, 
                        formValue.value.password );
    }

    authObs.subscribe( { 
      next : (response: AuthResponseData ) => {
        console.log( response );
        this.isLoading = false;
        this.router.navigate( ['/recipes'] );
      }, 
      error:  (error) => {
        let errorKey = error?.error?.error?.message;
        if( errorKey ){
          if( errorKey in this.errorMsgs )
            this.error = this.errorMsgs[errorKey]['en'];
          else
            this.error = `An error with code ${errorKey} was produced`;
        }else{
          console.error( error ); 
          this.error = 'Unknown error';
        }
        this.showErrorAlert();
        this.isLoading = false;
      }
    });

    formValue.reset();
  }

  private showErrorAlert() {
    let hostViewContainer = this.alertHost.viewContainerRef;
    hostViewContainer.clear();
    let alertRef = hostViewContainer.createComponent( AlertComponent );
    alertRef.instance.message = this.error;
    this.closeSub = alertRef.instance.close.subscribe( () => {
      this.closeSub.unsubscribe();
      hostViewContainer.clear();
    });
  }

}


