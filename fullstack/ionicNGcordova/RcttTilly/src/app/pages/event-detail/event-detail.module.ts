import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPageRoutingModule } from './event-detail-routing.module';

import { EventDetailPage } from './event-detail.page';


import { NavParams } from '@ionic/angular';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ComponentsModule } from '../../components/components.module';


import config from '../../fb'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPageRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
    ComponentsModule,
  ],
  declarations: [
    EventDetailPage,

    ],
  providers:[
    NavParams, 
    
  ],
  exports:[
    EventDetailPage,
  ],
  entryComponents: [
    EventDetailPage,
  ] 
})
export class EventDetailPageModule {}
