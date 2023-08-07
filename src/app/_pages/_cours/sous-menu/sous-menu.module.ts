import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SousMenuPageRoutingModule } from './sous-menu-routing.module';

import { SousMenuPage } from './sous-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SousMenuPageRoutingModule
  ],
  declarations: [SousMenuPage]
})
export class SousMenuPageModule {}
