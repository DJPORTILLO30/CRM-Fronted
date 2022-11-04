import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormBussinesComponent } from '@modules/bussnies/utils/dialog-form-bussines/dialog-form-bussines.component';
import { BussinesService } from '../../services/bussines/bussines.service';
import { Bussines } from '@core/models/bussines/bussines';
import { CommunicationBussinesService } from '../../services/communication/communication.service';

@Component({
  selector: 'app-bussnies-page',
  templateUrl: './bussnies-page.component.html',
  styleUrls: ['./bussnies-page.component.css']
})
export class BussniesPageComponent implements OnInit {

  idBussines: number = -1;
  actionForm: string = "create";
  dataSource?: Bussines[];
  constructor(
    private dialog: MatDialog,
    private bussinesService: BussinesService,
    private communicationBussinesService: CommunicationBussinesService
  ) {

    this.communicationBussinesService.dataLoadingBussinescurrent.subscribe((active) => {
      if (active) {
        this.onGetDataBussines();
      }
    })

  }

  ngOnInit(): void {
    this.onGetDataBussines();
  }

  onGetDataBussines(): void {
    this.bussinesService.getBussines().subscribe
      ((res) => {
        this.dataSource = res;
      }, (err) => { })
  }

  openDialog(): void {
    this.dialog.open(DialogFormBussinesComponent, {
      data: {
        title: "Crear Negocio",
        titleButton: "Guardar",
        id: this.idBussines,
        actionForm: this.actionForm
      },
      width: '50%'
    });
  }

}
