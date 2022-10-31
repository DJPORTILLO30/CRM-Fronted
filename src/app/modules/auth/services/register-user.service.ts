import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUserDTO, User } from '@core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class RegisterUserService {

  private readonly URL = environment.api
  
  constructor(private http: HttpClient) { }

  registerUser(data: createUserDTO){
     return this.http.post<User>(`${this.URL}/usuarios/register`,data);
  }

}

