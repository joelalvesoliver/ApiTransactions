import { AxiosInstance } from 'axios';
import { AdvancedSearchInputModel } from '../models/AdvancedSearchInput.model';
import { CustomSearchInputModel } from '../models/CustomSearchInput.model';
import { SearchInputModel } from '../models/SearchInput.model';

interface Constructor {
  adapterManagerHttpClient: AxiosInstance;
}

export default class AdapterManagerService {
  adapterManagerHttpClient: AxiosInstance;

  constructor({ adapterManagerHttpClient }: Constructor) {
    this.adapterManagerHttpClient = adapterManagerHttpClient;
  }

  async sendTransactions(transactionIds: Array<string>): Promise<number> {
    try {
      console.log(transactionIds);
      const res = await this.adapterManagerHttpClient.post(
        '/v1/transactions/reprocessing',
        transactionIds
      );

      if (res.status !== 202) {
        throw new Error();
      }

      return res.status;
    } catch (error) {
      console.log('ERROR - sendTransactions: ', error);
      throw error;
    }
  }

  async search(objFilter: SearchInputModel): Promise<string> {
    try {
      const res = await this.adapterManagerHttpClient.post(
        '/v1/transactions/search',
        objFilter
      );
      return res.data;
    } catch (error) {
      console.log('ERROR - search: ', error);
      throw error;
    }
  }

  async advancedSearch(objFilter: AdvancedSearchInputModel): Promise<string> {
    try {
      const res = await this.adapterManagerHttpClient.post(
        '/v1/transactions/advanced-search',
        objFilter
      );
      return res.data;
    } catch (error) {
      console.log('ERROR - advancedSearch: ', error);
      throw error;
    }
  }

  async customSearch(objFilter: CustomSearchInputModel): Promise<string> {
    try {
      const res = await this.adapterManagerHttpClient.post(
        '/v1/transactions/custom-search',
        objFilter
      );
      return res.data;
    } catch (error) {
      console.log('ERROR - customSearch: ', error);
      throw error;
    }
  }
}
