import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorMemberPageRoutingModule } from './error-member-routing.module';

import { ErrorMemberPage } from './error-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorMemberPageRoutingModule
  ],
  declarations: [ErrorMemberPage]
})
export class ErrorMemberPageModule {}
