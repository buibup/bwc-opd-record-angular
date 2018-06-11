import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { PatientInfoVM } from '../models/patient-info-vm.model';
// import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientInfoVM = PatientInfoVM;

  url = 'http://localhost:63402/api/OpdRecord/';

  constructor(private http: Http) { }

  public getPatientInfoByPapmiNo(papmiNo: string): PatientInfoVM {
    // return this.http
    //   .get(API_URL + '/GetPatientInfoByPapmiNo' + papmiNo + '/DoctorPanel/inactive/')
    //   .map(response => {
    //     const pts = response.json();
    //     return pts.map((pt) => new PatientInfoVM(pt));
    //   })
    //   .catch(this.handleError);

    return new PatientInfoVM();
  }
}
