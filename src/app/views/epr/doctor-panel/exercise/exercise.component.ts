import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';
import { EpisodeService } from '../../../../services/episode.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  isCollapsed = false;
  isExercise = false;

  constructor(public doctorService: DoctorService,
    episodeService: EpisodeService) { }

  ngOnInit() {
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
