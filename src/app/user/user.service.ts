import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAPIList } from './user.interfaces';
import { delay } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<UserAPIList>(`${USER_API}/findAll`).pipe(delay(1000))
  }
}