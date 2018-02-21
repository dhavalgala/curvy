import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GalleryDetailPage } from '../gallery-detail/gallery-detail';


@Component({
  templateUrl: 'gallery.html'
})
export class GalleryPage {

  private galleries = [];
  private galleriesArr: any;

  constructor(private nav: NavController, navParams: NavParams) {
    this.galleriesArr = [{
      id: 1,
      name: "Food",
      image: "../assets/imgs/food/pizza.jpg"
    }, {
      id: 2,
      name: "Nature",
      image: "../assets/imgs/nature/nature1.jpg"
    }, {
      id: 3,
      name: "Travel",
      image: "../assets/imgs/travel/travel1.jpg"
    }, {
      id: 4,
      name: "Fashion",
      image: "../assets/imgs/fashion/fashion3.jpg"
    }];

    while (this.galleriesArr.length) {
      this.galleries.push(this.galleriesArr.splice(0, 2));
    }
  }

  toDetail(id) {
    this.nav.push(GalleryDetailPage, {
      galleryId: id
    });
  }
}
