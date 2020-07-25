import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonItemService {

  constructor() { }

  upperCaseName(name: string) {
    return !!name ? `Nome: ${name.toUpperCase()}` : 'Nome não informada';
  }
}
