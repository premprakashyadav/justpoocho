import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatpage',
  templateUrl: 'chatpage.html',
})
export class ChatpagePage {
pet: string = "puppies"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatpagePage');
  }
  aboutus(){
    this.navCtrl.push('AboutusPage');
  }
  tc(){
    this.navCtrl.push('TermscondPage');
  }
  privacy(){
    this.navCtrl.push('PrivacypolicyPage');
  }
  logout(){
    
  }
  profile(){
    this.navCtrl.push('ProfilePage');
  }

  services(){
    this.navCtrl.push('ServicesPage');
  }
  contact(){
    this.navCtrl.push('ContactusPage');
  }

}
