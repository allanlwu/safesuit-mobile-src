import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-safety',
  templateUrl: 'safety.html'
})
export class SafetyPage {
  num = null;
  baseUrl = 'https://ba3cc970.ngrok.io/text';

  constructor(public events: Events, public navCtrl: NavController, public alertCtrl: AlertController, private platform: Platform, private geolocation: Geolocation, private http: Http) {
  }

  logNumber() {
    console.log(this.num);
    this.sendLocationMessage();
  }

  sendLocationMessage() {
    this.platform.ready().then(() => {
      console.log('Starting...');
      // get current position
      this.geolocation.getCurrentPosition().then(pos => {
        // send text message
        let headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded"
        });
        let options = new RequestOptions({ headers: headers });
        var message = encodeURIComponent("https://www.google.com/maps/preview/@" + pos.coords.latitude + "," + pos.coords.longitude + ",8z");
        var data = "message=" + message + "&number=+1" + this.num;
        console.log(data);
        this.http.post(this.baseUrl, data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log("success " + res);
          }, (err) => {
            console.log("failed " + err);
          });
        alert('https://www.google.com/maps/preview/@' + pos.coords.latitude + ',' + pos.coords.longitude + ',8z');
      });

      const watch = this.geolocation.watchPosition().subscribe(pos => {
        // send text message
        let headers = new Headers({
          "Content-Type": "application/x-www-form-urlencoded"
        });
        let options = new RequestOptions({ headers: headers });
        var message = encodeURIComponent("https://www.google.com/maps/preview/@" + pos.coords.latitude + "," + pos.coords.longitude + ",8z");
        var data = "message=" + message + "&number=+16504600700";
        console.log(data);
        this.http.post(this.baseUrl, data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log("success " + res);
          }, (err) => {
            console.log("failed " + err);
          });
        alert('https://www.google.com/maps/preview/@' + pos.coords.latitude + ',' + pos.coords.longitude + ',8z');
      });

      // stop watching
      watch.unsubscribe();
    });
  }

}
