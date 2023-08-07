import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesPanneauxPage } from './les-panneaux.page';

const routes: Routes = [
  {
    path: '',
    component: LesPanneauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesPanneauxPageRoutingModule {}
