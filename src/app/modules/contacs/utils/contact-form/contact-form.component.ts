import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';
import { ContactModel } from '@core/models/contacts/contacts.model';
import { ConectContactService } from '@modules/contacs/services/conect/conect-contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form!: FormGroup;
  dataDialog!: { title: string, titleButton: string, id: number, actionForm: string };
  selectedContact!: ContactModel | any;

  constructor(
    private formbuilder: FormBuilder,
    private ContactsService: ContactsService,
    private ConectContactService: ConectContactService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { title: string, titleButton: string, id: number, actionForm: string },
  ) {
    this.dataDialog = data;
  }

  ngOnInit(): void {
    if (this.data.actionForm === "edit") {
      this.ContactsService.getContact(this.data.id).subscribe(
        (res) => {
          this.selectedContact = res.data;
          this.form = this.formbuilder.group({
            ownerContact: [this.selectedContact.ownerContact, Validators.required],
            email: [this.selectedContact.email, Validators.required],
            phone: [this.selectedContact.phone, Validators.required],
            department: [this.selectedContact.department, Validators.required],
            address: [this.selectedContact.address, Validators.required],
            description: [this.selectedContact.description, Validators.required],
          })
        }, (err) => {
          console.log(err);
        })
    }
    this.form = this.formbuilder.group({
      ownerContact: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required]
    })

    
  }

  onSubmit(): void {
    if (this.data.actionForm.trim().toLocaleLowerCase() === "delete") {
      this.ContactsService.deleteContact(this.data.id).subscribe(
        (res) => {
          this.openSnackBar("Se ha eliminado el contacto", "Cerrar");
          this.ConectContactService.setDataContacts(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
    }
    if (!this.form.valid) {
      this.openSnackBar("Rellene todos los campos solicitados", "Cerrar");
      return;
    }
    if (this.data.actionForm.trim().toLocaleLowerCase() === "create") {
      this.ContactsService.createContact(this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha creado un nuevo contacto", "Cerrar");
          this.ConectContactService.setDataContacts(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
      return;
    } else if (this.data.actionForm.trim().toLocaleLowerCase() === "edit") {
      this.ContactsService.modifyContact(this.data.id,this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha editado el contacto", "Cerrar");
          this.ConectContactService.setDataContacts(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
      return;
    }

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
  

}
