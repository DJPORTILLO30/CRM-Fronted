import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.css']
})
export class UpdateUserModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // closeModalUser(){
  //   this.userService.modalUser.emit(false)
  // }
}
