import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FacebookPage } from './FacebookPage';
import { MockOfPages } from './mocks/mock-of-pages';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const FacebookPages = MockOfPages;

    return {FacebookPages};
  }

  constructor() { }
}
