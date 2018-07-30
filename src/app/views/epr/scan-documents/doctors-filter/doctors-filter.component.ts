import { EpisodeService } from './../../../../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doctors-filter',
  templateUrl: './doctors-filter.component.html',
  styleUrls: ['./doctors-filter.component.scss']
})
export class DoctorsFilterComponent implements OnInit {
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
