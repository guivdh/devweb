import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { directoryPage } from './directory.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../components/components.module';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import config from '../fb'

import { UserService } from '../services/user/user.service';
import { EventAutoCompletionService, TitleType } from '../services/autoCompletion/event-auto-completion.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: directoryPage }]),
    ComponentsModule,
    AutocompleteLibModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    AutocompleteLibModule
  ],
  declarations: [directoryPage],
  providers: [
    UserService,
    EventAutoCompletionService
    ]
})
export class directoryPageModule {}
