import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { List } from '../models/List';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  listLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  //Get lists
  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.listUrl}${this.listLimit}`);
  }

  //Delete list
  deleteList(list: List): Observable<List> {
    const url = `${this.listUrl}/${list.id}`;
    return this.http.delete<List>(url, httpOptions);
  }

  //Add list
  addList(list: List): Observable<List> {
    return this.http.post<List>(this.listUrl, list, httpOptions);
  }

  //Toggle completed
  toggleCompleted(list: List): Observable<any> {
    const url = `${this.listUrl}/${list.id}`;
    return this.http.put<List>(url, list, httpOptions);
  }
}
