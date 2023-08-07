import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesPanneauxPageRoutingModule } from './les-panneaux-routing.module';

import { LesPanneauxPage } from './les-panneaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesPanneauxPageRoutingModule
  ],
  declarations: [LesPanneauxPage]
})
export class LesPanneauxPageModule {}
