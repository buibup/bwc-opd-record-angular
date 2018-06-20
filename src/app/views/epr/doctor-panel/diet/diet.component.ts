import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;
  isDietaryPatterns: boolean = true;
  isBehavioral: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
