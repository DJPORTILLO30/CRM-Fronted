import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CallsService } from '../../services/calls/calls.service';
import { CommunicationCallsService } from '../../services/communication/communication.service';
import { Calls } from '@core/models/calls/calls';


@Component({
  selector: 'app-dialog-form-calls',
  templateUrl: './dialog-form-calls.component.html',
  styleUrls: ['./dialog-form-calls.component.css']
})
export class DialogFormCallsComponent implements OnInit {

  form!: FormGroup;
  dataDialog!: { title: string, titleButton: string, id: number, actionForm: string };
  selectedCalls!: Calls | any;

  constructor(
    private formbuilder: FormBuilder,
    private callsService: CallsService,
    private communicationCallsService: CommunicationCallsService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogFormCallsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { title: string, titleButton: string, id: number, actionForm: string },
  ) {
    this.dataDialog = data;
  }

  ngOnInit(): void {
    if (this.data.actionForm === "edit") {
      this.callsService.getCallsSingle(this.data.id).subscribe(
        (res) => {
          this.selectedCalls = res.data;
          this.form = this.formbuilder.group({
            id: [this.selectedCalls.id],
            contactName: [this.selectedCalls.contactName, Validators.required],
            description: [this.selectedCalls.description, Validators.required],
            comunicationDate: [this.formatDate(this.selectedCalls.comunicationDate), Validators.required],
            comunicationHour: [this.formatHour(this.selectedCalls.comunicationDate), Validators.required],
          })
        }, (err) => {
          console.log(err);
        })
    }
    this.form = this.formbuilder.group({
      id: [null],
      contactName: ['', Validators.required],
      description: ['', Validators.required],
      comunicationDate: ['', Validators.required],
      comunicationHour: ['', Validators.required],
    })
  }

  formatDate(date: string): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  formatHour(date: string): string {
    const d = new Date(date);
    let hour = '' + (d.getHours());
    let minute = '' + (d.getMinutes());
    return [hour, minute.length === 1 ? "0" + minute : minute].join(':');
  }
  onSubmit(): void {
    if (this.data.actionForm.trim().toLocaleLowerCase() === "delete") {
      this.callsService.deleteCalls(this.data.id).subscribe(
        (res) => {
          this.openSnackBar("Se ha eliminado el negocio", "Cerrar");
          this.communicationCallsService.setDataBussines(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
    }
    if (!this.form.valid) {
      this.openSnackBar("Rellene todos los campos solicitados", "Cerrar");
      return;
    }
    const body: Calls = {
      id: this.form.value.id,
      contactName: this.form.value.contactName,
      description: this.form.value.description,
      comunicationDate: (this.form.value.comunicationDate + " " + this.form.value.comunicationHour).trim()
    }
    if (this.data.actionForm.trim().toLocaleLowerCase() === "create") {
      this.callsService.createCalls(body).subscribe(
        (res) => {
          this.openSnackBar("Se ha creado un nuevo negocio", "Cerrar");
          this.communicationCallsService.setDataBussines(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
      return;
    } else if (this.data.actionForm.trim().toLocaleLowerCase() === "edit") {
      this.callsService.editCalls(body).subscribe(
        (res) => {
          this.openSnackBar("Se ha editado el negocio", "Cerrar");
          this.communicationCallsService.setDataBussines(true);
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

