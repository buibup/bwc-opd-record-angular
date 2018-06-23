import { Injectable } from '@angular/core';
import { DoctorPanel } from '../models/doctor-panel.model';
import { VitalSignsOPD } from '../models/vital-signs-opd.model';
import { PhysicalExams } from '../models/physical-exams.model';
import { Diet } from '../models/diet.model';
import { Exercise } from '../models/exercise.model';
import { PlanAndTreatment } from '../models/treatment.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorPanel: DoctorPanel;
  vitalSignsOPDs: VitalSignsOPD[];
  physicalExams: PhysicalExams;
  diets: Diet[];
  exercises: Exercise[];
  planAndTreatments: PlanAndTreatment[];

  // public setDoctorPanel(doctorPanel: DoctorPanel) {
  //   this.clear();
  //   if (doctorPanel != null) {
  //     this.doctorPanel = doctorPanel;
  //     this.vitalSignsOPDs = doctorPanel.VitalSignsOPDs;
  //     this.physicalExams = doctorPanel.PhysicalExams;
  //     this.diets = doctorPanel.Diets;
  //     this.exercises = doctorPanel.Exercises;
  //     this.planAndTreatments = doctorPanel.PlanAndTreatments;
  //     // console.log(this.doctorPanel.PhysicalExams.AntiAgings.length);
  //   }
  // }

  public setDoctorPanelDisplay(doctorPanel: DoctorPanel) {
    this.clear();
    if (doctorPanel != null) {
      this.doctorPanel = doctorPanel;
      this.vitalSignsOPDs = doctorPanel.VitalSignsOPDs;
      this.physicalExams = doctorPanel.PhysicalExams;
      this.diets = doctorPanel.Diets;
      this.exercises = doctorPanel.Exercises;
      this.planAndTreatments = doctorPanel.PlanAndTreatments;
      // console.log(this.doctorPanel.PhysicalExams.AntiAgings.length);
    }
  }

  clear() {
    this.doctorPanel = null;
    this.vitalSignsOPDs = [];
    this.physicalExams = null;
    this.diets = [];
    this.exercises = [];
    this.planAndTreatments = [];
  }
}
