import { Request, Response } from 'express';
import TransactionApplication from '../applications/TransactionApplication';
import { AdvancedSearchInputModel } from '../models/AdvancedSearchInput.model';
import { CustomSearchInputModel } from '../models/CustomSearchInput.model';
import { GenericSearchModel } from '../models/GenericSearchModel';
import { SearchInputModel } from '../models/SearchInput.model';

interface Constructor {
  transactionApplication: TransactionApplication;
}
export default class TransactionController {
  transactionApplication: TransactionApplication;

  constructor({ transactionApplication }: Constructor) {
    this.transactionApplication = transactionApplication;

    this.reprocessTransaction = this.reprocessTransaction.bind(this);
    this.search = this.search.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.customSearch = this.customSearch.bind(this);
    this.genericSearch = this.genericSearch.bind(this);
  }

  async reprocessTransaction(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    try {
      console.log('[reprocessTransaction] request: ', request);
      const transactionIds: Array<string> = request.body;
      await this.transactionApplication.reprocess(transactionIds);

      return response.status(202).send();
    } catch (error) {
      console.log('[reprocessTransaction] exception: ', error.message);
      return response.status(500).send({ message: error.message });
    }
  }

  async search(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    try {
      console.log('[search] request: ', request);

      const searchInputModel: SearchInputModel = JSON.parse(
        JSON.stringify(request.body)
      );
      const res = await this.transactionApplication.search(searchInputModel);
      response.status(200).send(res);
      console.log('[search] response: ', response);
      return response;
    } catch (error) {
      console.log('[search] exception: ', error.message);
      return response.status(500).send({ message: error.message });
    }
  }

  async advancedSearch(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    try {
      console.log('[advancedSearch] request: ', request);

      const advancedSearchInputModel: AdvancedSearchInputModel = JSON.parse(
        JSON.stringify(request.body)
      );
      const res = await this.transactionApplication.advancedSearch(
        advancedSearchInputModel
      );
      response.status(200).send(res);
      console.log('[advancedSearch] response: ', response);
      return response;
    } catch (error) {
      console.log('[advancedSearch] exception: ', error.message);
      return response.status(500).send({ message: error.message });
    }
  }

  async customSearch(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    try {
      console.log('[customSearch] request: ', request);

      const customSearchInputModel: CustomSearchInputModel = JSON.parse(
        JSON.stringify(request.body)
      );
      const res = await this.transactionApplication.customSearch(
        customSearchInputModel
      );

      response.status(200).send(res);
      console.log('[customSearch] response: ', response);
      return response;
    } catch (error) {
      console.log('[customSearch] exception: ', error.message);
      return response.status(500).send({ message: error.message });
    }
  }

  async genericSearch(
    request: Request,
    response: Response
  ): Promise<Response<string>> {
    try {
      console.log('[genericSearch] request: ', request);
      const genericSearchModel: GenericSearchModel = JSON.parse(
        JSON.stringify(request.body)
      );
      let res;
      if (genericSearchModel.searchType === 'SEARCH') {
        const searchInputModel: SearchInputModel = JSON.parse(
          JSON.stringify(request.body)
        );
        res = await this.transactionApplication.search(searchInputModel);
      } else if (genericSearchModel.searchType === 'CUSTOM_SEARCH') {
        const customSearchInputModel: CustomSearchInputModel = JSON.parse(
          JSON.stringify(request.body)
        );
        res = await this.transactionApplication.customSearch(
          customSearchInputModel
        );
      } else {
        return response.status(400).send({ message: 'Invalid search type' });
      }

      response.status(200).send(res);
      console.log('[genericSearch] response: ', response);
      return response;
    } catch (error) {
      console.log('[genericSearch] exception: ', error.message);
      return response.status(500).send({ message: error.message });
    }
  }
}
