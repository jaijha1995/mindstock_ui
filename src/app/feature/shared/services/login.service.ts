import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { API_CONSTANTS } from '../constant/API.Constants';
import { ApiService } from '../../http-services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService:ApiService) { }

  login(payload:any){
    const url = API_CONSTANTS.login
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  emailotp(payload:any){
    const url = API_CONSTANTS.emailOtp
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  verifyemailOtp(payload:any){
    const url = API_CONSTANTS.verifyOtp
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  mobileOtp(payload:any){
    const url = API_CONSTANTS.mobileOtp
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  verifyMobileOtp(payload:any){
    const url = API_CONSTANTS.verifymobileOtp
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  getHeaderMenu(){
    const url = API_CONSTANTS.menuList
    return this.apiService
    .get(url)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }
}
