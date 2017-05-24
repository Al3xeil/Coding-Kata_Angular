import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { CompetenceType } from '../_models/index';
import { Competence } from '../_models/index';
import { CompetenceService } from '../_services/index';

@Component({
  selector: 'app-kompetenz-side-menu',
  templateUrl: './kompetenz-side-menu.component.html',
  styleUrls: ['./kompetenz-side-menu.component.css']
})
export class KompetenzSideMenuComponent implements OnInit {

competenceTypes: CompetenceType[] = [];
competenceListMapForType: Map<string, Competence[]> = new Map<string, Competence[]>();
typeMapIdName: Map<string, number> = new Map<string, number>();
typKeysName: string[] = [];

constructor(private router: Router, private route: ActivatedRoute, 
            private competenceService: CompetenceService) { }

    ngOnInit() {
        this.loadAllTypes();
    }
    
    private getKeys(map: Map<string, Competence[]>): string[] {
        let keyList: string[] = [];
    
        map.forEach((competence_notUsed, key, map_notUsed) => {
            keyList.push(key);
        });
        return keyList;
    }
    
    private navigate(path) {
        this.router.navigate(['./type', path], 
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
    
    private addKey(competencesReturned: any, competenceType: CompetenceType) {
        this.typeMapIdName.set(competenceType.name, competenceType.id);
        if(competencesReturned){
            this.competenceListMapForType.set(competenceType.name, competencesReturned.competenceDTOList);
        } else {
            this.competenceListMapForType.set(competenceType.name, null);
        }
        this.typKeysName.push(competenceType.name);
    }

}
