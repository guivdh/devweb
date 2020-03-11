import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAppPage } from './open-app.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAppPageRoutingModule {}
