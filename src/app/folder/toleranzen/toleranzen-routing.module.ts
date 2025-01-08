import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToleranzenPage } from './toleranzen.page';

const routes: Routes = [
  {
    path: '',
    component: ToleranzenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToleranzenPageRoutingModule {}
