import { Component } from '@angular/core';
import { NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

@Component({
	templateUrl: 'gallery-detail.html'
})

export class GalleryDetailPage {
	private galleryId: any;
	constructor(navParams: NavParams, public modalCtrl: ModalController) {
		// If we navigated to this page, we will have an item available as a nav param
		this.galleryId = navParams.get('galleryId');
		this.getGalleryDetail(this.galleryId);
	}

	private galleries = [{
		name: "Food",
		images: ["../assets/imgs/food/cupcake.jpg", "../assets/imgs/food/lettuce.jpg", "../assets/imgs/food/muffin.jpg", "../assets/imgs/food/pizza.jpg", "../assets/imgs/food/toast.jpg"]
	}, {
		name: "Nature",
		images: ["../assets/imgs/nature/nature1.jpg", "../assets/imgs/nature/nature2.jpg", "../assets/imgs/nature/nature3.jpg", "../assets/imgs/nature/nature4.jpg", "../assets/imgs/nature/nature5.jpg"]
	}, {
		name: "Travel",
		images: ["../assets/imgs/travel/travel1.jpg", "../assets/imgs/travel/travel2.jpg", "../assets/imgs/travel/travel3.jpg", "../assets/imgs/travel/travel4.jpg", "../assets/imgs/travel/travel5.jpg"]
	}, {
		name: "Fashion",
		images: ["../assets/imgs/fashion/fashion1.jpg", "../assets/imgs/fashion/fashion2.jpg", "../assets/imgs/fashion/fashion3.jpg", "../assets/imgs/fashion/fashion4.jpg"]
	}];

	private galleryImages = [];
	private galleryName = "";

	getGalleryDetail(galleryId) {
		this.galleryName = this.galleries[galleryId - 1].name;

		while (this.galleries[galleryId - 1].images.length) {
			this.galleryImages.push(this.galleries[galleryId - 1].images.splice(0, 2));
		}
	}

	viewInSlide(i, j) {
		let obj = {
			galleryId: this.galleryId,
			index: 2 * i + j
		};
		let modal = this.modalCtrl.create(ModalsContentPage, { galleryObj: obj });
		modal.present();
	}
}

@Component({
	templateUrl: 'modal.html'
})
export class ModalsContentPage {

	private gallery = [];
	public galleryObj: any;
	private slideOptions: any;
	private showNow = false;
	constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
		this.galleryObj = this.params.get('galleryObj');
		this.slideOptions = {
			initialSlide: this.galleryObj.index
		};
		this.gallery = this.galleries[this.galleryObj.galleryId - 1].images;
		setTimeout(() => {
			this.showNow = true;
		}, 500)
	}

	private galleries = [{
		name: "Food",
		images: ["../assets/imgs/food/cupcake.jpg", "../assets/imgs/food/lettuce.jpg", "../assets/imgs/food/muffin.jpg", "../assets/imgs/food/pizza.jpg", "../assets/imgs/food/toast.jpg"]
	}, {
		name: "Nature",
		images: ["../assets/imgs/nature/nature1.jpg", "../assets/imgs/nature/nature2.jpg", "../assets/imgs/nature/nature3.jpg", "../assets/imgs/nature/nature4.jpg", "../assets/imgs/nature/nature5.jpg"]
	}, {
		name: "Travel",
		images: ["../assets/imgs/travel/travel1.jpg", "../assets/imgs/travel/travel2.jpg", "../assets/imgs/travel/travel3.jpg", "../assets/imgs/travel/travel4.jpg", "../assets/imgs/travel/travel5.jpg"]
	}, {
		name: "Fashion",
		images: ["../assets/imgs/fashion/fashion1.jpg", "../assets/imgs/fashion/fashion2.jpg", "../assets/imgs/fashion/fashion3.jpg", "../assets/imgs/fashion/fashion4.jpg"]
	}];

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
