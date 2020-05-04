import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-open-app',
  templateUrl: './open-app.page.html',
  styleUrls: ['./open-app.page.scss'],
})
export class OpenAppPage implements OnInit {

  constructor(public router: Router,
    public user: UserService,) { }

  ngOnInit() {
    this.yetConnected();
  }


  async yetConnected(){
    var returning= await this.user.retrieve("user");

    if(returning!==undefined && returning!== " " && returning.length>20){
      await this.router.navigate(['/tabs']);
    }
   }
}
