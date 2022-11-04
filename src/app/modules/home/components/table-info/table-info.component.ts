import { Bussines } from '@core/models/bussines/bussines';
import { ContactsModel } from '@core/models/contacts.model';
import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  @Input() dataList: Array<any> = []
  @Input() header1: string = ''
  @Input() header2: string = ''
  @Input() header3: string = ''
  @Input() header4: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
