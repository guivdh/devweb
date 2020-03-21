import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';

import { NavParams } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,

  ],
  declarations: [EventPage],
  providers:[
    NavParams,
  ],
  exports:[
    EventPage
  ],
  entryComponents: [
    EventPage
  ] 

})
export class EventPageModule {}
