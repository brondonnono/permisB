import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignificationPageRoutingModule } from './signification-routing.module';

import { SignificationPage } from './signification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignificationPageRoutingModule
  ],
  declarations: [SignificationPage]
})
export class SignificationPageModule {}
