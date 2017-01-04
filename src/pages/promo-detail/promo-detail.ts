import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMap,
  GoogleMapsEvent,
  CameraPosition,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker,
  GoogleMapsLatLng
} from 'ionic-native';

/*
  Generated class for the PromoDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-promo-detail',
  templateUrl: 'promo-detail.html'
})
export class PromoDetailPage {
  selectedPromo: any;
  tabBarElement: any;
  scrollContentElement: any;
  map: GoogleMap;
  scrollTop: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPromo = navParams.get('promo');
  }

  ngAfterViewInit() {
    //this.loadMap();
  }

  loadMap() {

    let initialPosition: GoogleMapsLatLng = new GoogleMapsLatLng(-12.0964167, -77.0254246);
    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': initialPosition,
        'tilt': 30,
        'zoom': 11,
        'bearing': 50
      }
    });
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });

    // create LatLng object


    // create CameraPosition
    //    let position: CameraPosition = {
    //      target: ionic,
    //      zoom: 15,
    //      tilt: 30
    //    };
    //
    //    // move the map's camera to position
    //    this.map.moveCamera(position);

    // create new marker
    let markerOptions: GoogleMapsMarkerOptions = {
      position: initialPosition,
      title: this.selectedPromo.title
    };

    this.map.addMarker(markerOptions)
      .then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });
  }

}
