import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/gallery-detail/gallery-detail.html'
})
export class GalleryDetailPage {
  private blogDetail = {};

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    let blogId = navParams.get('galleryId');
    this.getGalleryDetail(blogId);
  }

  private galleries=[{
    name:"Food",
    images:["img/food/cupcake.jpg","img/food/lettuce.jpg","img/food/muffin.jpg","img/food/pizza.jpg","img/food/toast.jpg"]
  }, {
    name:"Nature",
    images:["img/nature/nature1.jpg","img/nature/nature2.jpg","img/nature/nature3.jpg","img/nature/nature4.jpg","img/nature/nature5.jpg"]
  }, {
    name:"Travel",
    images:["img/travel/travel1.jpg","img/travel/travel2.jpg","img/travel/travel3.jpg","img/travel/travel4.jpg","img/travel/travel5.jpg"]
  }, {
    name:"Fashion",
    images:["img/fashion/fashion1.jpg","img/fashion/fashion2.jpg","img/fashion/fashion3.jpg","img/fashion/fashion4.jpg"]
  }];

  private galleryImages = [];
  private galleryName = "";

  getGalleryDetail(galleryId) {
    this.galleryName = this.galleries[galleryId-1].name;

    while (this.galleries[galleryId-1].images.length) {
      this.galleryImages.push(this.galleries[galleryId-1].images.splice(0, 2));
    }
  }
}
