import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToleranzenPageRoutingModule } from './toleranzen-routing.module';

import { ToleranzenPage } from './toleranzen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToleranzenPageRoutingModule
  ],
  declarations: [ToleranzenPage]
})
export class ToleranzenPageModule {}
