import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesCoursPageRoutingModule } from './les-cours-routing.module';

import { LesCoursPage } from './les-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesCoursPageRoutingModule
  ],
  declarations: [LesCoursPage]
})
export class LesCoursPageModule {}
