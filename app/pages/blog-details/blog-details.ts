import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { DomSanitizationService } from '@angular/platform-browser';
import { BlogService } from '../../services/blog-service';


@Component({
  templateUrl: 'build/pages/blog-details/blog-details.html',
  providers: [BlogService],
})
export class BlogDetailsPage {
  private blogDetail = {};

  constructor(private nav: NavController, navParams: NavParams, private blogService: BlogService, private loadingCtrl: LoadingController, private _sanitizer: DomSanitizationService) {
    // If we navigated to this page, we will have an item available as a nav param
    let blogId = navParams.get('blogId');
    this.getBlogDetail(blogId);
  }

  getBlogDetail(blogId) {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Please Wait...',
      duration: 10000
    });

    // Show the popup
    loadingPopup.present();
    this.blogService.getBlogDetail(blogId).subscribe(
      data => {
        this.blogDetail = data;
        this.blogDetail["title"] = this._sanitizer.bypassSecurityTrustHtml(this.blogDetail["title"]);
        this.blogDetail["content"] = this._sanitizer.bypassSecurityTrustHtml(this.blogDetail["content"].split('style="width: 1230px"').join(''));
        console.log(data);
        loadingPopup.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }
}
