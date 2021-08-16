export class GlobalFiltersModel {
    limit?: number;
  
    offset?: number;
  
    sortField?: string;
  
    sortOrder?: string;
  
    dateRangeField?: string;
  
    dateRangeStart?: string;
  
    dateRangeEnd?: string;
  
    constructor(
      limit: number,
      offset: number,
      sortField: string,
      sortOrder: string,
      dateRangeField: string,
      dateRangeStart: string,
      dateRangeEnd: string
    ) {
      this.limit = limit;
      this.offset = offset;
      this.sortField = sortField;
      this.sortOrder = sortOrder;
      this.dateRangeField = dateRangeField;
      this.dateRangeStart = dateRangeStart;
      this.dateRangeEnd = dateRangeEnd;
    }
  }
  