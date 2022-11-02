import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bussines } from '@core/models/bussines/bussines';
import { DialogFormBussinesComponent } from '../dialog-form-bussines/dialog-form-bussines.component';


@Component({
  selector: 'app-table-bussines',
  templateUrl: './table-bussines.component.html',
  styleUrls: ['./table-bussines.component.css']
})
export class TableBussinesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', "options"];
  @Input() dataSource: Bussines[] | any;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  onTransferdataDialog(option: string, idBussines: number): void {
    this.dialog.open(DialogFormBussinesComponent, {
      data: {
        title: (option === "edit") ? "Editar Negocio" : "Eliminar negocio",
        titleButton: (option === "edit") ? "Editar" : "Eliminar",
        id: idBussines,
        actionForm: option
      },
      width: '50%'
    });
  }

  onGetData(element: Bussines): void {

  }

}
