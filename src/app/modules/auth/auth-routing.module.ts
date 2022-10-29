import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path:'login-admin',
    component:AdminPageComponent
  },
=======
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { AuthPageComponent} from './pages/auth-page/auth-page.component'

const routes: Routes = [
  {
    path:'login',
    component:AuthPageComponent,
    //loadChildren:()=> import(`./auth.module`).then(m=>m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:()=> import(`../home/home.module`).then(m=> m.HomeModule),
    canActivate:[SessionGuard]
  }
>>>>>>> 7b3ab683cedd515730bea406f4554d392b1205ea
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
