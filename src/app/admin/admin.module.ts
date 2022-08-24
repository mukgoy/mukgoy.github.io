import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { Page1Component } from './components/page1/page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ListComponent } from './components/posts/list/list.component';
import { EditComponent } from './components/posts/edit/edit.component';
import { CreateComponent } from './components/posts/create/create.component';
import { DetailComponent } from './components/posts/detail/detail.component';
import { CreateTemplateFormComponent } from './components/posts/create-template-form/create-template-form.component';
import { CreateReactiveFormComponent } from './components/posts/create-reactive-form/create-reactive-form.component';
import { ObservabaleComponent } from './components/observabale/observabale.component';



@NgModule({
  declarations: [
    DashboardComponent,
    Page1Component,
    EditPostComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    DetailComponent,
    CreateTemplateFormComponent,
    CreateReactiveFormComponent,
    ObservabaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
