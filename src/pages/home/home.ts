import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PromoDetailPage } from '../promo-detail/promo-detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //selectedPromo: any;
  prizes: any;
  promos: Array<
  {
    id: number,
    title: string,
    subtitle: string,
    "old-price": any,
    price: any,
    "url-logo": string,
    "url-img": string,
    moneda: string,
    address: string
    phone: string
  }>;

  homeSlideOptions = {
    initialSlide: 0,
    loop: true
  };

  constructor(public navCtrl: NavController, navParams: NavParams, public http: Http) {
    //this.selectedPromo = navParams.get('promo');
    this.promos = [];
    this.prizes = [];
    let randTextFooter = ['ESTUDIOS DEL MERCADO DEL CONSUMIDOR ONLINE PERUANO',
      'DOMINIO, HOSTING Y EMAILS CORPORATIVOS'];
    for (let i = 1; i < 7; i++) {
      if (i % 2 == 1) {
        this.prizes.push({
          imgSrc1: "assets/img/img_" + i + ".jpg",
          imgSrc2: "assets/img/img_" + (i + 1) + ".jpg",
          footerText1: randTextFooter[Math.round(Math.random())],
          footerText2: randTextFooter[Math.round(Math.random())]

        });
      }

    }

    this.http.get('assets/data-json/anuncios.json').map(res => res.json()).subscribe(data => {
      this.promos = data;
    });

  }

  promoTapped(event, promo) {
    this.navCtrl.push(PromoDetailPage, {
      promo: promo
    });
    //    this.navCtrl.setRoot(PromoDetailPage,{
    //       promo: promo
    //    });
  }
  validNumber(result) {
    let isNumber = Number(result);
    return !isNaN(isNumber);
  }

 


}
