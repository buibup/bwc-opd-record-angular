import { Injectable, Inject, Input } from '@angular/core';
import { EpisodeTree } from '../models/episode-tree.model';

@Injectable()
export class EpisodeService {
  @Input() episodeTree: EpisodeTree[];
  episodeSelected: EpisodeTree;
  episodeList: EpisodeTree[];

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }

  public setEpisodeSeleted(episodeSelected: EpisodeTree) {
    this.episodeSelected = episodeSelected;
    console.log(this.episodeSelected);
  }

  public addEpisode(episode: EpisodeTree) {
    this.episodeList.push(episode);
  }

  public removeEpisode(episode: EpisodeTree) {
    const index = this.episodeList.indexOf(episode, 0);
    if (index > -1) {
      this.episodeList.splice(index, 1);
    }
  }
}
