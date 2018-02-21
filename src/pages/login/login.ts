import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {BlogPage} from '../blog/blog';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(private nav: NavController) {
    
  }

  toSignUp(){
  	this.nav.setRoot(SignupPage);
  }

  toBlog(){
  	this.nav.setRoot(BlogPage);
  }

  toForgotPassword(){
  	this.nav.setRoot(ForgotPasswordPage);
  }
}