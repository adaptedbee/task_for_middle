import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flat } from '../models/flat';
import dataJson from './entities';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

  constructor() { }

  getFlats(params = {}): Observable<Flat[]> {
    const data = JSON.parse(dataJson);
    let flats = [];

    if (data && data['response']) {
      flats = data['response'].map(item => new Flat().deserialize(item));
    }

    return of(flats);
  }
}
