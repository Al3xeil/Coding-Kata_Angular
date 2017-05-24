import { CompetenceRating } from './competencerating';

export class User {
    id: number;
    username: string;
    password: string;
    passwordconFirm: string;
    firstName: string;
    lastName: string;
    adresse: string;
    phone: string;
    birthday: Date;
    weight: number;
    competenceRating: CompetenceRating[];
}