import { Component, OnInit, Input } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-physical-exam',
  templateUrl: './physical-exam.component.html',
  styleUrls: ['./physical-exam.component.scss']
})
export class PhysicalExamComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

}
