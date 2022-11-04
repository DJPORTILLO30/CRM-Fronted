import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase: string = environment.api + "/productos";

  constructor(private http: HttpClient) { }

  insertProducts(products : any){
    return this.http.post<any>(this.urlBase, products);
  }

  getProducts(){
    return this.http.get<any>(this.urlBase);
  }
  
  UpdateProducts(data : any, id: number){
    return this.http.put<any>(this.urlBase+ "/" +id,data);
  }

  deleteProducts(id:number){
    return this.http.delete<any>(this.urlBase + "/" + id);
  }

}
