import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Import service
import { DoctorService } from './services/doctor.service';
import { PatientService } from './services/patient.service';
import { EpisodeService } from './services/episode.service';

// Collapse, Accordion
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { MatTabsModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';

// Import opd record component
import { SearchComponent } from './views/patient/search/search.component';
import { InfoComponent } from './views/patient/info/info.component';
import { VisitComponent } from './views/patient/visit/visit.component';
import { DoctorPanelComponent } from './views/epr/doctor-panel/doctor-panel.component';
import { VitalSignsOpdComponent } from './views/epr/doctor-panel/vital-signs-opd/vital-signs-opd.component';
import { PhysicalExamComponent } from './views/epr/doctor-panel/physical-exam/physical-exam.component';
import { DietComponent } from './views/epr/doctor-panel/diet/diet.component';
import { ExerciseComponent } from './views/epr/doctor-panel/exercise/exercise.component';
import { TreatmentComponent } from './views/epr/doctor-panel/treatment/treatment.component';
import { AntiAgingComponent } from './views/epr/doctor-panel/physical-exam/anti-aging/anti-aging.component';
import { EpisodeSelectedComponent } from './views/patient/visit/episode-selected/episode-selected.component';
import { ScanDocumentsComponent } from './views/epr/scan-documents/scan-documents.component';
import { EprComponent } from './views/epr/epr.component';
import { DoctorsFilterComponent } from './views/epr/scan-documents/doctors-filter/doctors-filter.component';
import { DocumentTypesFilterComponent } from './views/epr/scan-documents/document-types-filter/document-types-filter.component';
import { DocumentAllFilterComponent } from './views/epr/scan-documents/document-all-filter/document-all-filter.component';
import { ConsentformComponent } from './views/patient/consentform/consentform.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    ChartsModule,
    MatTabsModule,
    MatCheckboxModule,
    AccordionModule.forRoot(),
    MatTreeModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    InfoComponent,
    VisitComponent,
    DoctorPanelComponent,
    VitalSignsOpdComponent,
    PhysicalExamComponent,
    DietComponent,
    ExerciseComponent,
    TreatmentComponent,
    AntiAgingComponent,
    EpisodeSelectedComponent,
    ScanDocumentsComponent,
    EprComponent,
    DoctorsFilterComponent,
    DocumentTypesFilterComponent,
    DocumentAllFilterComponent,
    ConsentformComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    PatientService,
    EpisodeService,
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
