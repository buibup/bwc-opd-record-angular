import { PatientInfo } from './patient-info.model';
import { EpisodeTree } from './episode-tree.model';

export interface PatientInfoVM {
  PatientInfo: PatientInfo;
  EpisodeTree: EpisodeTree[];
}
