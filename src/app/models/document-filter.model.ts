import { Document } from './document.model';

export class DocumentFilter {
  Doctors: any[];
  isDoctorsActive = false;
  DocumentTypes: any[];
  isDocumentTypesActive = false;
  Documents: Document[];
  isDocumentsActive = false;
}
