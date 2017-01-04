import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ModalPreferenciasPage } from '../pages/modal-preferencias/modal-preferencias';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  preferenciasModal() {
    let modal = this.modalCtrl.create(ModalPreferenciasPage);
    modal.present();
  }
}
