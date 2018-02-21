import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'forgot-password.html'
})

export class ForgotPasswordPage {

  constructor(private nav: NavController, private alertCtrl: AlertController) {
    
  }

  toLogIn(){
  	this.nav.setRoot(LoginPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'We have sent an email.',
      subTitle: 'Follow the instructions in the email to reset your password.',
      buttons: [{
	      	text: 'Ok', 
	      	cssClass: 'secondary-color',
	      	handler: () => {
	          this.toLogIn();
	        }
  		}]
    });
    alert.present();
  }

}