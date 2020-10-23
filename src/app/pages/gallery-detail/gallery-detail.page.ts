import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.page.html',
  styleUrls: ['./gallery-detail.page.scss'],
})
export class GalleryDetailPage implements OnInit {

  private galleryId: any;
  private galleries = [{
    name: 'Food',
    images: [
      '../assets/imgs/food/cupcake.jpg',
      '../assets/imgs/food/lettuce.jpg',
      '../assets/imgs/food/muffin.jpg',
      '../assets/imgs/food/pizza.jpg',
      '../assets/imgs/food/toast.jpg']
  }, {
    name: 'Nature',
    images: [
      '../assets/imgs/nature/nature1.jpg',
      '../assets/imgs/nature/nature2.jpg',
      '../assets/imgs/nature/nature3.jpg',
      '../assets/imgs/nature/nature4.jpg',
      '../assets/imgs/nature/nature5.jpg'
    ]
  }, {
    name: 'Travel',
    images: [
      '../assets/imgs/travel/travel1.jpg',
      '../assets/imgs/travel/travel2.jpg',
      '../assets/imgs/travel/travel3.jpg',
      '../assets/imgs/travel/travel4.jpg',
      '../assets/imgs/travel/travel5.jpg'
    ]
  }, {
    name: 'Fashion',
    images: [
      '../assets/imgs/fashion/fashion1.jpg',
      '../assets/imgs/fashion/fashion2.jpg',
      '../assets/imgs/fashion/fashion3.jpg',
      '../assets/imgs/fashion/fashion4.jpg'
    ]
  }];

  galleryImages = [];
  galleryName = '';

  constructor(private route: ActivatedRoute, private modalController: ModalController) {
    this.route.params.subscribe((params) => {
      if (params && params.galleryId) {
        this.galleryId = params.galleryId;
      }
    });
  }

  ngOnInit() {
    this.galleryName = this.galleries[this.galleryId - 1].name;

    while (this.galleries[this.galleryId - 1].images.length) {
      this.galleryImages.push(this.galleries[this.galleryId - 1].images.splice(0, 2));
    }
  }

  async viewInSlide(i, j) {
    const obj = {
      galleryId: this.galleryId,
      index: 2 * i + j
    };
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        galleryObj: obj
      }
    });
    modal.present();
  }

}
