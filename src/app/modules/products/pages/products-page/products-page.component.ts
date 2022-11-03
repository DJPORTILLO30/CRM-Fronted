import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '@modules/products/dialog/dialog.component';
import { ApiService } from '@shared/services/servicesproducts/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'Category', 'Price', 'Feature', 'Accion'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api : ApiService) { 

  }

  ngOnInit(): void {
    this.getProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getProducts()
      }
    })
  }

  getProducts(){
    this.api.getProduct()
    .subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        alert("Error recuperando los registros")
      }
    })
  }

  updateProducts(row: any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      this.getProducts();
    })
  }

  deleteProducts(id : number){
    this.api.deleteProducts(id)
    .subscribe({
      next: (res) => {
        alert("Producto Eliminado Exitosamente");
        this.getProducts();
      },
      error: () =>{
        alert("Error al Eliminar el Producto");
      }

    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}