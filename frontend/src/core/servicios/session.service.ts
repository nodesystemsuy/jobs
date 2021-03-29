import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SessionService {

  public static STRING_TOKEN = 'access_token';
  public static OBJECT_TOKEN = 'object_token';

  constructor() {
  }

  public exists(key): any {
    return localStorage.getItem(key);
  }

  public setItem(key, value): any {
    localStorage.setItem(key, value);
  }

  public getItem(key): any {
    return localStorage.getItem(key);
  }

  public setObject(key, object): any {
    const value = JSON.stringify(object);
    localStorage.setItem(key, value);
  }

  public getObject(key): any {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  public clear(): any {
    localStorage.clear();
  }

  public getHeader(): HttpHeaders {
    let headers;
    return headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

}
