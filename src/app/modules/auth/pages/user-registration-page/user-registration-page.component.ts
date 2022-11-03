import { Component, OnInit } from '@angular/core';
import { Permission } from '@core/models/permission';
import { User } from '@core/models/user';
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
  constructor(private usersService:RegisterUserService, private router:Router) { }
  modalSwitchPermission: boolean = false;

  ngOnInit(): void {
    this.getAllusers();
    
  }
  getAllusers(){
    this.usersService.getAllUsers()
    .subscribe((data:any)=>{
      this.users = data.data
      console.log('INFO USUARIOS', data.data)
    })
  }
  deleteUser(id:number){
    this.usersService.deleteUser(id) 
    .subscribe(data =>{
    })
    window.location.reload()
  }




  

}
