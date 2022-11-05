import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
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
      this.router.navigate(['/dashboard'])

    },
    err =>{
      this.errorSession = true
      console.log('NO SE PUDO INICIAR SESIÓN')
    })
  }

}
