import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchService, CompetenceService } from '../_services/index';
import { Competence } from '../_models/index';

@Component({
  selector: 'app-kompetenz-suche',
  templateUrl: './kompetenz-suche.component.html',
  styleUrls: ['./kompetenz-suche.component.css']
})
export class KompetenzSucheComponent implements OnInit {
    
    private competences: Observable<Competence[]>;
    private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService,
              private competenceService: CompetenceService,
              private router: Router) {
  }
  
  search(term: string): void {
      this.searchTerms.next(term);
    }

  ngOnInit() {
      this.competences = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.doSearchAndUpdateTable(term)
        // or the observable of empty competences if there was no search term
        : Observable.of<Competence[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Competence[]>([]);
      });
  }
  
  private doSearchAndUpdateTable(term: string): Observable<Competence[]>{
      var competenceResult: Observable<Competence[]> ;
      competenceResult = this.searchService.search(term);
      competenceResult.subscribe(data => {this.competenceService.updateListCompetencesForTable(data)});
      return competenceResult;
  }
  
  gotoDetail(competence: Competence): void {
      let link = ['/competence', competence.id];
      this.router.navigate(link);
    }

}
