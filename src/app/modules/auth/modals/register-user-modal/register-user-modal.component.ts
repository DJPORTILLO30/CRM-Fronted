import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createUserDTO } from '@core/models/user';
import { RegisterUserService } from '@modules/auth/services/register-user.service';

@Component({
  selector: 'app-register-user-modal',
  templateUrl: './register-user-modal.component.html',
  styleUrls: ['./register-user-modal.component.css']
})
export class RegisterUserModalComponent implements OnInit {
  formRegisterUser: FormGroup = new FormGroup({})
  constructor(private userService:RegisterUserService ) { }

  ngOnInit(): void {
    this.formRegisterUser = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('',[
        Validators.required
      ]),
      company: new FormControl('',[
        Validators.required
      ]),
      role: new FormControl('',[
        Validators.required
      ]),
      state: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ]),
    })
  }

  createNewUser(){
    const user: createUserDTO={
      name: this.formRegisterUser.value.name,
      email:this.formRegisterUser.value.email,
      phone:this.formRegisterUser.value.phone,
      company:this.formRegisterUser.value.company,
      role:this.formRegisterUser.value.role,
      state:this.formRegisterUser.value.state,
      password:this.formRegisterUser.value.password
    }
    this.userService.registerUser(user)
    .subscribe(data =>{
      console.log('CREATED', user)
      window.location.reload()
    })
  }
  closeModalUser(){
    this.userService.modalUser.emit(false)
  }
}
