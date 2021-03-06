import { PatientService } from './patient.service';
import { ApiService } from './api.service';
import { DocumentFilter } from './../models/document-filter.model';
import { DoctorService } from './doctor.service';
import { DoctorPanel } from './../models/doctor-panel.model';
import { Injectable, Inject, Input } from '@angular/core';
import { EpisodeTree } from '../models/episode-tree.model';
import { DocumentFilterEnum } from '../enums';
import { environment } from '../../environments/environment';

@Injectable()
export class EpisodeService {
  @Input() episodeTree: EpisodeTree[];
  episodeSelected: EpisodeTree;
  episodeList: EpisodeTree[] = [];
  documentFilter: DocumentFilter = new DocumentFilter();

  constructor(public doctorService: DoctorService) {}

  public setDefaultdocumentFilterActive() {
    this.documentFilter.isDoctorsActive = true;
    this.documentFilter.isDocumentsActive = false;
    this.documentFilter.isDocumentTypesActive = false;
  }

  public setDocumentFilter(documentFilter: DocumentFilter) {
    this.documentFilter = documentFilter;
    this.setDefaultdocumentFilterActive();
    console.log(this.documentFilter);
  }

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }

  public setEpisodeSeleted(episodeSelected: EpisodeTree) {
    this.episodeSelected = episodeSelected;
    console.log(this.episodeSelected);
  }

  public addDoctorPanelToEpisodeTree(
    epiRowId: number,
    doctorPanel: DoctorPanel
  ) {
    const item = this.episodeList.filter(e => e.PAADM_RowID === epiRowId)[0];
    if (item) {
      item.DoctorPanel = doctorPanel;
      this.doctorService.setDoctorPanelDisplay(doctorPanel);
    }
  }

  public addEpisode(episode: EpisodeTree) {
    const item = this.episodeList.filter(
      e => e.PAADM_RowID === episode.PAADM_RowID
    )[0];
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

  public addEpisodeTabs(episode: EpisodeTree) {
    if (episode.pin) {
      this.addEpisode(episode);
    } else {
      // clear episode unpin
      this.clearEpisodeListUnpin();

      // add episode for display
      this.addEpisode(episode);
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

  public setDocumentFilterActive(documentFilterEnum: DocumentFilterEnum) {
    this.clearDocumentFilterActive();

    if (documentFilterEnum === DocumentFilterEnum.Doctors) {
      this.documentFilter.isDoctorsActive = true;
    } else if (documentFilterEnum === DocumentFilterEnum.DocumentTypes) {
      this.documentFilter.isDocumentTypesActive = true;
    } else if (documentFilterEnum === DocumentFilterEnum.All) {
      this.documentFilter.isDocumentsActive = true;
    }
  }

  public addEpisodePin(episode: EpisodeTree) {
    const addPin = episode;
    addPin.pin = addPin.pin ? false : true;
    this.addEpisodeTabs(addPin);
  }

  public clearEpisodeListInactive() {
    this.episodeList.forEach(e => (e.active = false));
  }

  public clearEpisodeListUnpin() {
    this.episodeList.forEach(function(item, index, object) {
      if (!item.pin) {
        object.splice(index, 1);
      }
    });
  }

  public removeEpisode(episode: EpisodeTree) {
    const index = this.episodeList.indexOf(episode, 0);
    if (index > -1) {
      this.episodeList.splice(index, 1);
    }
  }

  public removeEpisodePin(episode: EpisodeTree) {
    const index = this.episodeList.indexOf(episode, 0);
    if (index > -1) {
      // remove pin
      episode.pin = false;
      this.episodeList.splice(index, 1);
    }
  }

  clear() {
    this.episodeSelected = null;
    this.episodeList = [];
    this.episodeTree = null;
  }

  clearDocumentFilter() {
    this.documentFilter.Doctors = [];
    this.documentFilter.DocumentTypes = [];
    this.documentFilter.Documents = [];
  }

  clearDocumentFilterActive() {
    this.documentFilter.isDoctorsActive = false;
    this.documentFilter.isDocumentsActive = false;
    this.documentFilter.isDocumentTypesActive = false;
  }
}
