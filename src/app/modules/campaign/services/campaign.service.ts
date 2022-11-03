import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CampaignModel } from '@core/models/campaigns/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  URL: string = `${environment.api}/campaigns`;

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<CampaignModel[]> {
    return this.http.get<CampaignModel[]>(this.URL);
  }
  getCampaign(id: number): Observable<any> {
    return this.http.get<any>(this.URL + "/" + id);
  }
  createCampaign(item: CampaignModel): Observable<any> {
    return this.http.post<any>(this.URL, item);
  }
  modifyCampaign(id: number): Observable<any> {
    return this.http.put<any>(this.URL + "/" + id, id);
  }
  deleteCampaign(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}

// export class ConectCampaignsService {
//   constructor() { }
//   private LoadCampaigns = new BehaviorSubject<any>(false);
//   LoadCurrentCampaigns = this.LoadCampaigns.asObservable();
//   setDataCampaigns(value: any): void {
//     this.LoadCampaigns.next(value);
//   }

// }
