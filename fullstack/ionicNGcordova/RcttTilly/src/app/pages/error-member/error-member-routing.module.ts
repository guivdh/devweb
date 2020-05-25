import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorMemberPage } from './error-member.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorMemberPageRoutingModule {}
