import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from '../../components/header/header.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';


import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {Location} from '@angular/common';

import { EventPage } from './event-add.page';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import config from '../../fb'

import { UserService } from '../../services/user/user.service';

import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';


describe('EventPage', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;
  let location: Location;
  let router: Router;


  var originalTimeout;

   /*  beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    }); */


  /* beforeEach(async(() => {


    
    TestBed.configureTestingModule({
      declarations: [ EventPage,HeaderComponent ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        AutocompleteLibModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(config),
        HttpClientModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
      ],
      providers: [
        Location,
        AngularFireDatabase,
        UserService,
        NativeStorage
      ],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(EventPage);
    router.initialNavigation();



    component = fixture.componentInstance;
    fixture.detectChanges();
  })); */


  beforeEach(() => {




    TestBed.configureTestingModule({
      declarations: [ EventPage,HeaderComponent ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        AutocompleteLibModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(config),
        HttpClientModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        FormsModule
      ],
      providers: [
        Location,
        AngularFireDatabase,
        UserService,
        NativeStorage
      ],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(EventPage);
    router.initialNavigation();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.keyword).toBe('name');

  });

  it('should be defined', () => {


    expect(component.addEventForm).toBeDefined();
    expect(component.addEventForm.value.titleFc).toBeDefined();
    expect(component.addEventForm.value.startFc).toBeDefined();
    expect(component.addEventForm.value.endFc).toBeDefined();
    expect(component.addEventForm.value.descriptionFc).toBeDefined();


  });
  it('should be equal to', () => {
  
    expect(component.keyword).toBe('name');

  });


  it('should return that this will not work with empty title or description...', () => {
  
    component.addEventForm.value.titleFc=" ";
    component.addEventForm.value.startFc="2020-03-30T18:30:50.780Z";
    component.addEventForm.value.endFc="2020-03-31T15:00:52.142+02:00";
    component.addEventForm.value.descriptionFc="Contre Luttre";
    
    expect(component.addEvent).toMatch(' Définissez le titre et/ou la description!');
  });

  it('should return that this will not work with empty description...', () => {
  
    component.addEventForm.value.titleFc="Match";
    component.addEventForm.value.startFc="2020-03-30T18:30:50.780Z";
    component.addEventForm.value.endFc="2020-03-31T15:00:52.142+02:00";
    component.addEventForm.value.descriptionFc=" ";
    
    expect(component.addEvent).toMatch(' Définissez le titre et/ou la description!');
  });

  it('should receives the titles name from the db', () => {
  
    let titles=component.getTitles();
    
    expect(titles).not.toBe(null);

    
    //expect(titles).toEqual(jasmine.arrayContaining([{title: 'Souper rencontre'}]));

  });


 /*  it('redirects you to /tabs/calendar', fakeAsync(() => { 
    component.close(); 
    tick(); 
    expect(location.path()).toBe('/tabs/calendar'); 
  })); */


  //fixture.debugElement.nativeElement.style.visibility = "hidden";


});


