import { GlobalFiltersModel } from './GlobalFilters.model';

export class AdvancedSearchInputModel extends GlobalFiltersModel {
  id: string;

  status: string;

  eventType: string;

  rentalId: string;

  partnerId: string;

  document: string;

  uberDriverId: string;

  complianceStatus: string;

  constructor(
    id: string,
    status: string,
    eventType: string,
    rentalId: string,
    partnerId: string,
    document: string,
    uberDriverId: string,
    complianceStatus: string,
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
    this.id = id;
    this.status = status;
    this.eventType = eventType;
    this.rentalId = rentalId;
    this.partnerId = partnerId;
    this.document = document;
    this.uberDriverId = uberDriverId;
    this.complianceStatus = complianceStatus;
  }
}
