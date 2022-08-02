import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Page1Component } from './components/page1/page1.component';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './components/edit-post/edit-post.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Page1Component,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
