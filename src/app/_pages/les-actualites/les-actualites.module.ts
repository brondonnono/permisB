import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesActualitesPageRoutingModule } from './les-actualites-routing.module';

import { LesActualitesPage } from './les-actualites.page';

//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //FileTransfer, 
    LesActualitesPageRoutingModule
  ],
  declarations: [LesActualitesPage]
})
export class LesActualitesPageModule {}
