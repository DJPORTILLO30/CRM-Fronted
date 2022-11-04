import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BussinesService } from '../../services/bussines/bussines.service';
import { Bussines } from '@core/models/bussines/bussines';
import { CommunicationBussinesService } from '@modules/bussnies/services/communication/communication.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog-form-bussines',
  templateUrl: './dialog-form-bussines.component.html',
  styleUrls: ['./dialog-form-bussines.component.css']
})
export class DialogFormBussinesComponent implements OnInit {

  form!: FormGroup;
  dataDialog!: { title: string, titleButton: string, id: number, actionForm: string };
  selectedBussines!: Bussines | any;

  constructor(
    private formbuilder: FormBuilder,
    private bussinesService: BussinesService,
    private communicationBussinesService: CommunicationBussinesService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogFormBussinesComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { title: string, titleButton: string, id: number, actionForm: string },
  ) {
    this.dataDialog = data;
  }

  ngOnInit(): void {
    if (this.data.actionForm === "edit") {
      this.bussinesService.getBussinesSingle(this.data.id).subscribe(
        (res) => {
          this.selectedBussines = res.data;
          this.form = this.formbuilder.group({
            id: [this.selectedBussines.id],
            name: [this.selectedBussines.name, Validators.required],
            contactName: [this.selectedBussines.contactName, Validators.required],
            description: [this.selectedBussines.description, Validators.required],
            amount: [this.selectedBussines.amount, Validators.required],
            income: [this.selectedBussines.income, Validators.required],
            closingDate: [this.formatDate(this.selectedBussines.closingDate), Validators.required],
            campaingSource: [this.selectedBussines.campaingSource, Validators.required]
          })
        }, (err) => {
          console.log(err);
        })
    }
    this.form = this.formbuilder.group({
      id: [null],
      name: ['', Validators.required],
      contactName: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      income: ['', Validators.required],
      closingDate: ['', Validators.required],
      campaingSource: ['', Validators.required]
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
  onSubmit(): void {
    if (this.data.actionForm.trim().toLocaleLowerCase() === "delete") {
      this.bussinesService.deleteBussines(this.data.id).subscribe(
        (res) => {
          this.openSnackBar("Se ha eliminado el negocio", "Cerrar");
          this.communicationBussinesService.setDataBussines(true);
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
      this.bussinesService.createBussines(this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha creado un nuevo negocio", "Cerrar");
          this.communicationBussinesService.setDataBussines(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
      return;
    } else if (this.data.actionForm.trim().toLocaleLowerCase() === "edit") {
      this.bussinesService.editBussines(this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha editado el negocio", "Cerrar");
          this.communicationBussinesService.setDataBussines(true);
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

