import { PatientInfoVM } from './../models/patient-info-vm.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientInfoVM = PatientInfoVM;

  url = 'http://localhost:63402/api/OpdRecord/';

  constructor(private http: HttpClient) { }

  public getPatientInfoByPapmiNo(papmiNo: string): Observable<PatientInfoVM> {
    return this.http
      .get<any>(API_URL + '/GetPatientInfoByPapmiNo' + papmiNo + '/DoctorPanel/inactive/')
      .pipe(map(result => {
        this.patientInfoVM = result.PatientInfoVM;

        return result;
      })
    );
  }
}
