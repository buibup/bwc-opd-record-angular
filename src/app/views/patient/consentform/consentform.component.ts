import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consentform',
  templateUrl: './consentform.component.html',
  styleUrls: ['./consentform.component.scss']
})
export class ConsentformComponent implements OnInit {

  constructor(public patietnService: PatientService) { }

  ngOnInit() {
  }

}
