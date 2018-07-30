import { EpisodeService } from './../../../../services/episode.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-types-filter',
  templateUrl: './document-types-filter.component.html',
  styleUrls: ['./document-types-filter.component.scss']
})
export class DocumentTypesFilterComponent implements OnInit {
  constructor(
    public episodeService: EpisodeService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}
}
