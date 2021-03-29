import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../../models/response';
import {ExtraService} from './extra.service';
// tslint:disable-next-line:no-submodule-imports
import { map } from 'rxjs/operators';
@Injectable()
export class UserService {
  private serviceUrl = 'api/v1/';
  private LoginUrl = this.serviceUrl + 'login';
  private RegistryBusinessUrl = this.serviceUrl + 'register/business';
  private RegistryEmployeeUrl = this.serviceUrl + 'register/person';

  constructor(private extraService: ExtraService) {}

  public PostLogin(body: any): Observable<Response>{
    return this.extraService.postAnyService(this.LoginUrl, body, null).pipe(
      map((res: any) => res)
    );
  }

  public RegisterBusiness(body: any): Observable<Response>{
    return this.extraService.postAnyService(this.RegistryBusinessUrl, body, null).pipe(
      map((res: any) => res)
    );
  }

  public RegisterEmployee(body: any): Observable<Response>{
    return this.extraService.postAnyService(this.RegistryEmployeeUrl, body, null).pipe(
      map((res: any) => res)
    );
  }
}
