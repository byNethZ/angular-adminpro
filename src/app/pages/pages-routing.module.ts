import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaOneComponent } from './grafica-one/grafica-one.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  // { path: 'pages', loadChildren: () => import('./pages.module').then(m => m.PagesModule) }
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:{ title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data:{ title: 'Progress' } },
      { path: 'grafica-one', component: GraficaOneComponent, data:{ title: 'Grafica One' } },
      { path: 'account-settings', component: AccountSettingsComponent, data:{ title: 'Account Settings' } },
      { path: 'promises', component: PromisesComponent, data:{ title: 'Promises' } },
      { path: 'rxjs', component: RxjsComponent, data:{ title: 'RXJS' } },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PagesRoutingModule { }
