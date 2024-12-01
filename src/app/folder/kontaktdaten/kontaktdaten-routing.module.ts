import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KontaktdatenPage } from './kontaktdaten.page';

const routes: Routes = [
  {
    path: '',
    component: KontaktdatenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontaktdatenPageRoutingModule {}
