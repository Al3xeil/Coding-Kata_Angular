import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Competence } from '../_models/index';

@Injectable()
export class SearchService {
    
    private apiUrl = "http://localhost:8080/competence/search/";
    private headers = new Headers( { 'Content-Type': 'application/json' } );

  constructor(private http: Http) { }
  
  search(term: string) : Observable<Competence[]>{
      return this.http
                 .get(this.apiUrl + term, this.jwtWithoutContent())
                 .map(response => response.json() as Competence[]);
    }
  
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

}
