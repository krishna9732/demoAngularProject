import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./page/home-page/home-page.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
