import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:DashComponent,pathMatch:'full'},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
