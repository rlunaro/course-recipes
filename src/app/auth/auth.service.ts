import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";


import { environment } from '../../environments/environment';
import { User } from "./user.model";


export interface AuthResponseData {
    kind?: string;
    idToken: string; 
    email: string;
    refreshToken: string; 
    expiresIn: string;
    localId: string;
    registered?: boolean;
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    singupUrl : string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;
    singinUrl : string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;

    user = new BehaviorSubject<User>( null );

    constructor( private http : HttpClient ) {

    }

    signup( email: string, password: string ) : Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>( this.singupUrl,
            {email: email, 
            password: password, 
            returnSecureToken : true} )
        .pipe( tap( responseData => this.handleAuthentication( responseData.email, 
                                            responseData.localId, 
                                            responseData.idToken, 
                                            responseData.expiresIn ) ) );
    }

    signin( email : string, password: string ) : Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>( this.singinUrl, 
            {email: email, 
                password: password, 
                returnSecureToken : true} )
        .pipe( tap( responseData => this.handleAuthentication( responseData.email, 
            responseData.localId, 
            responseData.idToken, 
            responseData.expiresIn ) ) );
    }

    private handleAuthentication( email: string, localId: string, token: string, expiresIn: string ){
        let tokenExpiration = new Date( new Date().getTime() + (1000 * parseInt( expiresIn ) ) ); 
        let userData = new User( email, 
            localId, 
            token, 
            tokenExpiration );
        this.user.next( userData );
        localStorage.setItem( 'userData', JSON.stringify( userData ) );
            
    }

    autoSignin(){
        let userData = localStorage.getItem( 'userData' ); 
        if( userData ){
            let userDataInfo = JSON.parse( userData ); 
            let userObj = new User( userDataInfo.email, 
                                 userDataInfo.id, 
                                 userDataInfo._token, 
                                 new Date( userDataInfo._tokenExpirationDate ) );
            if( userObj.token )
                this.user.next( userObj );
        }
    }

    logout(){
        this.user.next( null );
    }

}



