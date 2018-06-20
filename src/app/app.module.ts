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

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

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
import { PanelComponent } from './components/panel/panel.component';
import { EpisodeSelectedComponent } from './views/patient/visit/episode-selected/episode-selected.component';


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
    PanelComponent,
    EpisodeSelectedComponent
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
