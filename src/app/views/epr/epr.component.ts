import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { EpisodeTree } from '../../models/episode-tree.model';

@Component({
  selector: 'app-epr',
  templateUrl: './epr.component.html',
  styleUrls: ['./epr.component.scss']
})
export class EprComponent implements OnInit {

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

  public setEpisodeActive(epiRowId: number, episode: EpisodeTree) {
    this.episodeService.setEpisodeActive(epiRowId);
    this.episodeService.setEpisodeSeleted(episode);
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
