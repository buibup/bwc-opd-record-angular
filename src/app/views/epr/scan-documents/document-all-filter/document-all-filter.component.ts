import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../services/episode.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-all-filter',
  templateUrl: './document-all-filter.component.html',
  styleUrls: ['./document-all-filter.component.scss']
})
export class DocumentAllFilterComponent implements OnInit {
  constructor(
    public episodeService: EpisodeService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  log(event: boolean) {
    // console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
    console.log(`${event}`);
  }
}
