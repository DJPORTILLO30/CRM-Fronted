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
        icon: 'uil uil-estate',
        router: ['/', '/']
      },
      {
        name: 'Productos',
        icon: 'uil uil-search',
        router: ['/', 'products']
      },
      {
        name: 'Negocios',
        icon: 'uil uil-chart',
        router: ['/', 'bussnies']
      },
      {
        name: 'Campañas',
        icon: 'uil uil-chart',
        router: ['/', 'campaign'],
      },
      {
        name: 'Contactos',
        icon: 'uil uil-chart',
        router: ['/', 'contacs'],
      },
      {
        name: 'Comunicaciones',
        icon: 'uil uil-chart',
        router: ['/', 'calls'],
      }
    ]

  }

}
