import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'open-app', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'open-app',
    loadChildren: () => import('./pages/open-app/open-app.module').then( m => m.OpenAppPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./pages/connection/connection.module').then( m => m.ConnectionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'event/:eventObj',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
/*   { 
    path: 'event-detail/:id', 
    loadChildren: () => import('./event-detail/event-detail.module').then(m => m.EventDetailPageModule)
  },
  { 
    path: 'event-add', 
    loadChildren: () => import('./event-add/event-add.module').then(m => m.EventAddPageModule)
  },
  { 
    path: 'event-edit/:id', 
    loadChildren: () => import('./event-edit/event-edit.module').then(m => m.EventEditPageModule)
  }, */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
