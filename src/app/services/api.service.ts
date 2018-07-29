import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { PatientInfoVM } from '../models/patient-info-vm.model';
import { DoctorPanel } from '../models/doctor-panel.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient) {}

  public getPatientInfoByPapmiNo(papmiNo: string): Observable<PatientInfoVM> {
    try {
      return this.http
        .get<any>(
          this.baseUrl +
            `api/OpdRecord/GetPatientInfoByPapmiNo/${papmiNo}/DoctorPanel/inactive/`
        )
        .pipe(
          tap(
            // Log the result or error
            // data => console.log(data),
            error => console.log(error)
          ),
          catchError(this.handleError('getPatientInfoByPapmiNo', []))
        );
    } catch (error) {
      console.log(error);
    }
  }

  public getDoctorPanelByEpiRowId(epiRowId: number): Observable<DoctorPanel> {
    return this.http.get<any>(
      this.baseUrl + `api/OpdRecord/GetDoctorPanelByEpiRowId/${epiRowId}`
    );
  }

  public getDocumentContentType(hn: string, path: any) {
    return this.http.get(
      this.baseUrl + `api/OpdRecord/GetDocumentContentType/${hn}/${path}`,
      {
        responseType: 'text'
      }
    );
  }

  public getDocumentUrl(hn: string, path: any) {
    return `${this.baseUrl}api/OpdRecord/GetDocument/${hn}/${path}`;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 500) {
        return Observable.throw(new Error(error.status));
      } else if (error.status === 400) {
        return Observable.throw(new Error(error.status));
      } else if (error.status === 409) {
        return Observable.throw(new Error(error.status));
      } else if (error.status === 406) {
        return Observable.throw(new Error(error.status));
      }

      // TODO: send the error to remote logging infrastructure
      // console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
