import { Component } from "@angular/core";


@Component({
  selector: 'app-auth', 
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  public isLoginMode : boolean = true;
  public email : string; 
  public password: string; 

  switchMode(){
    this.isLoginMode = !this.isLoginMode;
    console.log(this.email); 
    console.log( this.password);
  }


}


