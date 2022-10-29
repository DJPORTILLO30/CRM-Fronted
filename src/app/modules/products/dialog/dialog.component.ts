import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productsForm!: FormGroup;

  constructor(private formbuilder : FormBuilder ) { }

  ngOnInit(): void {

    this.productsForm = this.formbuilder.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      Category : ['', Validators.required],
      Price : ['', Validators.required],
      Feature : ['', Validators.required]
    })
  }

  insertProducts(){
    console.log(this.productsForm.value);
  }

}
