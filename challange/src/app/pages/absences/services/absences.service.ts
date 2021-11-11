import { IApiResult } from '@challange/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAbsences } from '../models';


@Injectable()
export class AbsencesService {
  constructor(private http: HttpClient) { }

  getAbsences(): Observable<IApiResult<IAbsences[]>> {
    return this.http.get<IApiResult<IAbsences[]>>
      ('assets/absences.json')
  }
}
