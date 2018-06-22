import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';
import { EpisodeTree } from '../../../models/episode-tree.model';

@Component({
  selector: 'app-epr-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.scss']
})
export class DoctorPanelComponent implements OnInit {

  episodeTabList = [];
  tabs: any[] = [];

  constructor(public episodeService: EpisodeService) {
  }

  ngOnInit() {
  }

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

}
