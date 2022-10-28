import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
