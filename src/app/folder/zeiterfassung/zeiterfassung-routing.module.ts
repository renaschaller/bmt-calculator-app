import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZeiterfassungPage } from './zeiterfassung.page';

const routes: Routes = [
  {
    path: '',
    component: ZeiterfassungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZeiterfassungPageRoutingModule {}
