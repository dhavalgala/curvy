import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BlogPage } from '../pages/blog/blog';
import { GalleryPage } from '../pages/gallery/gallery';
import { LoginPage } from '../pages/login/login';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any, icon: string, active: boolean }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    // set our app's pages
    this.pages = [
      { title: 'Blog', component: BlogPage, icon: "logo-wordpress", active: true },
      { title: 'Gallery', component: GalleryPage, icon: "photos", active: false },
      { title: 'About', component: AboutPage, icon: "information-circle", active: false },
      { title: 'Contact', component: ContactPage, icon: "contact", active: false },
      { title: 'Logout', component: LoginPage, icon: "exit", active: false }
    ];
  }

  openPage(page) {

    for (let i = 0; i < this.pages.length; i++) {
      if (page.title == this.pages[i].title) {
        this.pages[i].active = true;
      } else {
        this.pages[i].active = false;
      }
    }
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  toProfile() {
    this.menu.close();
    this.nav.push(UserProfilePage);
  }

}

