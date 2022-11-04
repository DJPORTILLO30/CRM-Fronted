import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignModel } from '@core/models/campaigns/campaign.model';

@Component({
  selector: 'app-campaigns-data',
  templateUrl: './campaigns-data.component.html',
  styleUrls: ['./campaigns-data.component.css']
})
export class CampaignsDataComponent implements OnInit {

  dataCampaign!: CampaignModel;

  constructor(@Inject(MAT_DIALOG_DATA) private data: CampaignModel) {
    this.dataCampaign = data;
  }

  ngOnInit(): void {
  }

}
