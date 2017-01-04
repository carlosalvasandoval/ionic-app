import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PromoDetailPage } from '../promo-detail/promo-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedPromo: any;
  promos: Array<{ title: string, subtitle: string, "old-price": number, price: number, "url-logo": string, "url-img": string, moneda: string }>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.selectedPromo = navParams.get('promo');
    
    this.promos = [];
    for (let i = 1; i < 11; i++) {
      this.promos.push({
        moneda: 'S/.',
        title: 'Te presentamos la nueva bembos "abusiva" ',
        subtitle: 'Solo hasta el 28 de febrero llévala a solo 6.9',
        "old-price": 17.9,
        price: 6.9,
        "url-logo": "",
        "url-img": ""
      });
    }
  }
  
  promoTapped(event, promo) {
     this.navCtrl.push(PromoDetailPage, {
       promo: promo
     });
  }

}
