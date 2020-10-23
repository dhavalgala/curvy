import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  latestBlogs = [];

  constructor(private blogService: BlogService, private domSanitizer: DomSanitizer,
              private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.getLatestBlogs();
  }


  async getLatestBlogs() {
    // Instantiate the popup
    const loadingPopup = await this.loadingController.create({
      message: 'Please Wait...',
      spinner: 'dots',
      duration: 10000,
      cssClass: 'custom-spinner'
    });

    // Show the popup
    await loadingPopup.present();

    this.blogService.getFreshlyPressed().subscribe(
      async (data) => {
        this.latestBlogs = data.posts;
        for (const blog of this.latestBlogs) {
          blog.title = this.domSanitizer.bypassSecurityTrustHtml(blog.title);
        }
        // Dismiss the popup
        await loadingPopup.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }

  trimContent(content: string) {
    return content.substring(0, content.indexOf('</p>'));
  }

  formatToDate(blogDate: string) {
    const x = new Date(blogDate);
    return x;
  }

  toDetail(blog: any) {
    this.router.navigateByUrl(`/blog-detail/${blog.ID}`);
  }

}
