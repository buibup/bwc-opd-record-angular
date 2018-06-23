import { Injectable, Inject, Input } from "@angular/core";
import { EpisodeTree } from "../models/episode-tree.model";

@Injectable()
export class EpisodeService {
  @Input() episodeTree: EpisodeTree[];
  episodeSelected: EpisodeTree;
  episodeList: EpisodeTree[] = [];

  public setEpisodeTree(episodeTree: EpisodeTree[]) {
    this.episodeTree = episodeTree;
  }

  public setEpisodeSeleted(episodeSelected: EpisodeTree) {
    this.episodeSelected = episodeSelected;
    // console.log(this.episodeSelected);
  }

  public addEpisode(episode: EpisodeTree) {
    const item = this.episodeList.filter(e => e.PAADM_RowID === episode.PAADM_RowID);
    if (item.length === 0) {
      this.episodeList.push(episode);
      console.log(episode);
      console.log(this.episodeList);
    }
  }

  public removeEpisode(episode: EpisodeTree) {
    const index = this.episodeList.indexOf(episode, 0);
    if (index > -1) {
      this.episodeList.splice(index, 1);
    }
    console.log(episode);
    console.log(this.episodeList);
  }

  clear() {
    this.episodeSelected = null;
    this.episodeList = [];
    this.episodeTree = null;
  }
}
