import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {BlogPage} from '../blog/blog';

@Component({
  templateUrl: 'signup.html'
})

export class SignupPage {

  constructor(private nav: NavController) {
    
  }

  toLogIn(){
  	this.nav.setRoot(LoginPage);
  }

  toBlog(){
  	this.nav.setRoot(BlogPage);
  }
}