import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { EditPostComponent } from './admin/components/edit-post/edit-post.component';
import { Page1Component } from './admin/components/page1/page1.component';
import { CreateComponent } from './admin/components/posts/create/create.component';
import { DetailComponent } from './admin/components/posts/detail/detail.component';
import { EditComponent } from './admin/components/posts/edit/edit.component';
import { ListComponent } from './admin/components/posts/list/list.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'posts',
    component: ListComponent
  },
  {
    path: 'posts/create',
    component: CreateComponent
  },
  {
    path: 'posts/edit/:postId',
    component: EditComponent
  },
  {
    path: 'posts/detail/:postId',
    component: DetailComponent
  },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
