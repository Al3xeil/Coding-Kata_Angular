import { Component, OnInit, Input} from '@angular/core';
import { Competence } from '../_models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetenceService } from '../_services/index';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-kompetenz-kategory',
  templateUrl: './kompetenz-kategory.component.html',
  styleUrls: ['./kompetenz-kategory.component.css']
})
export class KompetenzKategoryComponent implements OnInit {
    
  id: number;
  private sub: any;
  competences : Competence[];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private competenceService: CompetenceService,
              private router: Router) {
      this.subscription = this.competenceService.getListForTableObservable()
          .subscribe(message => {this.competences = message;})
  }

  ngOnInit() {
  }
  
  private loadCompetences() {
      this.competenceService.getByTypeId(this.id)
          .subscribe(competences => {
              if(competences) {
                  this.competences = competences.competenceDTOList;
              } else {
                  this.competences = null;
              }
          });
  }
  
  gotoDetail(competence: Competence): void {
      let link = ['./kompetenz', competence.id];
      this.navigate(link);
    }
  navigate(path) {
      this.router.navigate(path);
  }

}
