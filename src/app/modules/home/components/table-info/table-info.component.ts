import { ContactsModel } from '@core/models/contacts.model';
import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  @Input() dataContacts: Array<ContactsModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
