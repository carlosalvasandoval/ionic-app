import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MisCuponesPage } from '../pages/mis-cupones/mis-cupones';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPreferenciasPage } from '../pages/modal-preferencias/modal-preferencias';
import { MainHeaderComponent } from '../components/main-header/main-header';
import { PromoDetailPage } from '../pages/promo-detail/promo-detail';
import { CouponDetailPage} from '../pages/coupon-detail/coupon-detail';

@NgModule({
  declarations: [
    MyApp,
    MisCuponesPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainHeaderComponent,
    ModalPreferenciasPage,
    PromoDetailPage,
    CouponDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atrás',
      backButtonIcon:'ios-arrow-back',
      iconMode: 'ios',
      tabsHighlight: true,
      menuType:'overlay',//"overlay", "reveal", "push"
//      modalEnter: 'modal-slide-in',
//      modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      spinner:"bubbles",
      tabsHideOnSubPages:true
//      pageTransition: 'ios'
    }, {}
  )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisCuponesPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainHeaderComponent,
    ModalPreferenciasPage,
    PromoDetailPage,
    CouponDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
