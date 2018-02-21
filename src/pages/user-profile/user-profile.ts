import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'user-profile.html'
})

export class UserProfilePage {

  userDetails = {
    firstName: "Marty",
    lastName: "McFly",
    username: "marty@mcfly.com",
    profilePic: "../assets/imgs/mcfly.jpg"
  }

  constructor(private nav: NavController) { }

  toBlog() {
    this.nav.pop();
  }
}