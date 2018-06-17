import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { PatientService } from '../../services/patient.service';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(public episodeService: EpisodeService,
    public patientService: PatientService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
