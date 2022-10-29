import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class RegisterUserService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendUser(name:string, email:string, phone:string, company:string, role:string, state:string, password: string):Observable<any>{
    const body={
      name,
      email,
      phone,
      company,
      role,
      state,
      password
    }
    return this.http.post(`${this.URL}/usuarios/register`, body)
  }

}


