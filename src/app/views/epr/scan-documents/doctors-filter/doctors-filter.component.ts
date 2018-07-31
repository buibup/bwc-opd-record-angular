import { EpisodeService } from './../../../../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doctors-filter',
  templateUrl: './doctors-filter.component.html',
  styleUrls: ['./doctors-filter.component.scss']
})
export class DoctorsFilterComponent implements OnInit {

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
