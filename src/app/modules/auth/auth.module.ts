import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
<<<<<<< HEAD
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7b3ab683cedd515730bea406f4554d392b1205ea


@NgModule({
  declarations: [
    AuthPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
