import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
import { formatDate } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { EventRandom } from '../../event';



import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {

  eventObjRcv;
  stringToObj;

  _id:'';
  title: string;
  description: string;
  startTime: string;
  endTime: string;

  event: EventRandom = {
    _id: '',
    title: '',
    startTime: '', 
    endTime: '',
    description: '' 
  };

  isLoadingResults = false;

  constructor(
    private _location: Location,
    public activateRoute:  ActivatedRoute,
    public api: ApiService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase,
    )
    {
     
     }
  ngOnInit() {

    this.getEvent();
    
    
  }


  

  async getEvent() {


    this.eventObjRcv = this.activateRoute.snapshot.paramMap.get('eventObj');

    console.log(this.eventObjRcv);
    //we need to reverse json stringify 
    //that we have done in onEventSelected--> and read it as an object
    this.stringToObj=JSON.parse(this.eventObjRcv);

    console.log(this.stringToObj);

    this.event._id= this.stringToObj._id;

    this.event.title = this.stringToObj.title;
    this.event.description =this.stringToObj.description;

/*     
    Without the name of the day and with the 'useless seconds'
    this.startTime = formatDate(this.stringToObj.startTime, 'medium', 'fr');   
    this.endTime = formatDate(this.stringToObj.endTime, 'medium', 'fr');
 */  
    this.event.startTime = this.stringToObj.startTime;
    this.event.endTime = this.stringToObj.endTime;



/* 
    if (this.route.snapshot.paramMap.get('id') === 'null') {
      this.presentAlertConfirm('Veuillez choisir un évènement du calendrier!');
    } else {
      this.isLoadingResults = true;
      await this.api.getEvent(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.event = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    } */
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Attention!',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async deleteEvent(id: any) {

    //firebase
    

  this.afDB.object('Events/' + id).remove()
  .then(_ => console.log('event deleted!'));

      

 
    //with own api
    /* this.isLoadingResults = true;
    await this.api.deleteEvent(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([ '' ]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      }); */
  }

  editEvent(id: any) {
    this.router.navigate([ '/event-edit', id ]);
  }
  
   close() {
    this._location.back();
  } 
}
