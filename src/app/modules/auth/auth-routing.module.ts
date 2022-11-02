import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { AuthPageComponent} from './pages/auth-page/auth-page.component'
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserRegistrationPageComponent } from './pages/user-registration-page/user-registration-page.component';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';

const routes: Routes = [
  {
    path:'login',
    component:AuthPageComponent,
  },
  {
    path:'register',
    component:RegisterPageComponent,
  },
  {
    path:'login-admin',
    component:AdminPageComponent,
  },
  {
    path:'info-users',
    component:UserRegistrationPageComponent,
  },
  {
    path:'permissions',
    component:PermissionsPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:()=> import(`../home/home.module`).then(m=> m.HomeModule),
    canActivate:[SessionGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
