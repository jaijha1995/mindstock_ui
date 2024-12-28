import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { API_CONSTANTS } from '../constant/API.Constants';
import { ApiService } from '../../http-services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private apiService:ApiService) { }

  getSuperAdmin(): Observable<any> {
    const url = API_CONSTANTS.superAdmin
    return this.apiService
      .get(url)
      .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

  userSignup(payload:any){
    const url = API_CONSTANTS.signup
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }

}
