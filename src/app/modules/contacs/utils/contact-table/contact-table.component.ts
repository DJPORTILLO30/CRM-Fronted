import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactModel } from '@core/models/contacts/contacts.model';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactDataComponent } from '../contact-data/contact-data.component';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  displayedColumns: string[] = ['ownerContact','email','phone', 'address', 'description',"options"];
  @Input() dataSource: ContactModel[] | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onTransferdataDialog(option: string, idContact: number): void {
    this.dialog.open(ContactFormComponent, {
      data: {
        title: (option === "edit") ? "Editar Contacto" : "Eliminar Contacto",
        titleButton: (option === "edit") ? "Editar" : "Eliminar",
        id: idContact,
        actionForm: option
      },
      width: '50%'
    });
  }
  onGetData(element: ContactModel): void {
    this.dialog.open(ContactDataComponent, {
      data: element,
      width: '50%'
    });
  }

}
