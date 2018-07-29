import { ApiService } from './../../../../services/api.service';
import { EpisodeService } from './../../../../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../services/patient.service';
import { HttpClient } from '../../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-doctors-filter',
  templateUrl: './doctors-filter.component.html',
  styleUrls: ['./doctors-filter.component.scss']
})
export class DoctorsFilterComponent implements OnInit {
  doctorsFilter: any[] = [];
  url = '';

  constructor(
    private http: HttpClient,
    public episodeService: EpisodeService,
    private apiService: ApiService,
    public patientService: PatientService
  ) {}

  ngOnInit() {
    this.url = this.apiService.baseUrl;
    if (this.episodeService.episodeSelected.DocumentFilter !== null) {
      this.doctorsFilter = this.episodeService.episodeSelected.DocumentFilter.Doctors;
    }
  }

  private setDocumentDisplay(hn: string, path: any) {
    this.apiService
      .getDocumentContentType(hn, path)
      .subscribe(d => this.episodeService.setDocumentDisplay(hn, path, d));
  }

  documentUrl() {
    console.log(this.episodeService.documentDisplayUrl);
    return `${this.episodeService.documentDisplayUrl}`;
  }
}
