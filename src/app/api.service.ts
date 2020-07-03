import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const data = [
  '🍎',
  '🍐',
  '🧀',
  '🍕',
  '🍬',
  '🥜',
];

@Injectable({ providedIn: 'root'})
export class ApiService {

  constructor() { }

  public getItems(): Observable<string[]> {
    return of(data).pipe(
      delay(2000)
    );
  }

}
