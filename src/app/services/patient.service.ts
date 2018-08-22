import { ApiService } from './api.service';
import { CustomerAgree } from './../models/customer.model';
import { DoctorService } from './doctor.service';
import { PatientInfoVM } from './../models/patient-info-vm.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EpisodeTree } from '../models/episode-tree.model';
import { EpisodeService } from './episode.service';
import { collectExternalReferences } from '@angular/compiler';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl: string;
  patientInfoVM: PatientInfoVM;
  episodeTree: EpisodeTree[];
  customerAgrees: CustomerAgree[];
  hn: string;

  constructor(
    public episodeService: EpisodeService,
    public doctorService: DoctorService,
    public apiService: ApiService
  ) {}

  public setPatientInfoVM(patientInfoVM: PatientInfoVM) {
    this.clear();
    if (patientInfoVM != null) {
      this.patientInfoVM = patientInfoVM;
      this.hn = patientInfoVM.PatientInfo.PAPMI_No;
      this.episodeTree = patientInfoVM.EpisodeTree;
      this.episodeService.setEpisodeTree(patientInfoVM.EpisodeTree);
      this.apiService.getCustomerAgrees(patientInfoVM.PatientInfo.PAPMI_RowId1)
        .subscribe(c => this.setCustomerAgrees(c));
      // console.log(this.patientInfoVM.EpisodeTree);
    }
  }

  public setCustomerAgrees(customerAgrees: CustomerAgree[]) {
    this.customerAgrees = [];
    this.customerAgrees = customerAgrees;
    console.log(customerAgrees);
  }

  public clear() {
    this.patientInfoVM = null;
    this.episodeService.clear();
    this.doctorService.clear();
  }
}
