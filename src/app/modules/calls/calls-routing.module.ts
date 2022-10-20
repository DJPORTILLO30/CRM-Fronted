import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';

const routes: Routes = [
  {
    path:'',
    component:CallsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsRoutingModule { }
