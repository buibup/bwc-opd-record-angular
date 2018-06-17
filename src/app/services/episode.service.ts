import { Injectable, Inject, Input } from '@angular/core';
import { EpisodeTree } from '../models/episode-tree.model';

@Injectable()
export class EpisodeService {

  @Input() episodeTree: EpisodeTree[];

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }
}
