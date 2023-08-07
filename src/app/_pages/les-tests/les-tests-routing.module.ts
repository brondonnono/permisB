import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesTestsPage } from './les-tests.page';

const routes: Routes = [
  {
    path: '',
    component: LesTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesTestsPageRoutingModule {}
