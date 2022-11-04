import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@shared/services/servicesproducts/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productsForm!: FormGroup;
  actionBtn: String = 'Save';

  constructor(private formbuilder : FormBuilder, 
    private api: ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogComponent> ) { }

  ngOnInit(): void {

    this.productsForm = this.formbuilder.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      Category : ['', Validators.required],
      Price : ['', Validators.required],
      Feature : ['', Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.productsForm.controls['name'].setValue(this.editData.name);
      this.productsForm.controls['description'].setValue(this.editData.description);
      this.productsForm.controls['Category'].setValue(this.editData.Category);
      this.productsForm.controls['Price'].setValue(this.editData.Price);
      this.productsForm.controls['Feature'].setValue(this.editData.Feature);
    }

  }

  insertProducts(){
    if(!this.editData){
      if(this.productsForm.valid){
        this.api.insertProducts(this.productsForm.value)
        .subscribe({
          next: (res) =>{
            alert("Producto agregado exitosamente"),
            this.productsForm.reset();
            this.dialogRef.close('save');
          },
          error: () =>{
            alert("Error agregando el producto")
          }
        })
      }
    }
    
    
    else{
      this.updateProducts()
    }
  }

  updateProducts(){
    this.api.UpdateProducts(this.productsForm.value, this.editData.id)
    .subscribe({
      next: (res) =>{
        alert("Producto Modificado Exitosamente");
        this.productsForm.reset();
        this.dialogRef.close('update');
      },
      error: () =>{
        alert("Error al Modificar el Producto");
      }
    })
  }



}
