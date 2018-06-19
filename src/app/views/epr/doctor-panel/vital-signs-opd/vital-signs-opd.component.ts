import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-vital-signs-opd',
  templateUrl: './vital-signs-opd.component.html',
  styleUrls: ['./vital-signs-opd.component.scss']
})
export class VitalSignsOpdComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
