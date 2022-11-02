import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationBussinesService {

  constructor() { }

  private dataLoadingBussines = new BehaviorSubject<any>(false);
  dataLoadingBussinescurrent = this.dataLoadingBussines.asObservable();


  setDataBussines(value: any): void {
    this.dataLoadingBussines.next(value);
  }

}
