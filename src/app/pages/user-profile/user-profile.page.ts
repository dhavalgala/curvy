import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {

  backTo: string;
  userDetails = {
    firstName: 'Marty',
    lastName: 'McFly',
    username: 'marty@mcfly.com',
    profilePic: '../../assets/imgs/mcfly.jpg'
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      if (params && params.backTo) {
        this.backTo = params.backTo;
      }
    });
  }

  goBack() {
    this.router.navigate([this.backTo]);
  }
}
