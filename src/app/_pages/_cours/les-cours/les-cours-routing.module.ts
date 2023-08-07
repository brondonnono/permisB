import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesCoursPage } from './les-cours.page';

const routes: Routes = [
  {
    path: '',
    component: LesCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesCoursPageRoutingModule {}
