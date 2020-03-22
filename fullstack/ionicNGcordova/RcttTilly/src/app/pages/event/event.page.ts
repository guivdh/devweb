import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { formatDate } from '@angular/common';

import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {


  eventObjRcv;
  stringToObj;

  title: string;
  description: string;
  startTime: string;
  endTime: string;

  constructor(private _location: Location, public activateRoute:  ActivatedRoute)
    {
     
     }
  ngOnInit() {
    this.eventObjRcv = this.activateRoute.snapshot.paramMap.get('eventObj');

    console.log(this.eventObjRcv);
    //we need to reverse json stringify 
    //that we have done in onEventSelected--> and read it as an object
    this.stringToObj=JSON.parse(this.eventObjRcv);
    this.title = this.stringToObj.title;
    this.description =this.stringToObj.description;

    this.startTime = formatDate(this.stringToObj.startTime, 'medium', 'fr');
    
    this.endTime = formatDate(this.stringToObj.endTime, 'medium', 'fr');
 

  }




   close() {
    this._location.back();
  } 
}
