import { Component, OnInit } from '@angular/core';
import { ContactsModel } from '@core/models/contacts.model';
import * as dataRaw  from '../../../../data/contacts.json'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mockContactList: Array<ContactsModel> = [];

  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.mockContactList = data
  }

}
