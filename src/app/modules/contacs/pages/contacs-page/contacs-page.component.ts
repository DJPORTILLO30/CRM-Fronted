import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '@modules/contacs/utils/contact-form/contact-form.component';
import { ContactsService } from '../../services/contacts.service';
import { ContactModel } from '@core/models/contacts/contacts.model';
import { ConectContactService } from '../../services/conect/conect-contact.service';

@Component({
  selector: 'app-contacs-page',
  templateUrl: './contacs-page.component.html',
  styleUrls: ['./contacs-page.component.css']
})
export class ContacsPageComponent implements OnInit {

  idContact: number = -1;
  actionForm: string = "create";
  dataSource?: ContactModel[];

  constructor(
    private dialog: MatDialog,
    private ContactsService: ContactsService,
    private ConectContactService: ConectContactService
  ) {

    this.ConectContactService.LoadCurrentContacts.subscribe((active) => {
      if (active) {
        this.onGetDataContacts();
      }
    })
    

  }

  ngOnInit(): void {
    this.onGetDataContacts();
  }

  onGetDataContacts(): void {
    this.ContactsService.getContacts().subscribe
      ((res) => {
        this.dataSource = res;
      }, (err) => { })
  }

  openDialog(): void {
    this.dialog.open(ContactFormComponent, {
      data: {
        title: "Crear Contacto",
        titleButton: "Guardar",
        id: this.idContact,
        actionForm: this.actionForm
      },
      width: '50%'
    });
  }
}
