import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeoplesListService {

  constructor(private http: HttpClient) { }

  getPeoples(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/people/?format=json')
      .pipe(map(response => response.results.map(item => ({name: item.name}))));
  }
}
