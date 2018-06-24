import { DoctorService } from './doctor.service';
import { DoctorPanel } from './../models/doctor-panel.model';
import { Injectable, Inject, Input } from '@angular/core';
import { EpisodeTree } from '../models/episode-tree.model';

@Injectable()
export class EpisodeService {
  @Input() episodeTree: EpisodeTree[];
  episodeSelected: EpisodeTree;
  episodeList: EpisodeTree[] = [];

  constructor(public doctorService: DoctorService) {

  }

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }

  public setEpisodeSeleted(episodeSelected: EpisodeTree) {
    this.episodeSelected = episodeSelected;
  }

  public addDoctorPanelToEpisodeTree(epiRowId: number, doctorPanel: DoctorPanel) {
    const item = this.episodeList.filter(e => e.PAADM_RowID === epiRowId)[0];
    if (item) {
      item.DoctorPanel = doctorPanel;
      this.doctorService.setDoctorPanelDisplay(doctorPanel);
    }
  }

  public addEpisode(episode: EpisodeTree) {
    const item = this.episodeList.filter(e => e.PAADM_RowID === episode.PAADM_RowID)[0];
    if (item == null) {
      // add new episode
      this.episodeList.push(episode);

      // set episode active
      this.setEpisodeActive(episode.PAADM_RowID);
    } else {
      // set episode active
      this.setEpisodeActive(episode.PAADM_RowID);
    }
  }

  public setEpisodeActive(epiRowId: number) {
    const item = this.episodeList.filter(e => e.PAADM_RowID === epiRowId)[0];
    if (item) {
      // clear other epi to inactive
      this.clearEpisodeListInactive();

      // set epi active
      item.active = true;
    }
  }

  public clearEpisodeListInactive() {
    this.episodeList.forEach(e => e.active = false);
  }

  public removeEpisode(episode: EpisodeTree) {
    const index = this.episodeList.indexOf(episode, 0);
    if (index > -1) {
      this.episodeList.splice(index, 1);
    }
  }

  clear() {
    this.episodeSelected = null;
    this.episodeList = [];
    this.episodeTree = null;
  }
}
