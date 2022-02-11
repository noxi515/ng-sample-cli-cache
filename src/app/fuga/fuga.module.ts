import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FugaRoutingModule } from './fuga-routing.module';
import { FugaComponent } from './fuga.component';


@NgModule({
  declarations: [
    FugaComponent
  ],
  imports: [
    CommonModule,
    FugaRoutingModule
  ]
})
export class FugaModule { }
