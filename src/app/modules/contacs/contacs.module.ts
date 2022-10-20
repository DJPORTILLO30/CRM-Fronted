import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContacsRoutingModule } from './contacs-routing.module';
import { ContacsPageComponent } from './pages/contacs-page/contacs-page.component';


@NgModule({
  declarations: [
    ContacsPageComponent
  ],
  imports: [
    CommonModule,
    ContacsRoutingModule
  ]
})
export class ContacsModule { }
