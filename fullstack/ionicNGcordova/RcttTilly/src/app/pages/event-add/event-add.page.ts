import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { formatDate } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router'
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { UserService } from 'src/app/services/user/user.service';
import { EventAutoCompletionService, TitleType } from 'src/app/services/autoCompletion/event-auto-completion.service';

import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

@Component({
  selector: 'event-add',
  templateUrl: './event-add.page.html',
  styleUrls: ['./event-add.page.scss'],
})
export class EventPage implements OnInit {

  public addEventForm: FormGroup;
  newEvent: { _id: string; title: string; description: string; startTime: string; endTime: string; };


  constructor(
    private _location: Location,
    public activateRoute:  ActivatedRoute,
    private router: Router,
    public afDB: AngularFireDatabase,
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    public api: ApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public user: UserService,
    private titleData: EventAutoCompletionService)
    {
      this.addEventForm = this.formBuilder.group({
        titleFc: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])),
        descriptionFc: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])),
        startFc: new FormControl(new Date().toISOString(), Validators.compose([
          Validators.required,
        ])),
        endFc: new FormControl(new Date().toISOString(), Validators.compose([
          Validators.required,
        ])),
      });



    
     }


  ngOnInit() {

  }

 resetForm() {

    //console.log(this.titlesEvent);
    this.newEvent = {
      _id: '',
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };

    this.addEventForm = this.formBuilder.group({
      titleFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      descriptionFc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      startFc: new FormControl(new Date().toISOString(), Validators.compose([
        Validators.required,
      ])),
      endFc: new FormControl(new Date().toISOString(), Validators.compose([
        Validators.required,
      ])),
    });

    this.close();

  }
  addEvent() {
    //firebase
    //console.log(this.addEventForm.value.titleFc.name);

    if ( this.addEventForm.value.titleFc.name !=='' && this.addEventForm.value.descriptionFc!==''  ){
      this.afDB.list('Events').push({
        
        _id: this.createId(this.addEventForm.value.startFc,this.addEventForm.value.titleFc.name),
        title: this.addEventForm.value.titleFc.name,
        startTime:  this.addEventForm.value.startFc,
        endTime: this.addEventForm.value.endFc,
        description: this.addEventForm.value.descriptionFc
      });

      this.resetForm();

    } 
    else{

       this.presentAlertPrompt(` Définissez le titre et/ou la description!`);
       return ` Définissez le titre et/ou la description!`;
      }
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
  }


  async presentAlertPrompt(msg) {
    const alert = await this.alertController.create({
      header: 'Erreur!',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            //console.log(this.user.getUID());

          }
        }
      ]
    });
    await alert.present();
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


   close() {
    this._location.back();
  } 




  
  keyword = 'name';



  public titlesEvent= this.getTitles();

  getTitles(): TitleType[] {
    return this.titleData.getEventTitles();  
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
}
