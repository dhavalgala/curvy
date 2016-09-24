import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {BlogService} from '../../services/blog-service';


@Component({
  templateUrl: 'build/pages/blog-details/blog-details.html',
  providers: [BlogService],
})
export class BlogDetailsPage {
  private blogDetail = {};

  constructor(private nav: NavController, navParams: NavParams, private blogService: BlogService, private loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    let blogId = navParams.get('blogId');
    this.getBlogDetail(blogId);
  }

  getBlogDetail(blogId) {
  	let loadingPopup = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    // Show the popup
    loadingPopup.present();
    this.blogService.getBlogDetail(blogId).subscribe(
            data => {
                this.blogDetail = data; 
                console.log(data);
                loadingPopup.dismiss();
            },
            err => {
                console.log(err);
            }
        );
  	}
}
