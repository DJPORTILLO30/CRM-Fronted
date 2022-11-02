import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { BussniesRoutingModule } from './bussnies-routing.module';
import { BussniesPageComponent } from './pages/bussnies-page/bussnies-page.component';
import { DialogFormBussinesComponent } from './utils/dialog-form-bussines/dialog-form-bussines.component';

@NgModule({
  declarations: [
    BussniesPageComponent,
    DialogFormBussinesComponent
  ],
  imports: [
    CommonModule,
    BussniesRoutingModule,
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
export class BussniesModule { }
