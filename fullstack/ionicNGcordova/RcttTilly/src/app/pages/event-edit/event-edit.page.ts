import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';


import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { EventRandom } from 'src/app/event';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.page.html',
  styleUrls: ['./event-edit.page.scss'],
})
export class EventEditPage implements OnInit {
 
  eventObjRcv;
  stringToObj;

   event: EventRandom = {
    _id: '',
    title: '',
    startTime: '', 
    endTime: '',
    description: '' 
  };
 
   eventEditForm = new FormGroup({
    _id: new FormControl(),
    title: new FormControl(),
    startTime: new FormControl(),
    endTime: new FormControl(),
    description: new FormControl(),
  });

  isLoadingResults = false;

  //it makes no sense but activateRoute is for firebase and route for own api
  constructor(
    private _location: Location,
    public activateRoute:  ActivatedRoute,
    public api: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public afDB: AngularFireDatabase,
    ) { }

  ngOnInit() {
    //this.getEvent(this.route.snapshot.params['id']);
    this.getEvent();
  }




  getEvent() {
    //own api
//      getEvent(id: any) {


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

    //OWN API
    /* this.api.getEvent(id).subscribe((data: any) => {

      this.event._id = data._id;
      this.event.title= data.title;
      this.event.startTime= data.startTime; 
      this.event.endTime= data.endTime;
      this.event.description= data.description;
    }); */
  }

  updateEvent() {


      this.afDB.object('Events/' + this.event._id)
        .update({ 
          _id: this.event._id,
          title: this.event.title,
          startTime:  this.event.startTime,
          endTime: this.event.endTime,
          description: this.event.description,
         });

         this.router.navigate([ 'tabs' ]);
/*     
 this.afDB.list('Events').update(this.event._id, {
  title: this.event.title,
  startTime:  this.event.startTime,
  endTime: this.event.endTime,
  description: this.event.description,
  }); */

 


  //own api
  /*   let eventEditPassage={
      _id: this.event._id,
      title: this.event.title,
      startTime: this.event.startTime,
      endTime: this.event.endTime,
      description: this.event.description,
    }

    this.eventEditForm.setValue(eventEditPassage);

    this.isLoadingResults = true;
    this.api.updateEvent(eventEditPassage._id, this.eventEditForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      ); */
  }


  close() {
    this._location.back();
  } 
}
