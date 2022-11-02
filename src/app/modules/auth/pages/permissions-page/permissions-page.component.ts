import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from '@core/models/permission';
import { Role } from '@core/models/roles';
import { PermissionsService } from '@modules/auth/services/permissions.service';
import { RolesService } from '@modules/auth/services/roles.service';


@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrls: ['./permissions-page.component.css']
})
export class PermissionsPageComponent implements OnInit {
  public deleteId: number | undefined;
  permissions: Array<Permission> = [];
  roles: Array<Role> = [];
  constructor( private permissionsService: PermissionsService, private rolesService:RolesService, private router:Router) { }
  modalSwitchPermission: boolean = false;
  modalSwitchRole: boolean = false;

  ngOnInit(): void {
    this.getAllPermissions();
    this.getAllRoles();
    this.closeModalPermissionsR();
    this.closeModalRolesR();
  }


  getAllPermissions(){
    this.permissionsService.getAllPermissions()
    .subscribe((data:any) => {
      this.permissions = data.data
      console.log('Info permisos', data.data)
    })
  }

  deletePermission(id:number){
    this.permissionsService.deletePermission(id)
    .subscribe(data =>{
      console.log('DELETED', id)
    })
    //window.location.reload()
  }


  getAllRoles(){
    this.rolesService.getAllRoles()
    .subscribe((data:any) => {
      this.roles = data.data
      console.log('Info roles', data.data)
    })
  }

  openModalPermission(){
    this.modalSwitchPermission=true;
  }
  openModalRole(){
    this.modalSwitchRole=true;
  }

  closeModalPermissionsR(){
    this.permissionsService.modalPermission
    .subscribe(response =>{
      this.modalSwitchPermission = response
    })
  }

  closeModalRolesR(){
    this.rolesService.modalRole
    .subscribe(response =>{
      this.modalSwitchRole = response
    })
  }

}
