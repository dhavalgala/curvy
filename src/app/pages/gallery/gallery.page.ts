import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {

  private galleriesArr: any;
  galleries = [];

  constructor(private router: Router) {
    this.galleriesArr = [{
      id: 1,
      name: 'Food',
      image: '../assets/imgs/food/pizza.jpg'
    }, {
      id: 2,
      name: 'Nature',
      image: '../assets/imgs/nature/nature1.jpg'
    }, {
      id: 3,
      name: 'Travel',
      image: '../assets/imgs/travel/travel1.jpg'
    }, {
      id: 4,
      name: 'Fashion',
      image: '../assets/imgs/fashion/fashion3.jpg'
    }];

    while (this.galleriesArr.length) {
      this.galleries.push(this.galleriesArr.splice(0, 2));
    }
  }

  toDetail(id: any) {
    this.router.navigateByUrl(`/gallery-detail/${id}`);
  }

}
