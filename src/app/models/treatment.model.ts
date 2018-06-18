export interface PlanAndTreatment {
  QUESDate: Date;
  QUESTime: any;
  Plan: Plan;
  Treatment: Treatment;
  SSUSR_Name: string;
}

export interface Treatment {
  Medications: Medication[];
  QSupplementW: number;
  QSupplementM: number;
  QSupplement: string;
  QFollowUpPhoneW: number;
  QFollowUpPhoneM: number;
  QFollowUpW: number;
  QFollowUpMonth: number;
}

export interface Plan {
  QDiet: string;
  QDietText: string;
  QExercise: string;
  QExerciseText: string;
  QSleepText: string;
  QPlanText: string;
}

export interface Medication {
  ARCIM_Desc: string;
  QDose: string;
}
