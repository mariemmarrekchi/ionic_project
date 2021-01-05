import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenceDetailsPageRoutingModule } from './agence-details-routing.module';

import { AgenceDetailsPage } from './agence-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenceDetailsPageRoutingModule
  ],
  declarations: [AgenceDetailsPage]
})
export class AgenceDetailsPageModule {}
