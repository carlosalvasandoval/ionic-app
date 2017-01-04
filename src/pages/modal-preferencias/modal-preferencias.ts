import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalPreferencias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-preferencias',
  templateUrl: 'modal-preferencias.html'
})
export class ModalPreferenciasPage {
  preferencias: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.preferencias = [
      { nombre: 'Entretenimiento', icon: 'md-game-controller-b' },
      { nombre: 'Tecnología', icon: 'ios-phone-portrait' },
      { nombre: 'Cine y teatro', icon: 'ios-happy' },
      { nombre: 'Bares', icon: 'md-beer' },
      { nombre: 'Ropa y calzado', icon: 'ios-shirt-outline' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPreferenciasPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
