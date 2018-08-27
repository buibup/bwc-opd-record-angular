import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(public patietnService: PatientService) {
   }

  ngOnInit() {
  }

}
