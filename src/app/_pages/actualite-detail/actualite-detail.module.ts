import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualiteDetailPageRoutingModule } from './actualite-detail-routing.module';

import { ActualiteDetailPage } from './actualite-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualiteDetailPageRoutingModule
  ],
  declarations: [ActualiteDetailPage]
})
export class ActualiteDetailPageModule {}
