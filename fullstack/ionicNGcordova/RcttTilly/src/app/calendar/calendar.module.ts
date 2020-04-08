import { IonicModule, NavParams } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { calendarPage } from './calendar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../components/components.module'

import { NgCalendarModule  } from 'ionic2-calendar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFirestoreModule } from '@angular/fire/firestore';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import config from '../fb'
import { UserService } from '../services/user/user.service';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: calendarPage }]),
    ComponentsModule,
    NgCalendarModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    AutocompleteLibModule

  ],
  declarations: [
    calendarPage,
    

  ],
  providers: [
    UserService,
     { provide: LOCALE_ID, useValue: "fr-FR" }
    ]

})
export class calendarPageModule {}
