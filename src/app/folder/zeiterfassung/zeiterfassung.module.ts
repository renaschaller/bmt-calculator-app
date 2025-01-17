import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZeiterfassungPageRoutingModule } from './zeiterfassung-routing.module';

import { ZeiterfassungPage } from './zeiterfassung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZeiterfassungPageRoutingModule
  ],
  declarations: [ZeiterfassungPage]
})
export class ZeiterfassungPageModule {}
