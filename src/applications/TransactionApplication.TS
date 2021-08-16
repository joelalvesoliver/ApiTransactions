import AdapterManagerService from '../services/ManagerService';
import { SearchInputModel } from '../models/SearchInput.model';
import { AdvancedSearchInputModel } from '../models/AdvancedSearchInput.model';
import { CustomSearchInputModel } from '../models/CustomSearchInput.model';

interface Constructor {
  adapterManagerService: AdapterManagerService;
}

export default class TransactionApplication {
  adapterManagerService: AdapterManagerService;

  constructor({ adapterManagerService }: Constructor) {
    this.adapterManagerService = adapterManagerService;
  }

  async reprocess(transactionIds: Array<string>): Promise<number> {
    try {
      if (transactionIds === null || transactionIds.length <= 0) {
        throw new Error('TransactionId is null or empty.');
      }

      return await this.adapterManagerService.sendTransactions(transactionIds);
    } catch (error) {
      console.log('ERROR! reprocess: ', error);
      throw error;
    }
  }

  async search(objFilter: SearchInputModel): Promise<string> {
    try {
      return await this.adapterManagerService.search(objFilter);
    } catch (error) {
      console.log('ERROR! search: ', error);
      throw error;
    }
  }

  async advancedSearch(objFilter: AdvancedSearchInputModel): Promise<string> {
    try {
      if (Object.keys(Object(objFilter)).length === 0) {
        throw new Error('No filter object informed.');
      }

      return await this.adapterManagerService.advancedSearch(objFilter);
    } catch (error) {
      console.log('ERROR! advancedSearch: ', error);
      throw error;
    }
  }

  async customSearch(objFilter: CustomSearchInputModel): Promise<string> {
    try {
      if (
        Object.keys(Object(objFilter)).length === 0 ||
        objFilter.query === undefined ||
        objFilter.query === ''
      ) {
        throw new Error('Query not informed.');
      }

      if (objFilter.index === undefined || objFilter.index === '') {
        throw new Error('Index not informed.');
      }

      return await this.adapterManagerService.customSearch(objFilter);
    } catch (error) {
      console.log('ERROR! customSearch: ', error);
      throw error;
    }
  }
}
