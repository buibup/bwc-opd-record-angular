import { Injectable, Inject, Input } from '@angular/core';
import { EpisodeTree } from '../models/episode-tree.model';

@Injectable()
export class EpisodeService {
  @Input() episodeTree: EpisodeTree[];
  episodeSelected: EpisodeTree;

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }

  public setEpisodeSeleted(episodeSelected: EpisodeTree) {
    this.episodeSelected = episodeSelected;
    console.log(this.episodeSelected);
  }
}
