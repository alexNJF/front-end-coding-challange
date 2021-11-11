import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResult } from '@challange/core';
import { IMember } from '../models';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  getMember(): Observable<IApiResult<IMember[]>> {
    return this.http.get<IApiResult<IMember[]>>
      ('assets/members.json')
  }
}
