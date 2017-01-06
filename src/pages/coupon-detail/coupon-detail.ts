import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CouponDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon-detail',
  templateUrl: 'coupon-detail.html'
})
export class CouponDetailPage {
  selectedPromo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPromo = navParams.get('promo');
  }

  //  ionViewDidLoad() {
  //    console.log('ionViewDidLoad CouponDetailPage');
  //  }

}
