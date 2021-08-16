import { GlobalFiltersModel } from "./GlobalFilters.model";

export class GenericSearchModel extends GlobalFiltersModel {
    searchType? =''
    query? = '';
    eventType? = '';
    status? = '';
    index? = ''
  
    constructor(
      searchType: string,
      index: string,
      query: string,
      eventType: string,
      status: string,
      limit: number,
      offset: number,
      sortField: string,
      sortOrder: string,
      dateRangeField: string,
      dateRangeStart: string,
      dateRangeEnd: string
    ) {
      super(
        limit,
        offset,
        sortField,
        sortOrder,
        dateRangeField,
        dateRangeStart,
        dateRangeEnd
      );
      this.searchType = searchType;
      this.index = index;
      this.query = query;
      this.eventType = eventType;
      this.status = status;
    }
  }