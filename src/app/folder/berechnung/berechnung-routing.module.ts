import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerechnungPage } from './berechnung.page';

const routes: Routes = [
  {
    path: '',
    component: BerechnungPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerechnungPageRoutingModule {}

