import { HttpClient } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createRoleDTO, Role } from '@core/models/roles'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private readonly URL = environment.api

  constructor(private http:HttpClient) { }
  modalRole = new EventEmitter<any>();

  getAllRoles(){
    return this.http.get<Role[]>(`${this.URL}/roles`)
  }

  registerRole(data: createRoleDTO){
    return this.http.post<Role>(`${this.URL}/roles`,data)
  }

}
