import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignsFormComponent } from '@modules/campaign/utils/campaigns-form/campaigns-form.component';
import { CampaignService } from '../../services/campaign.service';
import { CampaignModel } from '@core/models/campaigns/campaign.model';
import { ConectCampaignsService } from '../../services/conect/conect-campaigns.service';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {

  idCampaign: number = -1;
  actionForm: string = "create";
  dataSource?: CampaignModel[];

  constructor(
    private dialog: MatDialog,
    private CampaignService: CampaignService,
    private ConectCampaignsService: ConectCampaignsService
  ) {

    this.ConectCampaignsService.LoadCurrentCampaigns.subscribe((active) => {
      if (active) {
        this.onGetDataCampaigns();
      }
    })

  }

  ngOnInit(): void {
    this.onGetDataCampaigns();
  }

  onGetDataCampaigns(): void {
    this.CampaignService.getCampaigns().subscribe
      ((res) => {
        this.dataSource = res;
      }, (err) => { })
  }

  openDialog(): void {
    this.dialog.open(CampaignsFormComponent, {
      data: {
        title: "Crear Campania",
        titleButton: "Guardar",
        id: this.idCampaign,
        actionForm: this.actionForm
      },
      width: '50%'
    });
  }
}
