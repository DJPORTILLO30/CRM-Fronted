import { Component, OnInit,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactModel } from '@core/models/contacts/contacts.model';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent implements OnInit {

  dataContact!: ContactModel;

  constructor(@Inject(MAT_DIALOG_DATA) private data: ContactModel) {
    this.dataContact = data;
  }

  ngOnInit(): void {
  }

}
