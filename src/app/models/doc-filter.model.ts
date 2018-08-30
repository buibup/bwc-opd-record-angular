import { DoctorFilter } from './doctor-filter.model';
import { TypeFilter } from './type-filter.model';
export interface DocFilter {
    TypeFilters: TypeFilter[];
    DoctorFilters: DoctorFilter[];
}
