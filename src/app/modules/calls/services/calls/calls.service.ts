import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calls } from '@core/models/calls/calls';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  urlBase: string = environment.api + "/llamadas";

  constructor(private http: HttpClient) { }

  getAllCalls$(): Observable<any> {
    return this.http.get(this.urlBase)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }


  getCalls(): Observable<Calls[]> {
    return this.http.get<Calls[]>(this.urlBase);
  }

  getCallsSingle(id: number): Observable<any> {
    return this.http.get<any>(this.urlBase + "/" + id);
  }

  createCalls(item: Calls): Observable<any> {
    return this.http.post<any>(this.urlBase, item);
  }

  editCalls(item: Calls): Observable<any> {
    return this.http.put<any>(this.urlBase + "/" + item.id, item);
  }

    deleteCalls(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBase + "/" + id);
  }

}
