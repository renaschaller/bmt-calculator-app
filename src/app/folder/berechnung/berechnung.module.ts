import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerechnungPageRoutingModule } from './berechnung-routing.module';

import { BerechnungPage } from './berechnung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerechnungPageRoutingModule
  ],
  declarations: [BerechnungPage]
})
export class BerechnungPageModule {}
