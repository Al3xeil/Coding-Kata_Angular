import {Competence} from './competence';
import {User} from './user';

export class CompetenceRating {
    id: number;
    name: string;
    userID: number;
    competence: Competence;
    valueRating: number;
}