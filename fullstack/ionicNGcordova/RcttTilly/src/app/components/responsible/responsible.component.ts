import { Component, OnInit, Input } from '@angular/core';

import { Responsible } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.scss'],
})
export class ResponsibleComponent implements OnInit {


  @Input() responsible: Responsible;

  constructor(
    private router: Router

  ) { }

  ngOnInit() {}



  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  
  async onEventSelected(event: any) {

    let userObj=event;

    let userObjToString = JSON.stringify(userObj);

  //  console.log('Event: ' + eventObjToString);

    this.router.navigate([
    'user-profil',userObjToString
   ]);

   
  }

  
}
