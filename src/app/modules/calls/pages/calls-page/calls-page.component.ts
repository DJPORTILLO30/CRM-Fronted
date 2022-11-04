import { Component, OnInit } from '@angular/core';
import { CallsService } from '../../services/calls/calls.service';
import { Calls } from '@core/models/calls/calls';
import { MatDialog } from '@angular/material/dialog';
import { CommunicationCallsService } from '../../services/communication/communication.service';
import { DialogFormCallsComponent } from '../../utils/dialog-form-calls/dialog-form-calls.component';

@Component({
  selector: 'app-calls-page',
  templateUrl: './calls-page.component.html',
  styleUrls: ['./calls-page.component.css']
})
export class CallsPageComponent implements OnInit {

  idCalls: number = -1;
  actionForm: string = "create";
  dataSource?: Calls[];
  constructor(
    private dialog: MatDialog,
    private callsService: CallsService,
    private communicationCallsService: CommunicationCallsService
  ) {

    this.communicationCallsService.dataLoadingCallscurrent.subscribe((active) => {
      if (active) {
        this.onGetDataCalls();
      }
    })

  }

  ngOnInit(): void {
    this.onGetDataCalls();
  }

  onGetDataCalls(): void {
    this.callsService.getCalls().subscribe
      ((res) => {
        this.dataSource = res;
      }, (err) => { })
  }

  openDialog(): void {
    this.dialog.open(DialogFormCallsComponent, {
      data: {
        title: "Crear comunicación",
        titleButton: "Guardar",
        id: this.idCalls,
        actionForm: this.actionForm
      },
      width: '50%'
    });
  }

}
