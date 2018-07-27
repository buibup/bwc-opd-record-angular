import { DoctorPanel } from './doctor-panel.model';
import { DocumentFilter } from './document-filter.model';

export interface EpisodeTree {
  PAADM_RowID: number;
  PAADM_ADMNo: string;
  PAADM_AdmDate: Date;
  PAADM_AdmTime: any;
  CTLOC_Desc: string;
  CTPCP_Desc: string;
  PAADM_Type: string;
  PAADM_VisitStatus: string;
  PAADM_DischgDate?: any;
  PAADM_DischgTime?: any;
  PAADM_Remark?: any;
  DoctorPanel: DoctorPanel;
  DocumentFilter: DocumentFilter;
  VisitType: string;
  active?: any;
  pin?: boolean;
}
