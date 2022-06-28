import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    DashComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
