import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilPageRoutingModule } from './user-profil-routing.module';

import { UserProfilPage } from './user-profil.page';
import { UserService } from 'src/app/services/user/user.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import config from '../../fb'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ApiService } from 'src/app/services/api/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilPageRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [UserProfilPage],
  providers: [
    UserService,
    { provide: LOCALE_ID, useValue: "fr-FR" },
    ApiService
 ],
 exports:[
  UserProfilPage
],
entryComponents: [
  UserProfilPage
] 
})
export class UserProfilPageModule {}
