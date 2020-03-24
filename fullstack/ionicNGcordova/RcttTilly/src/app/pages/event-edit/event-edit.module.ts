import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventEditPageRoutingModule } from './event-edit-routing.module';

import { EventEditPage } from './event-edit.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import config from '../../fb'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventEditPageRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),

  ],
  declarations: [EventEditPage]
})
export class EventEditPageModule {}
