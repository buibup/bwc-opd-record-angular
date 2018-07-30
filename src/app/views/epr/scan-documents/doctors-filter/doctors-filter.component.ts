import { catchError } from 'rxjs/operators';
import { ApiService } from './../../../../services/api.service';
import { EpisodeService } from './../../../../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service';
import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doctors-filter',
  templateUrl: './doctors-filter.component.html',
  styleUrls: ['./doctors-filter.component.scss']
})
export class DoctorsFilterComponent implements OnInit {
  isPdf: boolean;

  constructor(
    public episodeService: EpisodeService,
    private apiService: ApiService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  setDocumentDisplay(contentType: string) {
    console.log(contentType.search('pdf') !== -1);
    if (contentType.search('pdf') !== -1) {
      this.isPdf = true;
    }
    console.log(this.isPdf);
  }
}
