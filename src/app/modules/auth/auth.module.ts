import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
