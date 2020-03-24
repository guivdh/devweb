import { Component, ViewChild,OnInit  } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { AngularFireDatabase } from '@angular/fire/database';

import { ModalController } from '@ionic/angular';
import { EventPage } from '../pages/event/event.page';

import { ActivatedRoute, Router } from '@angular/router';

import 'firebase/database'; 

import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { EventRandom } from '../event';


@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class calendarPage implements OnInit {
  isLoadingResults: boolean;

  ngOnInit() {
    //this.getEvents();
  }

  eventsRandom: EventRandom[] = [];

  eventSource=[];
  viewTitle: string;
  selectedDay=new Date();

  constructor(
    private router: Router,
    public afDB: AngularFireDatabase,
    public modalController: ModalController,

    public api: ApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute
    ) {

    this.loadEvent();

  }
  
  


  
  currentMonth: string;

  showAddEvent: boolean;
  newEvent = {
    _id:'',
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  };


  calendar={
    locale: "fr-FR",
    mode: "month",
    currentDate: this.selectedDay    
  }

  minDate = new Date().toISOString();

  @ViewChild(CalendarComponent, {static: false}) tillyCalendar: CalendarComponent;


  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }

  async onEventSelected(event: any) {

    let eventObj={
      '_id': event._id,
      'title': event.title, 
    'description': event.description,
    'startTime': event.startTime,
    'endTime':event.endTime
    }

    let eventObjToString = JSON.stringify(eventObj);

    console.log('Event: ' + eventObjToString);

    this.router.navigate([
    'event-detail',eventObjToString
   ]);

   
  }
  
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      _id: '',
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }


  addEvent() {
    //firebase
    this.afDB.list('Events').push({
      
      _id: this.createId(this.newEvent.startTime,this.newEvent.title),
      title: this.newEvent.title,
      startTime:  this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description
    });

    //own api

/* 
    this.isLoadingResults = true;
    this.api.addEvent(this.newEvent)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }); */

    this.showHideForm();
  }

  createId(value1, value2){
    let arr1=value1.split('-');
    let arr4=arr1[2].slice(0,2);
    let arr3=arr1[1];
    let arr2=arr1[0];
    let arr5=[arr2,arr3,arr4];

    let strFinal= arr5.join('')+value2.replace(" ","");

    return strFinal;
  }

  loadEvent() {


 this.afDB.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      this.eventSource = [];
 
      actions.forEach(action => {

        console.log('action: ' + action.payload.key);

        this.eventSource.push({
          _id:action.payload.key,
          title: action.payload.exportVal().title,
          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
        });

        this.tillyCalendar.loadEvents();

      });
    });
     
  }

 
  async getEvents() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getEvents()
      .subscribe(res => {
        this.eventsRandom = res;
        console.log(this.eventsRandom);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


}
