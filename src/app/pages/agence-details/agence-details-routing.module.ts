import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenceDetailsPage } from './agence-details.page';

const routes: Routes = [
  {
    path: '',
    component: AgenceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenceDetailsPageRoutingModule {}
