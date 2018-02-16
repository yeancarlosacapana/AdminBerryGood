import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private Url: String = 'http://127.0.0.1:8000/api/';

  constructor(private http: Http) { }

  public getDistrito()
  // tslint:disable-next-line:one-line
  {
    return this.http.get(this.Url + 'distrito');
  }
  public postDistrito(oDistrito)
  // tslint:disable-next-line:one-line
  {
    return this.http.post( this.Url + 'distrito', oDistrito );
  }
  public destroyDistrito(cod_distrito)
  // tslint:disable-next-line:one-line
  {
    return this.http.delete( this.Url + 'distrito/' + cod_distrito);
  }
  public getCategory()
  // tslint:disable-next-line:one-line
  {
    return this.http.get(this.Url + 'categoria');
  }
  public postCategory(oProducto)
  // tslint:disable-next-line:one-line
  {
    return this.http.post( this.Url + 'categoria' , oProducto);
  }
  public updCategory(oProducto)
  // tslint:disable-next-line:one-line
  {
    return this.http.put( this.Url + 'categoria/' + oProducto.cod_producto , oProducto);
  }
  destroyCategory(cod_producto)
  // tslint:disable-next-line:one-line
  {
    return this.http.delete( this.Url + 'categoria/' + cod_producto);
  }
  public getProduct()
  // tslint:disable-next-line:one-line
  {
    return this.http.get(this.Url + 'producto');
  }
  public postProduct(oProducto)
  // tslint:disable-next-line:one-line
  {
    return this.http.post( this.Url + 'producto' , oProducto);
  }
  public updProduct(oProducto)
  // tslint:disable-next-line:one-line
  {
    return this.http.put( this.Url + 'producto/' + oProducto.cod_producto , oProducto);
  }
  destroyProduct(cod_producto)
  // tslint:disable-next-line:one-line
  {
    return this.http.delete( this.Url + 'producto/' + cod_producto);
  }
}
