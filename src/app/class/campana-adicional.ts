import {Producto} from '../class/producto';
export class CampanaAdicional {
  public cod_campaña_adicional: number;
  public cantidad: number;
  public descuento: number;
  public producto: Producto;
  constructor() {
    this.producto = new Producto();
  }
}
