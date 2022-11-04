import { ContactsService } from './../../../contacs/services/contacts.service';
import { CampaignService } from './../../../campaign/services/campaign.service';
import { CampaignModel } from '@core/models/campaigns/campaign.model';
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
  mockCampagin: Array<CampaignModel> = [];

  constructor(private bussnies: BussinesService , private calls: CallsService, private campaign : CampaignService, private contacts: ContactsService) { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.loadAllDaContacs();
    this.loadAllDataBussnies();
    this.loadAllDataCalls();
    this.loadAllDataCampaign();
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


  loadAllDaContacs(): void {
    this.contacts.getAllContacs$()
    .subscribe((response : ContactsModel[]) => {
      this.mockContactList = response
    })
  }

  loadAllDataCampaign(): void {
    this.campaign.getAllCampaign$()
    .subscribe((response : CampaignModel[]) => {
      this.mockCampagin = response
    })
  }
}
