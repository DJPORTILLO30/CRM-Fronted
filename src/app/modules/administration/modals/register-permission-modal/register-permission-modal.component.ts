import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '@modules/administration/services/permissions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPermissionDTO, Permission } from '@core/models/permission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-permission-modal',
  templateUrl: './register-permission-modal.component.html',
  styleUrls: ['./register-permission-modal.component.css']
})
export class RegisterPermissionModalComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({})
  constructor(private permissionsService: PermissionsService,
    private router:Router ) { }

  ngOnInit(): void {
    
    this.formRegister = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ]),
    })
  }

  createNewPermission(){
    const permission: createPermissionDTO={
      name: this.formRegister.value.name,
      description: this.formRegister.value.description
    }
    this.permissionsService.registerPermission(permission)
    .subscribe(data =>{
      console.log('CREATED', permission)
      //this.router.navigateByUrl('/auth/permissions')
      window.location.reload()
    })
  }

  closeModal(){
    this.permissionsService.modalPermission.emit(false)
  }

}
