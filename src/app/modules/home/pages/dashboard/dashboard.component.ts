import { CallsService } from './../../../calls/services/calls/calls.service';
import { Calls } from '@core/models/calls/calls';
import { BussinesService } from '@modules/bussnies/services/bussines/bussines.service';
import { Component, OnInit } from '@angular/core';
import { ContactsModel } from '@core/models/contacts.model';
import * as dataRaw  from '../../../../data/contacts.json'
import { Bussines } from '@core/models/bussines/bussines';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mockContactList: Array<ContactsModel> = [];
  mockBussniesList: Array<Bussines> = [];
  mockCallsList: Array<Calls> = [];

  constructor(private bussnies: BussinesService , private calls: CallsService) { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.mockContactList = data
    this.loadAllDataBussnies();
    this.loadAllDataCalls();
  }

  loadAllDataBussnies(): void {
    this.bussnies.getAllBussnies$()
    .subscribe((response : Bussines[]) => {
      this.mockBussniesList = response
    })
  }

  loadAllDataCalls(): void {
    this.calls.getAllCalls$()
    .subscribe((response : Calls[]) => {
      this.mockCallsList = response
    })
  }
}
