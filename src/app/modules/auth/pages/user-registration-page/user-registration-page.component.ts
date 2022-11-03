import { Component, OnInit } from '@angular/core';
import { Permission } from '@core/models/permission';
import { User } from '@core/models/user';
import { PermissionsService } from '@modules/auth/services/permissions.service';
import { RegisterUserService } from '@modules/auth/services/register-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.css']
})
export class UserRegistrationPageComponent implements OnInit {
  permissions: Array<Permission> = [];
  users: Array<User> = [];
  constructor(private usersService:RegisterUserService, private permissionsService: PermissionsService, private router:Router) { }
  modalSwitchPermission: boolean = false;

  ngOnInit(): void {
    this.getAllPermissions();
    this.closeModalPermissionsR();
    this.getAllusers();
 
  }
  getAllusers(){
    this.usersService.getAllUsers()
    .subscribe((data:any)=>{
      this.users = data.data
      console.log('INFO USUARIOS', data.data)
    })
  }

  getAllPermissions(){
    this.permissionsService.getAllPermissions()
    .subscribe((data:any) => {
      this.permissions = data.data
      console.log('Info permisos', data.data)
    })
  }
  openModalPermission(){
    this.modalSwitchPermission=true;
  }


  closeModalPermissionsR(){
    this.permissionsService.modalPermission
    .subscribe(response =>{
      this.modalSwitchPermission = response
    })
  }


}
