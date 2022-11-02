import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserRegistrationPageComponent } from './pages/user-registration-page/user-registration-page.component';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';
import { RegisterPermissionModalComponent } from './modals/register-permission-modal/register-permission-modal.component';
import { RegisterRolesModalComponent } from './modals/register-roles-modal/register-roles-modal.component';



@NgModule({
  declarations: [
    AuthPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
    UserRegistrationPageComponent,
    PermissionsPageComponent,
    RegisterPermissionModalComponent,
    RegisterRolesModalComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
