import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BlogPage } from '../pages/blog/blog';
import { BlogDetailsPage } from '../pages/blog-details/blog-details';
import { GalleryPage } from '../pages/gallery/gallery';
import { GalleryDetailPage, ModalsContentPage } from '../pages/gallery-detail/gallery-detail';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { BlogService } from '../services/blog-service';

import { TimeAgo } from '../directives/timeago';

@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    BlogDetailsPage,
    GalleryPage,
    GalleryDetailPage,
    ModalsContentPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    UserProfilePage,
    AboutPage,
    ContactPage,
    TimeAgo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    BlogDetailsPage,
    GalleryPage,
    GalleryDetailPage,
    ModalsContentPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    UserProfilePage,
    AboutPage,
    ContactPage,
    TimeAgo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BlogService
  ]
})
export class AppModule { }
