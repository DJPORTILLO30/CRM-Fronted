import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from '@modules/auth/services/register-user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({})
  constructor(private registerService: RegisterUserService) { }

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

  sendData():void{
    const body = this.formRegister.value
    console.log('CAPTURANDO', body)
  }

}
