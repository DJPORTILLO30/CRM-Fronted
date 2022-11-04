import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createRoleDTO } from '@core/models/roles';
import { RolesService } from '@modules/administration/services/roles.service';

@Component({
  selector: 'app-register-roles-modal',
  templateUrl: './register-roles-modal.component.html',
  styleUrls: ['./register-roles-modal.component.css']
})
export class RegisterRolesModalComponent implements OnInit {
  formRegisterRole: FormGroup = new FormGroup({})
  constructor(private rolesService:RolesService, private router:Router) { }

  ngOnInit(): void {
    this.formRegisterRole = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ]),
    })
  }

  createNewRole(){
    const role: createRoleDTO={
      name: this.formRegisterRole.value.name,
      description: this.formRegisterRole.value.description
    }
    this.rolesService.registerRole(role)
    .subscribe(data =>{
      console.log('CREATED', role);
      window.location.reload()
    })
  }

  closeModalR(){
    this.rolesService.modalRole.emit(false)
  }
}
