import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';

@Component({
  selector: 'app-epr-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.scss']
})
export class DoctorPanelComponent implements OnInit {

  constructor(public episodeService: EpisodeService) { }

  ngOnInit() {
  }

  tabs: any[] = [];
  // = [
  //   { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
  //   { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
  //   { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  // ];

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
