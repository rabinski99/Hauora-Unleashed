import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
