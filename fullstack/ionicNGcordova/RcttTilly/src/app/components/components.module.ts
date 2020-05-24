import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { ResponsibleComponent } from './responsible/responsible.component';
import { RouterModule } from '@angular/router';

import { calendarPage } from '../calendar/calendar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponsibleComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ResponsibleComponent
    
    ],
})

export class ComponentsModule{}