import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


import { environment } from '../../environments/environment';
import { Observable } from "rxjs";


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

    constructor( private http : HttpClient ) {

    }

    signup( email: string, password: string ) : Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>( this.singupUrl,
            {email: email, 
            password: password, 
            returnSecureToken : true} );
    }

    signin( email : string, password: string ) : Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>( this.singinUrl, 
            {email: email, 
                password: password, 
                returnSecureToken : true} );
    }

}



