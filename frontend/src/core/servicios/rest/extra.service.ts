import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../session.service';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ExtraService {
  public url = environment.macaBackend;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
  ) {}

  public getAnyService(
    nameService: string,
    paramsIn: HttpParams = null,
  ): Observable<any> {
    return this.http
      .get(this.url + nameService, {
        headers: this.sessionService.getHeader(),
        params: paramsIn,
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public postAnyService(
    nameService: string,
    requestBody: any,
    paramsIn: HttpParams,
  ): Observable<any> {
    return this.http
      .post(this.url + nameService, requestBody, {
        headers: this.sessionService.getHeader(),
        params: paramsIn,
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
