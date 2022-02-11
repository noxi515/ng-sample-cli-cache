import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PiyoRoutingModule } from './piyo-routing.module';
import { PiyoComponent } from './piyo.component';


@NgModule({
  declarations: [
    PiyoComponent
  ],
  imports: [
    CommonModule,
    PiyoRoutingModule
  ]
})
export class PiyoModule { }
