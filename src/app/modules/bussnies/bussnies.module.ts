import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussniesRoutingModule } from './bussnies-routing.module';
import { BussniesPageComponent } from './pages/bussnies-page/bussnies-page.component';


@NgModule({
  declarations: [
    BussniesPageComponent
  ],
  imports: [
    CommonModule,
    BussniesRoutingModule
  ]
})
export class BussniesModule { }
