import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    
    ],
   

})

export class ComponentsModule{}