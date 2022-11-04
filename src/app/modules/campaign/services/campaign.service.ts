import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CampaignModel } from '@core/models/campaigns/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  URL: string = `${environment.api}/campaigns`;


  constructor(private http: HttpClient) { }

  getAllCampaign$(): Observable<any> {
    return this.http.get(this.URL)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  getCampaigns(): Observable<CampaignModel[]> {
    return this.http.get<CampaignModel[]>(this.URL);
  }
  getCampaign(id: number): Observable<any> {
    return this.http.get<any>(this.URL + "/" + id);
  }
  createCampaign(item: CampaignModel): Observable<any> {
    return this.http.post<any>(this.URL, item);
  }

  modifyCampaign(id:number, value:any): Observable<any> {
    const path = this.URL + "/" + id;
    return this.http.put<any>(path, value );
  }

  deleteCampaign(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + "/" + id);
  }
}

