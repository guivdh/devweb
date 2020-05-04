import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAppPageRoutingModule } from './open-app-routing.module';

import { OpenAppPage } from './open-app.page';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule  } from '@ionic/storage';
import { UserService } from 'src/app/services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAppPageRoutingModule,
    IonicStorageModule.forRoot(), 

  ],
  declarations: [OpenAppPage],
  providers:[
    UserService,
    NativeStorage
  ]
})
export class OpenAppPageModule {}
