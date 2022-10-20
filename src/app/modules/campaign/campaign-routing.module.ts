import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignPageComponent } from './pages/campaign-page/campaign-page.component';

const routes: Routes = [
  {
    path:'',
    component:CampaignPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
