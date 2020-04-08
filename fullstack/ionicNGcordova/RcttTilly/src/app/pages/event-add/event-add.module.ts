import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { EventPageRoutingModule } from './event-add-routing.module';

import { EventPage } from './event-add.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFirestoreModule } from '@angular/fire/firestore';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import config from '../../fb'
import { UserService } from '../../services/user/user.service';
import { EventAutoCompletionService, TitleType } from '../../services/autoCompletion/event-auto-completion.service';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: EventPage }]),
    ComponentsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    AutocompleteLibModule
  ],
  declarations: [EventPage],
  providers: [
    UserService,
     { provide: LOCALE_ID, useValue: "fr-FR" },
    EventAutoCompletionService
    ],
  exports:[
    EventPage
  ],
  entryComponents: [
    EventPage
  ] 

})
export class EventPageModule {}
