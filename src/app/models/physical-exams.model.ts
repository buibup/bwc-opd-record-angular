export interface PhysicalExams {
  AntiAgings: any[];
  GIs: any[];
  Hearts: any[];
  NEUROs: any[];
  Sports: any[];
}

export interface AntiAging {
  ID: number;
  QUESDate: Date;
  QUESTime: any;
  History: History;
  IsHistory: boolean;
  Genetic: any;
  IsGenetic: boolean;
  FamilyHistory: any;
  IsFamilyHistory: boolean;
  PhysicalExamination: PhysicalExamination;
  IsPhysicalExamination: boolean;
  SpecialNote: any;
  Doctor: string;
  LastUpdateUser: string;
}

export interface History {
  ChiefComplaint: string;
  ChiefComplaintOther: string;
  PresentIllness: string;
  UnderlyingDisease: string;
  CurrentMedication: string;
  Supplementation: string;
  HistoryInvestigation: string;
  GI: string;
  GIOther: string;
  Sleep: string;
  SleepHours: number;
  SleepOther: string;
  Skin: string;
  SkinOther: string;
  Memory: string;
  MemoryOther: string;
  Immune: string;
  ImmuneOther: string;
  Sexual: string;
  SexualOther: string;
  Exercise: string;
}

export interface PhysicalExamination {
  GeneralAppearance: string;
  GeneralOther: string;
  ENT: string;
  Pharynx: string;
  Tonsils: string;
  NeckNode: string;
  NeckNodeOther: string;
  Respiratory: string;
  RespiratoryOther: string;
  Cardiovascular: string;
  CardiovascularOther: string;
  Abdomen: string;
  AbdomenOther: string;
  PhysicalExam: string;
}
