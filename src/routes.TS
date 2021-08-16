import { Express } from 'express';
import { container } from './di-setup';
import TransactionController from './controllers/TransactionController';

const routes = container.resolve<Express>('express');
const transactionController = container.resolve<TransactionController>(
  'transactionController'
);

routes.post(
  '/v1/transactions/reprocessing',
  transactionController.reprocessTransaction
);
routes.post('/v1/transactions/search', transactionController.search);
routes.post(
  '/v1/transactions/advanced-search',
  transactionController.advancedSearch
);
routes.post(
  '/v1/transactions/custom-search',
  transactionController.customSearch
);
routes.post(
  '/v1/transactions/generic-search',
  transactionController.genericSearch
);

routes.get('/health', (req, res) => {
  res.end(`OK for ${process.uptime()} seconds`);
});

export default routes;
