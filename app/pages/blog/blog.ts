import { Component } from '@angular/core';
import { DomSanitizationService, SafeHtml } from '@angular/platform-browser';
import { LoadingController, NavController } from 'ionic-angular';
import { BlogService } from '../../services/blog-service';
import { TimeAgo } from '../../directives/timeago';
import { BlogDetailsPage } from '../blog-details/blog-details';

@Component({
    templateUrl: 'build/pages/blog/blog.html',
    providers: [BlogService],
    directives: [TimeAgo]
})
export class BlogPage {
    constructor(private blogService: BlogService, private loadingCtrl: LoadingController, private nav: NavController, private _sanitizer: DomSanitizationService) {
        this.getLatestBlogs();
    }
    private cardList = new Array(5);
    private latestBlogs = [];

    getLatestBlogs() {
        let loadingPopup = this.loadingCtrl.create({
            content: 'Please Wait...',
            duration: 10000
        });

        // Show the popup
        loadingPopup.present();
        this.blogService.getFreshlyPressed().subscribe(
            data => {
                this.latestBlogs = data.posts;
                for (let i = 0; i < this.latestBlogs.length; i++) {
                    this.latestBlogs[i].title = this._sanitizer.bypassSecurityTrustHtml(this.latestBlogs[i].title);
                }
                console.log(data);
                loadingPopup.dismiss();
            },
            err => {
                console.log(err);
            }
        );
    }

    trimContent(content) {
        return content.substring(0, content.indexOf('</p>'));
    }

    formatToDate(blogDate) {
        let x = new Date(blogDate);
        return x;
    }

    toDetail(blog) {
        this.nav.push(BlogDetailsPage, {
            blogId: blog.ID
        });
    }
}
