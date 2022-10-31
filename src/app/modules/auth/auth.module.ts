import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { UserRegistrationPageComponent } from './user-registration-page/user-registration-page.component';



@NgModule({
  declarations: [
    AuthPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
    AdministrationPageComponent,
    UserRegistrationPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
