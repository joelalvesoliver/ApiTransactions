import { GlobalFiltersModel } from './GlobalFilters.model';

export class CustomSearchInputModel extends GlobalFiltersModel {
  index: string;

  query: string;

  constructor(
    query: string,
    eventType: string,
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
    this.index = query;
    this.query = eventType;
  }
}
