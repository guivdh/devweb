import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionPageRoutingModule } from './connection-routing.module';

import { ConnectionPage } from './connection.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import config  from '../../fb'
import { UserService } from '../../services/user/user.service'
import { AngularFirestore } from '@angular/fire/firestore'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConnectionPageRoutingModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  declarations: [ConnectionPage],
  providers: [
    UserService,
    AngularFirestore

  ]
})
export class ConnectionPageModule {}
