import { GlobalFiltersModel } from './GlobalFilters.model';

export class SearchInputModel extends GlobalFiltersModel {
  query? = '';

  eventType? = '';

  status? = '';

  constructor(
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
    this.query = query;
    this.eventType = eventType;
    this.status = status;
  }
}
