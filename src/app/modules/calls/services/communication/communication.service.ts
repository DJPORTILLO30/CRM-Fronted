import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationCallsService {

  constructor() { }

  private dataLoadingCalls = new BehaviorSubject<any>(false);
  dataLoadingCallscurrent = this.dataLoadingCalls.asObservable();


  setDataBussines(value: any): void {
    this.dataLoadingCalls.next(value);
  }

}
