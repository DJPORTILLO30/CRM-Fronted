import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUserDTO } from '@core/models/user';
import { RegisterUserService } from '@modules/auth/services/register-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({})
  constructor(private registerService: RegisterUserService, private router: Router) { }

  ngOnInit(): void {
    
    this.formRegister = new FormGroup({
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
      name: this.formRegister.value.name,
      email:this.formRegister.value.email,
      phone:this.formRegister.value.phone,
      company:this.formRegister.value.company,
      role:this.formRegister.value.role,
      state:this.formRegister.value.state,
      password:this.formRegister.value.password
    }
    this.registerService.registerUser(user)
    .subscribe(data => {
      console.log('CREATED',user)
      this.router.navigate(['/','contacs'])
    })
  }
}
