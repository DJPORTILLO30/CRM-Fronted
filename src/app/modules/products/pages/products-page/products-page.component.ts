import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsElement } from '@shared/interfaces/product';
import { ProductsExampleService } from '@shared/services/products-example.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {

  ListaProductos: ProductsElement[] = [];

  // Exportando datos de prueba.
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Categoria', 'Precio', 'Caracteristica', 'Acciones'];
  dataSource = MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productsexampleservice: ProductsExampleService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.ListaProductos = this._productsexampleservice.getproducts();

  }
  
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }


}
