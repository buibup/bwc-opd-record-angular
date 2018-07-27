import { EpisodeService } from './../../../services/episode.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-documents',
  templateUrl: './scan-documents.component.html',
  styleUrls: ['./scan-documents.component.scss']
})
export class ScanDocumentsComponent implements OnInit {

  isScanDocumentsOpen = true;

  constructor(public apiService: ApiService,
  public episodeService: EpisodeService) { }

  ngOnInit() {
  }

}
