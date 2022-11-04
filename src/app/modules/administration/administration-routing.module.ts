import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsPageComponent } from './pages/permissions-page/permissions-page.component';

const routes: Routes = [

  {
    path:'permissions',
    component:PermissionsPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
