import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignService } from '../../services/campaign.service';
import { CampaignModel } from '@core/models/campaigns/campaign.model';
import { ConectCampaignsService } from '@modules/campaign/services/conect/conect-campaigns.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-campaigns-form',
  templateUrl: './campaigns-form.component.html',
  styleUrls: ['./campaigns-form.component.css']
})
export class CampaignsFormComponent implements OnInit {

  form!: FormGroup;
  dataDialog!: { title: string, titleButton: string, id: number, actionForm: string };
  selectedCampaign!: CampaignModel | any;

  constructor(
    private formbuilder: FormBuilder,
    private CampaignService: CampaignService,
    private ConectCampaignsService: ConectCampaignsService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CampaignsFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { title: string, titleButton: string, id: number, actionForm: string },
  ) {
    this.dataDialog = data;
  }

  ngOnInit(): void {
    if (this.data.actionForm === "edit") {
      this.CampaignService.getCampaign(this.data.id).subscribe(
        (res) => {
          this.selectedCampaign = res.data;
          this.form = this.formbuilder.group({
            propietarioCampania: [this.selectedCampaign.propietarioCampania, Validators.required],
            nombreCampania: [this.selectedCampaign.nombreCampania, Validators.required],
            idTipoCampania: [this.selectedCampaign.idTipoCampania, Validators.required],
            fechaInicio: [this.formatDate(this.selectedCampaign.fechaInicio), Validators.required],
            fechaFin: [this.formatDate(this.selectedCampaign.fechaFin), Validators.required],
            estado: [this.selectedCampaign.estado, Validators.required],
            descripcion: [this.selectedCampaign.descripcion, Validators.required]
          })
        }, (err) => {
          console.log(err);
        })
    }
    this.form = this.formbuilder.group({
      propietarioCampania: ['', Validators.required],
      nombreCampania: ['', Validators.required],
      idTipoCampania: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      estado: ['', Validators.required],
      descripcion: ['', Validators.required]
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
      this.CampaignService.deleteCampaign(this.data.id).subscribe(
        (res) => {
          this.openSnackBar("Se ha eliminado la campania", "Cerrar");
          this.ConectCampaignsService.setDataCampaigns(true);
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
      this.CampaignService.createCampaign(this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha creado una nueva campania", "Cerrar");
          this.ConectCampaignsService.setDataCampaigns(true);
          this.dialogRef.close();
        }, (err) => {
          console.log(err);
        })
      return;
    } else if (this.data.actionForm.trim().toLocaleLowerCase() === "edit") {
      this.CampaignService.modifyCampaign(this.data.id,this.form.value).subscribe(
        (res) => {
          this.openSnackBar("Se ha editado la campania", "Cerrar");
          this.ConectCampaignsService.setDataCampaigns(true);
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
