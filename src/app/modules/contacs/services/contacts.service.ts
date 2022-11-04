import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '@core/models/contacts/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  URL: string = `${environment.api}/contacts`;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(this.URL);
  }
  getContact(id: number): Observable<any> {
    return this.http.get<any>(this.URL + "/" + id);
  }
  createContact(item: ContactModel): Observable<any> {
    return this.http.post<any>(this.URL, item);
  }
  modifyContact(id:number, value:any): Observable<any> {
    const path = this.URL + "/" + id;
    return this.http.put<any>(path, value );
  }
  deleteContact(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}