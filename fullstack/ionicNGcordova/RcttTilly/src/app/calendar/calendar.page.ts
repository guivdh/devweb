import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { AngularFireDatabase } from '@angular/fire/database';

import { ModalController } from '@ionic/angular';
import { EventPage } from '../pages/event/event.page';

import { Router } from '@angular/router'

import 'firebase/database'; 


@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class calendarPage {


  eventSource=[];
  viewTitle: string;
  selectedDay=new Date();

  constructor(private router: Router, public afDB: AngularFireDatabase,  public modalController: ModalController) {

    this.loadEvents();
    console.log(this.eventSource);

  }
  
  


  
  currentMonth: string;

  showAddEvent: boolean;
  newEvent = {
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
      'title': event.title, 
    'description': event.description,
    'startTime': event.startTime,
    'endTime':event.endTime
    }

    let eventObjToString = JSON.stringify(eventObj);

    console.log('Event: ' + eventObjToString);

    this.router.navigate([
    'event',eventObjToString
   ]);

  }
  
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }


  addEvent() {
    this.afDB.list('Events').push({
      title: this.newEvent.title,
      startTime:  this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description
    });
    this.showHideForm();
  }


  loadEvents() {

 

 this.afDB.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      this.eventSource = [];
 
      actions.forEach(action => {

        console.log('action: ' + action.payload.exportVal().title);

        this.eventSource.push({
          title: action.payload.exportVal().title,
          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
        });

        this.tillyCalendar.loadEvents();

      });
    });
     
  }

 



}
