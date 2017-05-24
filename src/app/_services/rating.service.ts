import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { CompetenceRating } from '../_models/index';

@Injectable()
export class RatingService {
    
  private headers = new Headers( { 'Content-Type': 'application/json' } );
  private apiUrl = "http://localhost:8080/rating";

  constructor(private http: Http) { }
  
  update( rating: CompetenceRating ) {
      return this.http.put( this.apiUrl + "/" + rating.id, JSON.stringify(rating), this.jwt() )
          .map(( response: Response ) => response.json() );
  }
  
  create( rating: CompetenceRating ) {
      return this.http.post( this.apiUrl, JSON.stringify(rating), this.jwt() )
          .map(( response: Response ) => response.json() );
  }
  
  private jwt() {
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
