import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  showSplash =true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public user: UserService,
    public router: Router

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.yetConnected();

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //timer(3000).subscribe(()=> this.showSplash = false);

    });
  }


  async yetConnected(){
    var returning= await this.user.retrieve("userTilly");

    if(returning!==undefined && returning!== " " && returning.length>20){
      this.router.navigate(['/tabs/calendar']);
    }
    alert(returning)
  }
}
