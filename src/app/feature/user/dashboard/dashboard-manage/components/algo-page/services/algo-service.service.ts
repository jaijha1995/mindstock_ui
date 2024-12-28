import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../http-services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { API_CONSTANTS } from '../../../../../../shared/constant/API.Constants';

@Injectable({
  providedIn: 'root'
})
export class AlgoServiceService {

  constructor(private apiService:ApiService) { }

  connectMetaFive(payload:any){
    const url = API_CONSTANTS.metaFive
    return this.apiService
    .post(url, payload)
    .pipe(catchError((error: HttpErrorResponse) => of(error)));
  }
}
