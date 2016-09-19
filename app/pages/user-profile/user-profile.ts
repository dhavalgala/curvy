import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/user-profile/user-profile.html'
})

export class UserProfilePage {

  constructor(private nav: NavController) {
    
  }

  private userDetails = {
  	firstName: "Marty",
  	lastName: "McFly",
  	username: "marty@mcfly.com",
  	profilePic: "img/mcfly.jpg"
  }

  toBlog(){
  	this.nav.pop();
  }
}