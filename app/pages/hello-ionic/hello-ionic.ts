import {Component} from '@angular/core';
import { LoadingController } from 'ionic-angular';
import {BlogService} from '../../services/blog-service';
import {TimeAgo} from '../../directives/timeago';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  providers: [BlogService],
  directives: [TimeAgo]
})
export class HelloIonicPage {
  constructor(private blogService: BlogService, private loadingCtrl: LoadingController) {
  	this.getLatestBlogs();
  }
  private cardList=new Array(5);
  private latestBlogs = [];

  getLatestBlogs() {
  	let loadingPopup = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    // Show the popup
    loadingPopup.present();
        this.blogService.getFreshlyPressed().subscribe(
            data => {
                this.latestBlogs = data.posts; 
                console.log(data);
                loadingPopup.dismiss();
            },
            err => {
                console.log(err);
            }
        );
    } 

    trimContent(content){
    	return content.substring(0,content.indexOf('</p>'));
    }

    formatToDate(blogDate){
    	let x = new Date(blogDate);
    	return x;
    }
}
