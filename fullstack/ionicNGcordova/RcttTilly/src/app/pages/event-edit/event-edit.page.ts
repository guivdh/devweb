import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';


import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { EventRandom } from 'src/app/event';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.page.html',
  styleUrls: ['./event-edit.page.scss'],
})
export class EventEditPage implements OnInit {
 
   event={
    _id: '',
    title: '',
    startTime: '', 
    endTime: '',
    description: '', 

   } 
    
 
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
    this.getEvent(this.route.snapshot.params['id']);
  }




  getEvent(id: any) {
    

    this.api.getEvent(id).subscribe((data: any) => {

      this.event._id = data._id;
      this.event.title= data.title;
      this.event.startTime= data.startTime; 
      this.event.endTime= data.endTime;
      this.event.description= data.description;
    });
  }

  updateEvent() {


      this.afDB.object('Events/' + this.event._id)
        .update({ 
          title: this.event.title,
          startTime:  this.event.startTime,
          endTime: this.event.endTime,
          description: this.event.description,
         });
/*     
 this.afDB.list('Events').update(this.event._id, {
  title: this.event.title,
  startTime:  this.event.startTime,
  endTime: this.event.endTime,
  description: this.event.description,
  }); */

 


  //own api
    let eventEditPassage={
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
      );
  }


  close() {
    this._location.back();
  } 
}
