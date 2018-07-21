import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../services/doctor.service';
import { EpisodeService } from '../../../../services/episode.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  isCollapsed = false;
  isPlanAndTreatment = false;
  isPlan = false;
  isTreatment = false;

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
