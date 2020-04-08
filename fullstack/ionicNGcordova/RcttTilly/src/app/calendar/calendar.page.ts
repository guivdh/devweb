import { Component, ViewChild,OnInit  } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { AngularFireDatabase } from '@angular/fire/database';

import { ModalController, AlertController } from '@ionic/angular';

import { EventPage } from '../pages/event/event.page';

import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

import 'firebase/database'; 

import { LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api/api.service';
import { EventRandom } from '../event';

import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class calendarPage implements OnInit {
  isLoadingResults: boolean;
  spinCal: boolean=true;


  public addEventForm: FormGroup;


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
    public formBuilder: FormBuilder,
    public api: ApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public user: UserService
    ) {

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



    this.loadEvent();
    
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.loadEvent();
      }
    });
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
    this.addEventForm.value.startFc = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.addEventForm.value.endFc = (selected.toISOString());
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


  addEvent() {
    //firebase
    console.log(this.addEventForm.value.titleFc.name);

    if ( this.addEventForm.value.titleFc.name !=='' && this.addEventForm.value.descriptionFc!==''  ){
      this.afDB.list('Events').push({
        
        _id: this.createId(this.addEventForm.value.startFc,this.addEventForm.value.titleFc.name),
        title: this.addEventForm.value.titleFc.name,
        startTime:  this.addEventForm.value.startFc,
        endTime: this.addEventForm.value.endFc,
        description: this.addEventForm.value.descriptionFc
      });

      this.showHideForm();

    } 
    else{

      this.presentAlertPrompt(` Définissez le titre et/ou la description!`);
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
            console.log(this.user.getUID());

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
     
    this.spinCal=false;
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



  















  keyword = 'name';
  public titles = [
    {
      id: 1,
      name: 'Match - Division2A_N',
    },
    {
      id: 2,
      name: 'Match - Division1B_P',
    },
    {
      id: 3,
      name: 'Match - Division3C_P',
    },
    {
      id: 4,
      name: 'Match - Division3D_P',
    },
    {
      id: 5,
      name: 'Match - Division4E_P',
    },
    {
      id: 6,
      name: 'Match - Division5F_P',

    },
    {
      id: 7,
      name: 'Match - Division6G_P',
    },
    {
      id: 8,
      name: 'Match - Division7_debutant',
    },
    {
      id: 9,
      name: 'Entrainement libre',
    },
    {
      id: 10,
      name: 'Entrainement dirigé',
    },
    {
      id: 11,
      name: 'Souper du club',
    },
    {
      id: 12,
      name: 'Réunion - capitaine',
    },
    {
      id: 13,
      name: 'Réunion - responsable',
    }
  ];

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
