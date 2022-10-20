import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacsPageComponent } from './pages/contacs-page/contacs-page.component';

const routes: Routes = [
  {
    path:'',
    component:ContacsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContacsRoutingModule { }
