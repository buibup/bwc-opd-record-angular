import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../services/doctor.service';
import { EpisodeService } from '../../../../../services/episode.service';

@Component({
  selector: 'app-anti-aging',
  templateUrl: './anti-aging.component.html',
  styleUrls: ['./anti-aging.component.scss']
})
export class AntiAgingComponent implements OnInit {

  isCollapsed = false;
  isHistory = false;
  isGenetic = false;
  isFamilyHistory = false;
  isPhysicalExamination = false;

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
