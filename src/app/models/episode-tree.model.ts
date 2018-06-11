import { DoctorPanel } from './doctor-panel.model';

export class EpisodeTree {
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
    VisitType: string;
}
