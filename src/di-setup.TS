import * as awilix from 'awilix';
import axios from 'axios';
import https from 'https';
import express, { Router } from 'express';
import TransactionController from './controllers/TransactionController';
import TransactionApplication from './applications/TransactionApplication';
import ManagerService from './services/ManagerService';

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
});

let httpsAgent: https.Agent;
if (process.env.NODE_ENV === 'development') {
  httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });
}

function setup(): void {
  container.register({
    transactionController: awilix.asClass(TransactionController).singleton(),
    transactionApplication: awilix.asClass(TransactionApplication).singleton(),
    ManagerService: awilix.asClass(ManagerService).singleton(),
    ManagerHttpClient: awilix.asValue(
      axios.create({
        baseURL: process.env.MANAGER_BASE_URL,
        httpsAgent
      })
    ),
    express: awilix.asValue(Router())
  });
}

export { container, setup };
