import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bussines } from '@core/models/bussines/bussines';

@Component({
  selector: 'app-dialog-data-bussines',
  templateUrl: './dialog-data-bussines.component.html',
  styleUrls: ['./dialog-data-bussines.component.css']
})
export class DialogDataBussinesComponent implements OnInit {

  dataBussins!: Bussines;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Bussines) {
    this.dataBussins = data;
  }

  ngOnInit(): void { }

}
