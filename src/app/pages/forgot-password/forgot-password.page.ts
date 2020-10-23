import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  toLogIn() {
    this.router.navigate(['login']);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'We have sent an email.',
      subHeader: 'Follow the instructions in the email to reset your password.',
      buttons: [{
        text: 'Ok',
        cssClass: 'secondary-color',
        handler: () => {
          this.toLogIn();
        }
      }]
    });
    await alert.present();
  }

}
