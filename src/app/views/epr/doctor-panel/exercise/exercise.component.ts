import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = true;
  isExercise: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
