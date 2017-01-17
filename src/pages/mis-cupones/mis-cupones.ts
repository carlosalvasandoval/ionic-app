import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PromoDetailPage } from '../promo-detail/promo-detail';

@Component({
  selector: 'mis-cupones',
  templateUrl: 'mis-cupones.html'
})
export class MisCuponesPage {
  promos: any;
  isShown: boolean = false;
  eleChosen = 1;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
    this.http.get('assets/data-json/anuncios.json').map(res => res.json()).subscribe(data => {
      this.promos = data;
    });

  }
  ionViewDidEnter() {
    this.presentLoading();
  }
  presentLoading() {
    this.isShown = false;
    let loader = this.loadingCtrl.create({
      content: "Buscando ofertas...",
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.eleChosen = this.getRandomInt(1, 4);
      this.isShown = true;

    }, 5000);
  }
  promoTapped(event, promo) {
    this.navCtrl.push(PromoDetailPage, {
      promo: promo
    });
    //    this.navCtrl.setRoot(PromoDetailPage,{
    //       promo: promo
    //    });
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
