import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesActualitesPage } from './les-actualites.page';

const routes: Routes = [
  {
    path: '',
    component: LesActualitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesActualitesPageRoutingModule {}
