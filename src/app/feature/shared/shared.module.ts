import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { VerifyMobileEmailComponent } from './components/verify-mobile-email/verify-mobile-email.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    VerifyMobileEmailComponent,
    CustomerLayoutComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule ,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgSelectModule,
    ModalModule.forRoot(),
    NgxSpinnerModule.forRoot()
  ],

  exports: [
    NgSelectModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
