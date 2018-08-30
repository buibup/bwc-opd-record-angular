import { TypeFilter } from './type-filter.model';
export interface DoctorFilter {
    DoctorName: string;
    TypeFilters: TypeFilter[];
}
