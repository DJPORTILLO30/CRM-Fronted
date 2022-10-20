import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignPageComponent } from './pages/campaign-page/campaign-page.component';


@NgModule({
  declarations: [
    CampaignPageComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
