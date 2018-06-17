import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(public apiService: ApiService,
    public patientService: PatientService) {
  }

  ngOnInit() {
  }

  public getPatientInfoByPapmiNo(papmiNo: string) {
    this.apiService.getPatientInfoByPapmiNo(papmiNo)
      .subscribe(ptVm => this.patientService.setPatientInfoVM(ptVm));
  }

}
