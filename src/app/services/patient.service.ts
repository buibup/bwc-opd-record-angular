import { DoctorService } from './doctor.service';
import { PatientInfoVM } from './../models/patient-info-vm.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

import {Observable, of} from 'rxjs';
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

  constructor(public episodeService: EpisodeService,
    public doctorService: DoctorService) {

  }

  public setPatientInfoVM(patientInfoVM: PatientInfoVM) {
    this.clear();
    if (patientInfoVM != null) {
      this.patientInfoVM = patientInfoVM;
      this.episodeTree = patientInfoVM.EpisodeTree;
      this.episodeService.setEpisodeTree(patientInfoVM.EpisodeTree);
      //  console.log(this.doctorService.vitalSignsOPDs);
    }
  }

  public clear() {
    this.patientInfoVM = null;
    this.episodeTree = [];
    this.episodeService.setEpisodeTree([]);
    this.episodeService.setEpisodeSeleted(null);
    this.doctorService.clear();
  }
}
