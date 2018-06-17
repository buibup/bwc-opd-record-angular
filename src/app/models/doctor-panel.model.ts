import { PhysicalExams } from './physical-exams.model';

export interface DoctorPanel {
  VitalSignsOPDs: any[];
  PhysicalExams: PhysicalExams;
  Diets: any[];
  Exercises: any[];
  PlanAndTreatments: any[];
}
