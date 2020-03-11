import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAppPageRoutingModule } from './open-app-routing.module';

import { OpenAppPage } from './open-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAppPageRoutingModule
  ],
  declarations: [OpenAppPage]
})
export class OpenAppPageModule {}
