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
  categories: Array<{ title: string, details: any, icon: string, showDetails: boolean }> = [];
  categoryOpened :any;

  constructor(platform: Platform, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      setTimeout(() => { // <=== 
        Splashscreen.hide();
}, 3000);
      
    });
    this.categories = [
      {
 
        title: 'Imagen personal',
        details: ['Peluquerias', 'Barberias', 'Personal shoppers', 'Moda y accesorios'],
        icon: 'ios-brush-outline',
        showDetails: false
      },
      {

        title: 'Educación',
        details: ['1', '2', '3', '4'],
        icon: 'ios-school-outline',
        showDetails: false
      },
      {

        title: 'Tecnología',
        details: ['1', '2', '3', '4'],
        icon: 'logo-android',
        showDetails: false
      },
      {
 
        title: 'Negocios',
        details: ['1', '2', '3', '4'],
        icon: 'ios-cash-outline',
        showDetails: false
      }
    ];
  }
  
  toggleDetails(category) {
    if (category.showDetails) {
      category.showDetails = false;
      this.categoryOpened = null;
    } else {
      category.showDetails = true;
      this.categoryOpened = category;
    }
  }
  isShown(category){
    let isShown = this.categoryOpened === category;
    category.showDetails = isShown;
    return isShown;
  }
  preferenciasModal() {
    let modal = this.modalCtrl.create(ModalPreferenciasPage);
    modal.present();
  }
}
