import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleChatPageRoutingModule } from './simple-chat-routing.module';

import { SimpleChatPage } from './simple-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleChatPageRoutingModule
  ],
  declarations: [SimpleChatPage]
})
export class SimpleChatPageModule {}
