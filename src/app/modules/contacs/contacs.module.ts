import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContacsRoutingModule } from './contacs-routing.module';
import { ContacsPageComponent } from './pages/contacs-page/contacs-page.component';
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
import { ContactFormComponent } from './utils/contact-form/contact-form.component';
import { ContactDataComponent } from './utils/contact-data/contact-data.component';
import { ContactTableComponent } from './utils/contact-table/contact-table.component';


@NgModule({
  declarations: [
    ContacsPageComponent,
    ContactFormComponent,
    ContactDataComponent,
    ContactTableComponent
  ],
  imports: [
    CommonModule,
    ContacsRoutingModule,
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
export class ContacsModule { }
