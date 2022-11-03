import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignPageComponent } from './pages/campaign-page/campaign-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { CampaignsFormComponent } from './utils/campaigns-form/campaigns-form.component';
import { CampaignsTableComponent } from './utils/campaigns-table/campaigns-table.component';
import { CampaignsDataComponent } from './utils/campaigns-data/campaigns-data.component';

@NgModule({
  declarations: [
    CampaignPageComponent,
    CampaignsFormComponent,
    CampaignsTableComponent,
    CampaignsDataComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CampaignModule { }
