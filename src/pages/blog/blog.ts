import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, NavController } from 'ionic-angular';
import { BlogService } from '../../services/blog-service';
import { BlogDetailsPage } from '../blog-details/blog-details';

@Component({
    templateUrl: 'blog.html',
    providers: [BlogService]
})
export class BlogPage {
    constructor(private blogService: BlogService, private loadingCtrl: LoadingController, private nav: NavController, private _sanitizer: DomSanitizer) {
        this.getLatestBlogs();
    }
    private latestBlogs = [];

    getLatestBlogs() {
        // Instantiate the popup
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
                // Dismiss the popup
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
