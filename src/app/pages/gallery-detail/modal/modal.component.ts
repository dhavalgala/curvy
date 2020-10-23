import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() galleryObj: any;
  gallery = [];
  showNow = false;
  slideOptions: any;
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

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.gallery = this.galleries[this.galleryObj.galleryId - 1].images;
    this.slideOptions = {
      initialSlide: this.galleryObj.index
    };
    setTimeout(() => {
      this.showNow = true;
    }, 500);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
