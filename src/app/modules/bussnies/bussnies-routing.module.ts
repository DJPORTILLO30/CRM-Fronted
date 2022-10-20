import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussniesPageComponent } from './pages/bussnies-page/bussnies-page.component';

const routes: Routes = [
  {
    path:'',
    component:BussniesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussniesRoutingModule { }
