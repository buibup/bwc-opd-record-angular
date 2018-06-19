import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../services/doctor.service';

@Component({
  selector: 'app-anti-aging',
  templateUrl: './anti-aging.component.html',
  styleUrls: ['./anti-aging.component.scss']
})
export class AntiAgingComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;
  isHistory: boolean = true;
  isGenetic: boolean = true;
  isFamilyHistory: boolean = true;
  isPhysicalExamination: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
