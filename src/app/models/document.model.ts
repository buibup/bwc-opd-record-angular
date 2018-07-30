export interface Document {
  DateCreated: Date;
  TimeCreated: any;
  SADST_Code: string;
  SADST_Desc: string;
  Path: string;
  DocumentBinary?: any;
  Notes: string;
  DocumentType: string;
  ContentType: string;
  DocumentUrl: string;
  DocType: string;
  IsPdf: boolean;
}
