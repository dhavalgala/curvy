import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Blog',
      url: '/blog',
      icon: 'logo-wordpress'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'images'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'person-circle'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setActiveItem();
      }
    });
  }

  async setActiveItem() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    await this.menuController.close();
  }

  toProfile() {
    const path = window.location.pathname.split('/')[1];
    this.router.navigateByUrl(`/profile/${path}`);
  }
}
