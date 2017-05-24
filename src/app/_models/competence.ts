import {CompetenceType} from './competencetype';
import {CompetenceCategory} from './competencecategory';
import {CompetenceStatus} from './competencestatus';
import {CompetenceUnitMapping} from './competenceunitmapping';

export class Competence {
    id: number;
    name: string;
    description: string;
    type: CompetenceType;
    status: CompetenceStatus;
    competenceUnitMapping: CompetenceUnitMapping[];
    
}