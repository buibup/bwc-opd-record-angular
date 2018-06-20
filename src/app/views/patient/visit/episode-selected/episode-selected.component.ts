import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../../services/episode.service';

@Component({
  selector: 'app-episode-selected',
  templateUrl: './episode-selected.component.html',
  styleUrls: ['./episode-selected.component.scss']
})
export class EpisodeSelectedComponent implements OnInit {

  constructor(public episodeService: EpisodeService) { }

  ngOnInit() {
  }

}
