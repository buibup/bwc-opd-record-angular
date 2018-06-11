import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject, pipe, throwError } from 'rxjs';
import { map, takeUntil, tap, catchError } from 'rxjs/operators';
import { PatientInfoVM } from '../models/patient-info-vm.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientInfoVM = PatientInfoVM;

  url = 'http://localhost:63402/api/OpdRecord/';

  constructor(private http: Http) { }

  getPatientInfoByPapmiNo(papmiNo: string) {
    papmiNo = '81-17-000301';
    return this.http.get(this.url + 'GetPatientInfoByPapmiNo/' + papmiNo + '/DoctorPanel/inactive/');
    pipe(
      map((data: Response) => {
      return data.json();
    }), catchError( error => {
      return throwError(error);
    }));
  }
}
