import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { PatientInfoVM } from '../models/patient-info-vm.model';
import { DoctorPanel } from '../models/doctor-panel.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient) { }

  public getPatientInfoByPapmiNo(papmiNo: string): Observable<PatientInfoVM> {
    return this.http
      .get<any>(this.baseUrl + 'api/OpdRecord/GetPatientInfoByPapmiNo/' + papmiNo + '/DoctorPanel/inactive/');
  }

  public getDoctorPanelByEpiRowId(epiRowId: number): Observable<DoctorPanel> {
    return this.http
      .get<any>(this.baseUrl + 'api/OpdRecord/GetDoctorPanelByEpiRowId/' + epiRowId);
  }
}
