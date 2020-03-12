import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calendar/calendar.module').then(m => m.calendarPageModule)
          }
        ]
      },
      {
        path: 'journal',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../journal/journal.module').then(m => m.journalPageModule)
          }
        ]
      },
      {
        path: 'directory',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../directory/directory.module').then(m => m.directoryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/calendar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
