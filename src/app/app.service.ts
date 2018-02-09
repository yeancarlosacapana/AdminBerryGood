import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private Url: String = 'http://127.0.0.1:8000/api'

  constructor(private http: Http) { }

  public getDistrito()
  {
    return this.http.get(this.Url + '/distrito');
  }
  public getCategory()
  {
    return this.http.get(this.Url + '/categoria');
  }
  public getProduct()
  {
    return this.http.get(this.Url + '/producto');
  }
}
