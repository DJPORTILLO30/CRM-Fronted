import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';
import { RegisterPermissionModalComponent } from './modals/register-permission-modal/register-permission-modal.component';
import { RegisterRolesModalComponent } from './modals/register-roles-modal/register-roles-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdministrationRoutingModule } from './administration-routing.module';


@NgModule({
  declarations: [
    PermissionsPageComponent,
    RegisterPermissionModalComponent,
    RegisterRolesModalComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdministrationModule { }
