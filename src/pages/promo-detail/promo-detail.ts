import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { CouponDetailPage } from '../coupon-detail/coupon-detail';

/*
  Generated class for the PromoDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google: any;

@Component({
  selector: 'page-promo-detail',
  templateUrl: 'promo-detail.html'
})
export class PromoDetailPage {
  selectedPromo: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mainTabBarElement: any;
  slideOptions = {
    initialSlide: 0,
    loop: true,
    pager: true,
    parallax: true,
    autoplay: 3000
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mainTabBarElement = document.querySelector('#main_tabs .tabbar');
    this.selectedPromo = navParams.get('promo');
  }
  createCoupon(event, promo) {
    this.navCtrl.push(CouponDetailPage, {
      promo: promo
    });
    //    this.navCtrl.setRoot(PromoDetailPage,{
    //       promo: promo
    //    });
  }
  ionViewWillEnter() {
    this.mainTabBarElement.style.visibility = 'hidden';
    this.loadMap();
  }
  ionViewWillLeave() {
    this.mainTabBarElement.style.visibility = 'visible';
  }
  validNumber(result) {
    let isNumber = Number(result);
    return !isNaN(isNumber);
  }
  loadMap() {
    let latLng = new google.maps.LatLng(-12.0964167, -77.0254246);

    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<ion-list>"+
  "<ion-item>"+
    "<ion-avatar item-left>"+
      " <img src='" + this.selectedPromo['url-logo']+"'>"+
   " </ion-avatar>"+
    "<h2>"+this.selectedPromo.address+"</h2>"+
    "telf: "+this.selectedPromo.phone+
  "</ion-item>"+
"</ion-list>";

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    infoWindow.open(this.map, marker);
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  goToMyPosition() {
    //chequear esto https://developers.google.com/maps/documentation/javascript/examples/control-custom?hl=es-419
    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

    }, (err) => {
      console.log(err);
    });
  }

}
