import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { directoryPage } from './directory.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../components/components.module';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: directoryPage }]),
    ComponentsModule,
    AutocompleteLibModule
  ],
  declarations: [directoryPage]
})
export class directoryPageModule {}
