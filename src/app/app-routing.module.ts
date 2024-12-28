import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './feature/shared/layout/main-layout/main-layout.component';
import { HomePageComponent } from './feature/shared/components/home-page/home-page.component';
import { SignupPageComponent } from './feature/shared/components/signup-page/signup-page.component';
import { LoginPageComponent } from './feature/shared/components/login-page/login-page.component';
import { CustomerLayoutComponent } from './feature/shared/layout/customer-layout/customer-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path:'signup',component:SignupPageComponent
  },
  {
    path:'', 
    component:MainLayoutComponent ,
    children: [
      {
        path:'', component: HomePageComponent
      },
    ]
  },

  {
    path: 'User',
    component: CustomerLayoutComponent,    
    loadChildren: () =>
      import('./feature/user//user.module').then(
        (mod) => mod.UserModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
