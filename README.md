- Install nodejs (npm comes with it)
- Install cli -> npm install -g @angular/cli
- in the folder -> npm install (dl all node_modules)
- ng serve


Kata Übungen:
- home Seite mit AuthGuard schützen
- Register Knopf neben dem Login Knopf hinzufügen -> routerLink auf "/register"
- In register.component.ts -> in der Funktion "register" -> userService.create aufrufen (nicht subscribe vergessen)
- in dem app.routing Datei -> path: 'kompetenzpflege' hinzufügen
- Komponenten "Suche" und "Sidemenu" hinzufügen -> Als Child von "kompetenzpflege" in dem Router
- Suche testen -> etwas fehtl -> Debug nötig
- Wenn man auf einem Knopf in dem Sidemenu click sollte sich die Tabelle in der Mitte aktualisieren
	-> Gleiche System wie mit der Suche

- routing auf kompetenz/:id -> KompetenzComponent
- Typ-Combobox auffüllen und richtig selektieren
- Rating : 
<star-rating-comp [starType]="'svg'" [hoverEnabled]="true" [rating]="" (onClick)="onClick($event)"
					[size]="'large'">
</star-rating-comp> 

-> onClick Funktion erstellen -> sollte den User mit dem geänderten Rating speichern (put)
