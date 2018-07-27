import { Document } from './document.model';

export interface DocumentFilter {
    Doctors: any[];
    DocumentTypes: any[];
    Documents: Document[];
}
