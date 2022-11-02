import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createPermissionDTO, Permission } from '@core/models/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private readonly URL = environment.api

  constructor(private http:HttpClient) { }
  modalPermission = new EventEmitter<any>();

  getAllPermissions(){
    return this.http.get<Permission[]>(`${this.URL}/permisos`)
  }

  registerPermission(data: createPermissionDTO){
    return this.http.post<Permission>(`${this.URL}/permisos`,data)
  }

  deletePermission(id:number){
    return this.http.delete<boolean>(`${this.URL}/permisos/${id}`)
  }

}
