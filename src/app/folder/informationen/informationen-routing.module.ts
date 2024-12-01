import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationenPage } from './informationen.page';

const routes: Routes = [
  {
    path: '',
    component: InformationenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationenPageRoutingModule {}
