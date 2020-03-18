import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { calendarPage } from './calendar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../components/components.module'

import { NgCalendarModule  } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: calendarPage }]),
    ComponentsModule,
    NgCalendarModule
  ],
  declarations: [calendarPage]
})
export class calendarPageModule {}
