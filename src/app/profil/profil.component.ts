import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { Router } from '@angular/router';

import { UserService } from '../_services/index';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    
  private currentUser: User;
  private returnUrl = '/profile';

  constructor(private router: Router,
              private userService: UserService,) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }
  
  private onSubmit(){
      this.userService.update(this.currentUser)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
              });;
  }

}
