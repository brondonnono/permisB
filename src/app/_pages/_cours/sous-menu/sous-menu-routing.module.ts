import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SousMenuPage } from './sous-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SousMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SousMenuPageRoutingModule {}
