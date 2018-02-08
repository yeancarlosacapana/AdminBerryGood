import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private Url: string = "http://127.0.0.1:8000/api";

  constructor(private http:Http) { }

  public getDistrito()
  {
    return this.http.get(this.Url + '/distrito');
  }
}
