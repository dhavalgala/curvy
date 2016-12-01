import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
// import all the pages in the app
import {StatusBar} from 'ionic-native';
import {BlogPage} from './pages/blog/blog';
import {GalleryPage} from './pages/gallery/gallery';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {UserProfilePage} from './pages/user-profile/user-profile';
import {AboutPage} from './pages/about/about';
import {ContactPage} from './pages/contact/contact';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LoginPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any, icon: string, active: boolean }>;

  constructor(
    private platform: Platform,
    private menu: MenuController
    ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Blog', component: BlogPage, icon: "logo-wordpress", active: true },
      { title: 'Gallery', component: GalleryPage, icon: "photos", active: false },
      { title: 'About', component: AboutPage, icon: "information-circle", active: false },
      { title: 'Contact', component: ContactPage, icon: "contact", active: false },
      { title: 'Logout', component: LoginPage, icon: "exit", active: false }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
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

ionicBootstrap(MyApp);
