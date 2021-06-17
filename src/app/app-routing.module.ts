import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login/login.component';
import {AuthGuardService} from './backend/auth-guard.service';
import {CurriculumComponent} from './projects/curriculum/curriculum.component';
import {FiltersComponent} from './projects/filters/filters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'filters',
    component: FiltersComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'curriculum',
    component: CurriculumComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
