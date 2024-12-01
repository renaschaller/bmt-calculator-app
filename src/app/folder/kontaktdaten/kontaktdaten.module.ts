import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontaktdatenPageRoutingModule } from './kontaktdaten-routing.module';

import { KontaktdatenPage } from './kontaktdaten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KontaktdatenPageRoutingModule
  ],
  declarations: [KontaktdatenPage]
})
export class KontaktdatenPageModule {}
