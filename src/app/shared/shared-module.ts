import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from '../layout/main-layout/main-layout';
import { Sidebar } from '../layout/sidebar/sidebar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayout,
    Sidebar
  ]
})
export class SharedModule { }
