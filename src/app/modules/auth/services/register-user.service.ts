import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUserDTO, User } from '@core/models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class RegisterUserService {

  private readonly URL = environment.api
  
  constructor(private http: HttpClient) { }

  registerUser(data: createUserDTO){
     return this.http.post<User>(`${this.URL}/usuarios/register`,data);
  }

  getAllUsers(){
    return this.http.get<User[]>(`${this.URL}/usuarios`)
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}/usuarios/${id}`)

  }

}
