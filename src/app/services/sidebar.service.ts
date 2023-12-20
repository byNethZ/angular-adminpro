import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Graphics', url: '/dashboard/grafica-one' },
        { title: 'ProgressBar', url: '/dashboard/progress' },
        { title: 'Promesas', url: '/dashboard/promises' },
        { title: 'RXJS', url: '/dashboard/rxjs' },
      ]
    }
  ];

  constructor() { }
}
