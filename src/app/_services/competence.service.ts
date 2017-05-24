import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

import { User, Competence } from '../_models/index';

@Injectable()
export class CompetenceService {

    private apiUrl = "http://localhost:8080/competence";
    private headers = new Headers( { 'Content-Type': 'application/json' } );
    private newProjectSubject = new Subject<any>();
    private listCompetencesForTable : Competence[] = [];
    private listCompetencesForTableSubject = new Subject<any>();

    constructor( private http: Http ) { }

    getAll() {
        return this.http.get( this.apiUrl, this.jwtWithoutContent() )
            .map(( response: Response ) => response.json() );
    }
    
    getAllTypes() {
        return this.http.get( this.apiUrl + "/type", this.jwtWithoutContent() )
            .map(( response: Response ) => response.json()._embedded.competenceTypeDTOList );
    }

    getById( id: number ) {
        return this.http.get( this.apiUrl + "/" + id, this.jwt() )
            .map(( response: Response ) => response.json() );
    }

    create( competence: Competence ) {
        return this.http.post( this.apiUrl, JSON.stringify( competence ), this.jwt() )
            .map(( response: Response ) => response.json() );
    }

    update( competence: Competence ) {
        return this.http.put( this.apiUrl + "/" + competence.id, JSON.stringify(competence), this.jwt() )
            .map(( response: Response ) => response.json() );
    }

    delete( id: number ) {
        return this.http.delete( this.apiUrl + "/" + id, this.jwt() )
            .map(( response: Response ) => response.json() );
    }

    getByTypeId( id: number ) {
        return this.http.get( this.apiUrl + "/type/" + id, this.jwtWithoutContent() )
            .map(( response: Response ) => response.json()._embedded );
    }
    
    updateListCompetencesForTable(list : Competence[]){
            this.listCompetencesForTable = list;
            this.listCompetencesForTableSubject.next(this.listCompetencesForTable);
    }
    
    getListForTableObservable(): Observable<any> {
        return this.listCompetencesForTableSubject.asObservable();
    }
    
    getAllCompetenceStatus() {
        return this.http.get( this.apiUrl + "/status" , this.jwtWithoutContent() )
            .map(( response: Response ) => response.json()._embedded.competenceStatusDTOList );
    }
    
    getAllCompetenceCategory() {
        return this.http.get( this.apiUrl + "/category" , this.jwtWithoutContent() )
            .map(( response: Response ) => response.json()._embedded.competenceCategoryDTOList );
    }

    // private helper methods

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
