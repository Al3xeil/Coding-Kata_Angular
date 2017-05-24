import {Competence} from './competence';
import {CompetenceUnit} from './competenceUnit';

export class CompetenceUnitMapping {
    id: number;
    name: string;
    competenceUnit: CompetenceUnit;
    competence: Competence;
}