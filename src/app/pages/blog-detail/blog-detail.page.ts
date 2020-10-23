import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailPage implements OnInit {

  private blogId: any;
  blogDetail: any = {};

  constructor(private route: ActivatedRoute, private blogService: BlogService,
              private loadingController: LoadingController, private domSanitizer: DomSanitizer) {
    this.route.params.subscribe((params) => {
      if (params && params.blogId) {
        this.blogId = params.blogId;
      }
    });
  }

  async ngOnInit() {
    const loadingPopup = await this.loadingController.create({
      message: 'Please Wait...',
      spinner: 'dots',
      duration: 10000,
      cssClass: 'custom-spinner'
    });

    // Show the popup
    await loadingPopup.present();
    this.blogService.getBlogDetail(this.blogId).subscribe(
      data => {
        this.blogDetail = data;
        this.blogDetail.title = this.domSanitizer.bypassSecurityTrustHtml(this.blogDetail.title);
        this.blogDetail.content = this.domSanitizer.bypassSecurityTrustHtml(
          this.blogDetail.content.split('style="width: 1230px"').join(''));
        loadingPopup.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }

}
