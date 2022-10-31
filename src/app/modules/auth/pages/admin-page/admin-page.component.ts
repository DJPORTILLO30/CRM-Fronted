import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({})

  
  errorSession: boolean = false

  constructor(private authService: AuthService, private cookie:CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
  
        ])
      }
    )
  }


sendLogin():void{
  const {email, password} = this.formLogin.value
  this.authService.sendCredentials(email, password)
  .subscribe(responseOK =>{
    console.log('SESIÓN INICIADA CORRECTAMENTE',responseOK)
    const {data} = responseOK
    const {token} = data
    this.cookie.set('token', token, 2, '/')
    this.router.navigate(['/','auth','info-users'])

  },
  err =>{
    this.errorSession = true
    console.log('NO SE PUDO INICIAR SESIÓN')
  })
}

}
