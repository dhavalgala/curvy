import { Component } from '@angular/core';
import { LoadingController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogService } from '../../services/blog-service';


@Component({
  templateUrl: 'blog-details.html',
  providers: [BlogService],
})
export class BlogDetailsPage {
  private blogDetail = {};

  constructor(navParams: NavParams, private blogService: BlogService, private loadingCtrl: LoadingController, private _sanitizer: DomSanitizer) {
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
        loadingPopup.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }
}
