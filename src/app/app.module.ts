import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, 
    CompetenceService, SearchService, RatingService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { KompetenzpflegeComponent } from './kompetenzpflege/kompetenzpflege.component';
import { ProfilComponent } from './profil/profil.component';
import { KompetenzCardsComponent } from './kompetenz-cards/kompetenz-cards.component';
import { KompetenzSideMenuComponent } from './kompetenz-side-menu/kompetenz-side-menu.component';
import { KompetenzKategoryComponent } from './kompetenz-kategory/kompetenz-kategory.component';
import { KompetenzComponent } from './kompetenz/kompetenz.component';
import { KompetenzSucheComponent } from './kompetenz-suche/kompetenz-suche.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
	imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        StarRatingModule
	],
	declarations: [
		AppComponent,
		AlertComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
		KompetenzpflegeComponent,
		ProfilComponent,
		KompetenzCardsComponent,
		KompetenzSideMenuComponent,
		KompetenzKategoryComponent,
		KompetenzComponent,
		KompetenzSucheComponent
	],
	providers: [
		AuthGuard,
		AlertService,
		AuthenticationService,
		UserService,
		CompetenceService,
		SearchService,
		RatingService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
