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

  episodeTabList = [];
  tabs: any[] = [];

  constructor(public episodeService: EpisodeService,
    public doctorService: DoctorService,
    public patientService: PatientService) {
  }

  ngOnInit() {
  }

  setDoctorPanelDisplay(epiRowId: number) {
    const item = this.episodeService.episodeList.filter(e => e.PAADM_RowID === epiRowId)[0];
    const doctorPanel = item.DoctorPanel;
    if (doctorPanel) {
      this.doctorService.setDoctorPanelDisplay(doctorPanel);
    }
  }

  public setEpisodeActive(epiRowId: number) {
    this.episodeService.setEpisodeActive(epiRowId);
  }

  public addEpisodePin(episode: EpisodeTree) {
    this.episodeService.addEpisodePin(episode);
  }

  public removeEpisodePin(episode: EpisodeTree) {
    this.episodeService.removeEpisodePin(episode);
  }

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

}
