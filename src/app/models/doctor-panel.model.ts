import { Diet } from './diet.model';
import { PhysicalExams } from './physical-exams.model';

export interface DoctorPanel {
  VitalSignsOPDs: any[];
  PhysicalExams: PhysicalExams;
  Diets: Diet[];
  Exercises: any[];
  PlanAndTreatments: any[];
}
