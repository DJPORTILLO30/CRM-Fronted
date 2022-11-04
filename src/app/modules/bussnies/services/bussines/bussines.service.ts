import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bussines } from '@core/models/bussines/bussines';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BussinesService {

  urlBase: string = environment.api + "/negocio";

  constructor(private http: HttpClient) { }

  getBussines(): Observable<Bussines[]> {
    return this.http.get<Bussines[]>(this.urlBase);
  }

  getBussinesSingle(id: number): Observable<any> {
    return this.http.get<any>(this.urlBase + "/" + id);
  }

  createBussines(item: Bussines): Observable<any> {
    return this.http.post<any>(this.urlBase, item);
  }

  editBussines(item: Bussines): Observable<any> {
    return this.http.put<any>(this.urlBase + "/" + item.id, item);
  }

  deleteBussines(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBase + "/" + id);
  }

}
