import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'agence',
        loadChildren: () => import('../../pages/agence/agence.module').then( m => m.AgencePageModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('../../pages/tickets/tickets.module').then( m => m.TicketsPageModule)
      },
      {
        path: 'agence-details',
        loadChildren: () => import('../../pages/agence-details/agence-details.module').then( m => m.AgenceDetailsPageModule)
      },
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
