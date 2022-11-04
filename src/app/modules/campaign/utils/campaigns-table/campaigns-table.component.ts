import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignModel } from '@core/models/campaigns/campaign.model';
import { CampaignsFormComponent } from '../campaigns-form/campaigns-form.component';
import { CampaignsDataComponent } from '../campaigns-data/campaigns-data.component';

@Component({
  selector: 'app-campaigns-table',
  templateUrl: './campaigns-table.component.html',
  styleUrls: ['./campaigns-table.component.css']
})
export class CampaignsTableComponent implements OnInit {

  displayedColumns: string[] = ['nombreCampania','fechaInicio','fechaFin', 'estado', 'descripcion',"options"];
  @Input() dataSource: CampaignModel[] | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onTransferdataDialog(option: string, idCampaign: number): void {
    this.dialog.open(CampaignsFormComponent, {
      data: {
        title: (option === "edit") ? "Editar Campania" : "Eliminar Campania",
        titleButton: (option === "edit") ? "Editar" : "Eliminar",
        id: idCampaign,
        actionForm: option
      },
      width: '50%'
    });
  }

  onGetData(element: CampaignModel): void {
    this.dialog.open(CampaignsDataComponent, {
      data: element,
      width: '50%'
    });
  }

}
