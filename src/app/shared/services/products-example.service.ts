import { Injectable } from '@angular/core';
import { ProductsElement } from '@shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsExampleService {

  ListaProductos: ProductsElement[] = [
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' },
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' },
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' },
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' },
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' },
    {name: 'Sombrilla', description: 'Producto util para epoca de lluvia', Category: 'Para el hogar', Price: 95,Feature:'Negra' }
  ];

  constructor() { }

  getproducts(){
    return this.ListaProductos.slice();
  }

}
