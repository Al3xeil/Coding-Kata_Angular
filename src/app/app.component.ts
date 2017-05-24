import { Component } from '@angular/core';
import { User } from './_models/index';
declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private LOGO = require("../images/Logo_OC_RGB.jpg");
    currentUser: User;
    
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}
