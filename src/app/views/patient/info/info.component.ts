import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public patientService: PatientService) { }

  ngOnInit() {
  }

}
