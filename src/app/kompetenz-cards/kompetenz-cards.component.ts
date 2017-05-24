import { Component, OnInit, PipeTransform, Pipe  } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { CompetenceType } from '../_models/index';
import { Competence } from '../_models/index';
import { CompetenceService } from '../_services/index';

@Component({
  selector: 'app-kompetenz-cards',
  templateUrl: './kompetenz-cards.component.html',
  styleUrls: ['./kompetenz-cards.component.css']
})
export class KompetenzCardsComponent implements OnInit {
    
  competenceTypes: CompetenceType[] = [];
  competenceListMapForType: Map<string, Competence[]> = new Map<string, Competence[]>();
  typKeys: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute, 
              private competenceService: CompetenceService) { }

  ngOnInit() {
      this.loadAllTypes();
  }

  getKeys(map: Map<string, Competence[]>): string[] {
      let keyList: string[] = [];

      map.forEach((competence_notUsed, key, map_notUsed) => {
          keyList.push(key);
      });
      return keyList;
  }

  navigate(path) {
      this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
              {relativeTo: this.route});
  }
  
  private loadAllTypes() {
      this.competenceService.getAllTypes()
          .subscribe(competenceTypes => { this.loadMapCompetences(competenceTypes); });
  }
  
  private loadMapCompetences(competenceTypes: any[]) {
      for(let competenceType of competenceTypes){
          this.competenceService.getByTypeId(competenceType.competenceType.id)
              .subscribe(competencesReturned => { this.addKey(competencesReturned, competenceType.competenceType) });
      }
      this.getKeys(this.competenceListMapForType);
  }
  
  addKey(competencesReturned: any, competenceType: CompetenceType) {
      if(competencesReturned){
          this.competenceListMapForType.set(competenceType.name, competencesReturned.competenceDTOList);
      } else {
          this.competenceListMapForType.set(competenceType.name, null);
      }
      this.typKeys.push(competenceType.name);
  }

}
