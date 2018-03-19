import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RandomUserMe } from '../../models/user';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {

  private url = 'https://randomuser.me/api?results=200';
  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
  }

  getRandomUsers(): Observable<RandomUserMe> {
    return this.http.get<RandomUserMe>(this.url);
  }

}
