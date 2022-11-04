import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectContactService {

  constructor() { }

  private LoadContacts = new BehaviorSubject<any>(false);
  LoadCurrentContacts = this.LoadContacts.asObservable();

  setDataContacts(value: any): void {
    this.LoadContacts.next(value);
  }
}
