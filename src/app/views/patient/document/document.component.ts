import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  searchTerm: FormControl = new FormControl();

  constructor(public patientService: PatientService) {
  }

  ngOnInit() {
  }
}
