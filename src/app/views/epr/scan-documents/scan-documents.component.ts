import { DocumentFilter } from './../../../models/document-filter.model';
import { EpisodeService } from './../../../services/episode.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { DocumentFilterEnum } from '../../../enums';

@Component({
  selector: 'app-scan-documents',
  templateUrl: './scan-documents.component.html',
  styleUrls: ['./scan-documents.component.scss']
})
export class ScanDocumentsComponent implements OnInit {
  isScanDocumentsOpen = true;
  DocumentFilter = DocumentFilterEnum;

  constructor(
    public apiService: ApiService,
    public episodeService: EpisodeService
  ) {}

  ngOnInit() {
    this.episodeService.setDefaultdocumentFilterActive();
  }

  setDocumentFilterCurrentActive(documentFilterEnum: DocumentFilterEnum) {
    this.episodeService.setDocumentFilterActive(documentFilterEnum);
    console.log(documentFilterEnum);
  }
}
