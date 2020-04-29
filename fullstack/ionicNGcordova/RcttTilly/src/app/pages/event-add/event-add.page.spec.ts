import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from '../../components/header/header.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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



describe('EventPage', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;



  let location: Location;
  let router: Router;

  beforeEach(async(() => {
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
        AngularFirestoreModule
      ],
      providers: [
        Location,
        AngularFireDatabase,
        UserService,
        NativeStorage
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(EventPage);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });



 /*  it('redirects you to /tabs/calendar', fakeAsync(() => { 
    component.close(); 
    tick(); 
    expect(location.path()).toBe('/tabs/celendar'); 
  })); */
});
