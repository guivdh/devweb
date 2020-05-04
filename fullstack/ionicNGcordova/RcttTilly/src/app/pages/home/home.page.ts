import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit
{

  data:string ='';
  constructor(public router: Router,
    public user: UserService,
    ) {
    
  }



  ngOnInit() {

  }


}
