import { Injectable } from '@angular/core';
import { FacebookPage } from './FacebookPage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MockOfPages } from './mocks/mock-of-pages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacebookpageService {

  PagesUrl = 'api/FacebookPagesDataBase';

  constructor(private http: HttpClient) { }

  getPagesFromDataBase(pageNumber: string): Observable <FacebookPage[]> {
    return this.http.get<FacebookPage[]>(this.PagesUrl);
  }
}
