import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CallsPageComponent
  ],
  imports: [
    CommonModule,
    CallsRoutingModule,
    SharedModule
  ]
})
export class CallsModule { }
