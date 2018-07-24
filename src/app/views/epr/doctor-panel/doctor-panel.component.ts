import { DoctorService } from './../../../services/doctor.service';
import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';
import { EpisodeTree } from '../../../models/episode-tree.model';
import { DoctorPanel } from '../../../models/doctor-panel.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-epr-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.scss']
})
export class DoctorPanelComponent implements OnInit {

  constructor(public episodeService: EpisodeService,
    public doctorService: DoctorService,
    public patientService: PatientService) {
  }

  ngOnInit() {
  }

}
