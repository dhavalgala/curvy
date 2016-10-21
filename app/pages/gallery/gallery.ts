import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GalleryDetailPage} from '../gallery-detail/gallery-detail';


@Component({
  templateUrl: 'build/pages/gallery/gallery.html'
})
export class GalleryPage {

  constructor(private nav: NavController, navParams: NavParams) {
    // If we avigated to this page, we will have an item available as a nav param
  }

  toDetail(id) {
 	this.nav.push(GalleryDetailPage, {
        galleryId: id
    });
  }
}
