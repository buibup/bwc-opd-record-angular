import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../services/episode.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-all-filter',
  templateUrl: './document-all-filter.component.html',
  styleUrls: ['./document-all-filter.component.scss']
})
export class DocumentAllFilterComponent implements OnInit {
  isPdf: boolean;

  constructor(
    public episodeService: EpisodeService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  setIsPdf(contentType: string) {
    if (contentType.search('pdf') !== -1) {
      this.isPdf = true;
    } else {
      this.isPdf = false;
    }
  }
}
