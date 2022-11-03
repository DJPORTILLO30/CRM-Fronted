import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectCampaignsService {

  constructor() { }

  private LoadCampaigns = new BehaviorSubject<any>(false);
  LoadCurrentCampaigns = this.LoadCampaigns.asObservable();

  setDataCampaigns(value: any): void {
    this.LoadCampaigns.next(value);
  }
}
