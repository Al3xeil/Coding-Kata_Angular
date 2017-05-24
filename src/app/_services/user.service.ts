import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { User } from '../_models/index';

@Injectable()
export class UserService {

    private apiUrl = "http://localhost:8080";
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    private newProjectSubject = new Subject<any>();

    constructor( private http: Http ) { }

    getAll() {
        const url = `${this.apiUrl}/login`;
        return this.http.get( '/api/users', this.jwtWithoutContent() ).map(( response: Response ) => response.json() );
    }

    getById( id: number ) {
        return this.http.get( '/api/users/' + id, this.jwtWithoutContent() ).map(( response: Response ) => response.json() );
    }

    create( user: User ) {
        const url = this.apiUrl + '/registration';
        return this.http.post( url, JSON.stringify( user ), this.jwtWithoutContent() );
    }

    update( user: User ) {
        return this.http.put( this.apiUrl + '/user/' + user.id, JSON.stringify(user), this.jwtWithContent() ).map(( response: Response ) =>  {
            
        });
    }

    delete( id: number ) {
        return this.http.delete(this.apiUrl + '/user/' + id, this.jwtWithoutContent() ).map(( response: Response ) => response.json() );
    }

    // private helper methods

    
    private jwtWithoutContent() {
        if ( localStorage.getItem( 'currentUser' ) ) {
            let headers = new Headers();
            headers.append( "Authorization", "Basic " + btoa( JSON.parse(localStorage.getItem( 'currentUser' )).username
                + ":" + localStorage.getItem( 'password' ) ) );
            return new RequestOptions( { headers: headers } );
        } else {
            return new RequestOptions( { headers: this.headers } );
        }
    }
    
    private jwtWithContent() {
        if ( localStorage.getItem( 'currentUser' ) ) {
            let headers = new Headers();
            headers.append( "Authorization", "Basic " + btoa( JSON.parse(localStorage.getItem( 'currentUser' )).username
                + ":" + localStorage.getItem( 'password' ) ) );
            headers.append( 'Content-Type', 'application/json' );
            return new RequestOptions( { headers: headers } );
        } else {
            return new RequestOptions( { headers: this.headers } );
        }
    }
}