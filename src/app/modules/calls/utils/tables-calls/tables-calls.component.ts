import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Calls } from '@core/models/calls/calls';
import { DialogFormCallsComponent } from '../dialog-form-calls/dialog-form-calls.component';

@Component({
  selector: 'app-tables-calls',
  templateUrl: './tables-calls.component.html',
  styleUrls: ['./tables-calls.component.css']
})
export class TablesCallsComponent implements OnInit {

  displayedColumns: string[] = ['contactName',"description","comunicationDate", "options"];
  @Input() dataSource: Calls[] | any;


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  onTransferdataDialog(option: string, idCalls: number): void {
    this.dialog.open(DialogFormCallsComponent, {
      data: {
        title: (option === "edit") ? "Editar comunicación" : "Eliminar comunicación",
        titleButton: (option === "edit") ? "Editar" : "Eliminar",
        id: idCalls,
        actionForm: option
      },
      width: '50%'
    });
  }

  onGetData(element: Calls): void {
    this.dialog.open(DialogFormCallsComponent, {
      data: element,
      width: '50%'
    });
  }

}
