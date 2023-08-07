import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignificationPage } from './signification.page';

const routes: Routes = [
  {
    path: '',
    component: SignificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignificationPageRoutingModule {}
