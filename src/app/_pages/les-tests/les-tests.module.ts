import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesTestsPageRoutingModule } from './les-tests-routing.module';

import { LesTestsPage } from './les-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesTestsPageRoutingModule
  ],
  declarations: [LesTestsPage]
})
export class LesTestsPageModule {}
