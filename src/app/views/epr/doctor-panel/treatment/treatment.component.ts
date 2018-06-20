import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;
  isPlanAndTreatment: boolean = true; 
  isPlan: boolean = true; 
  isTreatment: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
