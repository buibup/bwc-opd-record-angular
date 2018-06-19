import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';
import { ApiService } from '../../../services/api.service';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  constructor(public episodeService: EpisodeService,
    public apiService: ApiService,
    public doctor: DoctorService) { }

  ngOnInit() {
  }

  public getDoctorPanelByEpiRowId(epiRowId: number) {
    this.apiService.getDoctorPanelByEpiRowId(epiRowId)
      .subscribe(dp => this.doctor.setDoctorPanel(dp));
  }

}
