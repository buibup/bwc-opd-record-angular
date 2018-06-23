import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../services/doctor.service';
import { EpisodeService } from '../../../../../services/episode.service';

@Component({
  selector: 'app-anti-aging',
  templateUrl: './anti-aging.component.html',
  styleUrls: ['./anti-aging.component.scss']
})
export class AntiAgingComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    episodeService: EpisodeService) { }

  ngOnInit() {
  }

  isCollapsed: boolean = false;
  isHistory: boolean = false;
  isGenetic: boolean = false;
  isFamilyHistory: boolean = false;
  isPhysicalExamination: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
