import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
    
    private apiUrl = "http://localhost:8080";
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }
    
    createAuthorizationHeader(headers: Headers, username: String, password: String) {
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password)); 
    }

    login(username: string, password: string) {
        const url = `${this.apiUrl}/login`;
        let options = new RequestOptions({
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            })
        });
        return this.http.post(url, {username: username}, options)
            .map((response: Response) => {
                    localStorage.setItem('currentUser', response.text());
                    localStorage.setItem('password', password);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}