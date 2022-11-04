import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {


  mainMenu: {
    defaultOptions: Array<any>,
  } = { defaultOptions: [] }

  constructor() { }

  ngOnInit(): void {


    this.mainMenu.defaultOptions = [
      {
        name: 'Inicio',
        icon: 'uil uil-file-landscape-alt',
        router: ['/', 'dashboard']
      },
      {
        name: 'Productos',
        icon: 'uil uil-clipboard-notes',
        router: ['/', 'products']
      },
      {
        name: 'Negocios',
        icon: 'uil uil-wallet',
        router: ['/', 'bussnies']
      },
      {
        name: 'Campañas',
        icon: 'uil uil-shop',
        router: ['/', 'campaign'],
      },
      {
        name: 'Contactos',
        icon: 'uil uil-user-circle',
        router: ['/', 'contacs'],
      },
      {
        name: 'Comunicaciones',
        icon: 'uil uil-phone-volume',
        router: ['/', 'calls'],
      }
    ]

  }

}
